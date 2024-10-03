import Button from "../../components/Button/Button";
import store from "../../assets/warehouse.png";
import { Link } from "react-router-dom";

interface Storehouse {
  storehouse_name: string;
  storehouse_id: number;
  temperature_range: string;
  location: string;
  rent_per_sq: number;
  total_size: number;
  available_size: number;
  owner_name: string;
  owner_contact: string;
  image_url: string | null;
  descriptions: string|null;

}

const Store_list = () => {
  const [storehouses, setStorehouses] = useState<Storehouse[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStorehouses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8003/storehouse/by-region/", {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch storehouses");
        }

        const data: Storehouse[] = await response.json();
        setStorehouses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStorehouses();
  }, [token]);

  return (
    <>
      <div className="store_list">
        <div className="headlines text-3xl font-semibold text-lime-900">
          <h1>Storehouse Management</h1>
        </div>
        <div className="mt-11 content flex flex-col items-center justify-between space-y-8">
          <div className="heading text-3xl px-3 py-2 bg-lime-800 rounded-md border border-lime-900 text-lime-900">
            <h1>Hire a Storehouse</h1>
          </div>
          <div className="store_list flex flex-col items-center justify-center space-y-7 text-lime-900">
            {storehouses.map((storehouse) => (
              <div key={storehouse.storehouse_id} className="storeHouse flex items-center justify-between">
                <Link to="storehouse_details">
                  <div className="store_info w-4/5 flex items-center space-x-5">
                    {/* Profile Image */}
                    <div className="image_section">
                      <img
                        src={store}
                        alt="Storehouse"
                        className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
                      />
                    </div>

                    {/* Profile Info */}
                    <div className="info_section flex flex-col space-y-2 text-center md:text-left">
                      <p className="text-xl md:text-2xl">{storehouse.storehouse_name}</p>

                      {/* Taglines */}
                      <div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
                        <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                          <p>{storehouse.total_size} Sqft</p>
                        </div>
						<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                          <p>Available size {storehouse.available_size} Sqft</p>
                        </div>
                        <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                          <p>{storehouse.location}</p>
                        </div>
                        <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                          <p>{storehouse.owner_contact}</p>
                        </div>
                      </div>

                      <p className="w-full md:w-fit text-sm md:text-base">
					  {storehouse.descriptions}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="connection flex flex-col items-center justify-between space-y-4">
                  <Button className="">{storehouse.rent_per_sq} BDT/Day</Button>
                  <Button className="">Connect</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store_list;
