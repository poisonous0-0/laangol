import { useEffect, useState } from "react";
import Marketplace_top from "../../components/Marketplace_top/Marketplace_top";
import ProductCard from "../../components/Dynamic_card/Product_card";
import fertilizers from "../../assets/fertilizers.png"; // Optional fallback image
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

type Product = {
    id: number;
    image: string;
    name: string;
    seller: string; // Updated to match the API response
    price: number;
};

const Marketplace_2 = () => {
    const { category } = useParams(); // Get the category from URL parameters
    const [products, setProducts] = useState<Product[]>([]); // State to hold the fetched products
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState<string | null>(null); // State to manage errors (string or null)

    // Fetch products based on the category
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const token = localStorage.getItem("token"); // Get token from local storage

            try {
                const response = await axios.get(
                    `http://127.0.0.1:8001/api/recent-products/`,
                    {
                        params: { category: category }, // Category passed as a query parameter
                        headers: {
                            Authorization: `Token ${token}`, // Authorization header
                            "Content-Type": "application/json", // Content-Type header
                        },
                    }
                );
                setProducts(response.data); // Store fetched products in state
            } catch (err) {
                setError("Error fetching products"); // Set error state if request fails
            } finally {
                setLoading(false); // Turn off loading once request completes
            }
        };

        fetchProducts(); // Call the API when the component mounts or category changes
    }, [category]); // Run the effect when the category changes

    return (
        <>
            <Marketplace_top />
            <div className="marketplace_items flex flex-col items-center justify-center">
                <div className="items_banner mt-5 w-max p-2 bg-lime-100 text-2xl text-lime-200 rounded-md">
                    <h1>{category}</h1> {/* Dynamically display the category */}
                </div>

                <div className="mt-8 items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-between">
                    {loading ? (
                        <p>Loading products...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : products.length === 0 ? (
                        <p>No products found for {category}</p>
                    ) : (
                        products.map((product) => (
                            <Link to={`/product_details/${product.id}`} key={product.id}>
                                <ProductCard
                                    imageSrc={product.image ? product.image : fertilizers}
                                    productName={product.name}
                                    sellerName={product.seller} // Corrected to use 'seller'
                                    price={product.price}
                                />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Marketplace_2;
