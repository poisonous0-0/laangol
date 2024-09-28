from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import Storehouses, StorehousesRental
from .models import User as DbUser
from .serializers import StorehouseSerializer, StorehouseRentalSerializer
from django.shortcuts import get_object_or_404
from datetime import datetime
from django.utils import timezone
from django.db.models import Q



class AddStorehouseView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Retrieve the authenticated user from the request
        user = request.user
        
        # Ensure the user is authenticated
        if not user.is_authenticated:
            return Response({'error': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Get the user instance from DbUser based on email
        user_instance = get_object_or_404(DbUser, email=user.email)
        
        try:
            data = request.data.copy()  
            data['owner'] = user_instance.user_id  
            serializer = StorehouseSerializer(data=data)
            
        
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Storehouse added successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
            
            # Return validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class StorehousesByRegionView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Get the authenticated user
        user = request.user
        user_instance = get_object_or_404(DbUser, email=user.email)
        user_region_id = user_instance.region_id

        # Filter storehouses by the user's region
        storehouses = Storehouses.objects.filter(owner__region_id=user_region_id)
        storehouses_data = []

        for storehouse in storehouses:
            # Calculate the available size by checking active rentals
            active_rentals = StorehousesRental.objects.filter(
                storehouse=storehouse,
                status='accepted',  # Assuming 'accepted' indicates active rentals
                end_date__gte=timezone.now().date()  # Only include rentals that haven't ended
            )

            # Calculate the total rented size
            total_rented_size = sum(rental.rental_size for rental in active_rentals)
            available_size = storehouse.total_size - total_rented_size  # Available size in the storehouse

            # Get the full image URL and format it correctly
            image_url = storehouse.owner.image.url if storehouse.owner.image else None
            if image_url and "laangol/" in image_url:
                image_url = image_url.replace("laangol/", "")
                image_url = f"http://127.0.0.1:8000/{image_url}"

            # Compile storehouse data
            storehouse_data = {
                "storehouse_name": storehouse.name,
                "storehouse_id": storehouse.storehouse_id,
                "temperature_range": storehouse.temperature_range,
                "location": storehouse.location,
                "rent_per_sq": storehouse.rent_per_sq,
                "total_size": storehouse.total_size,
                "available_size": available_size,  # Adding the available size information
                "owner_name": storehouse.owner.name,
                "owner_contact": storehouse.owner.number,
                "image_url": image_url,
            }

            storehouses_data.append(storehouse_data)

        return Response(storehouses_data, status=200)





class StorehouseRentalView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        renter = request.user
        if not renter.is_authenticated:
            return Response({'error': 'Authentication credentials were not provided.'}, status=401)

        renter_instance = get_object_or_404(DbUser, email=renter.email)

        storehouse_id = request.data.get('storehouse_id')
        if not storehouse_id:
            return Response({'error': 'Storehouse ID must be provided.'}, status=400)

        storehouse_instance = get_object_or_404(Storehouses, storehouse_id=storehouse_id)

        # Validate start_date and end_date
        start_date = request.data.get('start_date')
        end_date = request.data.get('end_date')
        if not start_date or not end_date:
            return Response({'error': 'Start date and end date must be provided.'}, status=400)

        # Convert start and end dates
        try:
            start_dt = datetime.strptime(start_date, '%Y-%m-%d')
            end_dt = datetime.strptime(end_date, '%Y-%m-%d')
        except ValueError:
            return Response({'error': 'Invalid date format. Use YYYY-MM-DD.'}, status=400)

        # Ensure end_date is after start_date
        if end_dt <= start_dt:
            return Response({'error': 'End date must be after start date.'}, status=400)

        # Get the rental size
        rental_size = request.data.get('rental_size')
        if not rental_size:
            return Response({'error': 'Rental size must be provided.'}, status=400)

        # Check if requested rental size exceeds the available size of the storehouse
        total_storehouse_size = storehouse_instance.total_size
        rentals = StorehousesRental.objects.filter(
            storehouse=storehouse_instance,
            status='accepted',
            end_date__gte=start_dt,  # Rentals that overlap the requested period
            start_date__lte=end_dt,
            active=True
        )

        # Calculate the total rented size
        total_rented_size = sum(rental.rental_size for rental in rentals)
        available_size = total_storehouse_size - total_rented_size

        # Check if the requested rental size exceeds the available size
        if float(rental_size) > available_size:
            if available_size > 0:
                return Response({
                    'error': f'Only {available_size} sq units are available during the requested period. Please adjust the rental size.'
                }, status=400)
            else:
                return Response({
                    'error': 'The storehouse is fully occupied during the requested period.'
                }, status=400)

        # Check if there are fully overlapping rentals during the requested period
        overlapping_rentals = StorehousesRental.objects.filter(
            storehouse=storehouse_instance,
            start_date__lt=end_dt,
            end_date__gt=start_dt,
            status='accepted',
            active=True
        )

        if overlapping_rentals.exists() and available_size == 0:
            return Response({'error': 'Storehouse is fully rented during the requested period.'}, status=400)

        duration_in_days = (end_dt - start_dt).days
        rent_price = float(storehouse_instance.rent_per_sq) * float(rental_size) * duration_in_days

        request_data = request.data.copy()
        request_data['renter'] = renter_instance.user_id
        request_data['storehouse'] = storehouse_instance.storehouse_id
        request_data['rent_price'] = rent_price

        # Validate and serialize the data
        serializer = StorehouseRentalSerializer(data=request_data)
        if serializer.is_valid():
            
            serializer.save()
            return Response({
                'message': 'Storehouse rented request successful.',
                'data': serializer.data
            }, status=201)

        return Response(serializer.errors, status=400)
    






class PendingStorehouseRequestsView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Get the authenticated user
        user = get_object_or_404(DbUser, email=request.user.email)

        # Current time for comparison
        current_time = timezone.now().date()

        # Filter pending rental requests for storehouses
        pending_requests = StorehousesRental.objects.filter(
            storehouse__owner=user,
            status='pending'
        ).select_related('storehouse', 'renter').exclude(
            Q(start_date__lt=current_time) | Q(end_date__lt=current_time)
        )

        # Prepare the response data
        response_data = []
        for rental_request in pending_requests:
            # Check if the request's start or end date is in the past
            if rental_request.start_date < current_time or rental_request.end_date < current_time:
                # Auto-reject the expired request
                rental_request.status = "Auto-Rejected"
                rental_request.active = 0
                rental_request.save()
                continue

            # Add valid pending requests to response_data (implementation depends on your models)
            response_data.append({
                'rental_id': rental_request.rental_id,
                'amount': rental_request.rent_price,
                'start_date': rental_request.start_date,
                'end_date': rental_request.end_date,
                'requested_size': rental_request.rental_size,
                
            })

        if not response_data:
            return Response(
                {'message': 'No valid pending storehouse rental requests available.'},
                status=200
            )

        return Response({'pending_requests': response_data}, status=200)




class UpdateStorehouseRentalStatusView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Get the authenticated user (storehouse owner)
        user = get_object_or_404(DbUser, email=request.user.email)

        # Get the rental request ID from the request data
        rental_id = request.data.get('rental_id')
        if not rental_id:
            return Response({'error': 'Rental ID is required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch the rental request associated with this storehouse owner and rental ID
        storehouse_rental = get_object_or_404(StorehousesRental, rental_id=rental_id, storehouse__owner=user)

        # Get the new status from the request data
        new_status = request.data.get('status')
        if new_status not in ['Accept', 'Reject']:
            return Response({'error': 'Invalid status. Must be either "Accept" or "Reject".'}, status=status.HTTP_400_BAD_REQUEST)

        # Current time for size calculations
        current_time = timezone.now().date()

        # Calculate the current rented size for the storehouse
        storehouse = storehouse_rental.storehouse
        accepted_rentals = StorehousesRental.objects.filter(
            storehouse=storehouse,
            status='Accept',
            end_date__gte=current_time,  # Rentals still ongoing or in the future
            active=True
        )

        # Calculate the total rented size for the storehouse
        total_rented_size = sum(rental.rental_size for rental in accepted_rentals)
        available_size = storehouse.total_size - total_rented_size

        # If the status is 'Accept', check if there is enough space available
        if new_status == 'Accept':
            requested_size = storehouse_rental.rental_size

            # Check if the requested size exceeds available size
            if float(requested_size) > available_size:
                # Calculate the earliest end date for ongoing rentals
                next_available_rental = accepted_rentals.order_by('end_date').first()
                next_available_date = next_available_rental.end_date if next_available_rental else None

                return Response({
                    'error': 'Insufficient space available in the storehouse.',
                    'available_size': available_size,
                    'next_available_date': next_available_date,  # When space will be available next
                }, status=status.HTTP_400_BAD_REQUEST)

            # If there is enough space, accept the request
            storehouse_rental.status = 'Accept'

        # If the status is 'Reject', simply reject the rental request
        elif new_status == 'Reject':
            storehouse_rental.status = 'Reject'
            storehouse_rental.active = False

        # Save the updated rental request
        storehouse_rental.save()

        # Return a success message
        return Response({
            'message': f'Rental request {new_status.lower()}ed successfully.',
            'rental_id': storehouse_rental.rental_id,
            'status': storehouse_rental.status,
            'available_size': available_size,
            'active': storehouse_rental.active
        }, status=status.HTTP_200_OK)