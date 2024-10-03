import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

// Define a type for the laborer data
interface Laborer {
  laborer_name: string;
  region_name: string;
  experience: number;
  specialties: string;
  demand_fees: number;
  status: string;
  labour_id: number;
  current_hire_end_date: string | null;
  image_url: string | null;
}

const Labor_list = () => {
  const [laborers, setLaborers] = useState<Laborer[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    fetch("http://127.0.0.1:8002/laborers/by-region/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setLaborers(data))
      .catch((error) => console.error("Error fetching laborers:", error));
    console.log("data :", laborers);
  }, []);

  return (
    <>
      <div className="labor_list">
        <div className="headlines text-3xl font-semibold text-lime-900">
          <h1>Labor Management</h1>
        </div>
        <div className="mt-11 content flex flex-col items-center justify-between space-y-8">
          <div className="heading text-3xl px-3 py-2 bg-lime-800 rounded-md border border-lime-900 text-lime-900">
            <h1>Hire a Labor</h1>
          </div>

          <div className="labor_list flex flex-col items-center justify-center space-y-7 text-lime-900">
            {laborers.length > 0 ? (
              laborers.map((laborer) => (
                <div key={laborer.labour_id} className="labor flex items-center justify-between">
                  <Link to={`/labor_details/${laborer.labour_id}`}>
                    <div className="labor_info w-4/5 flex items-center space-x-5">
                      {/* Profile Image */}
                      <div className="image_section">
                        <img
                          src={laborer.image_url ? laborer.image_url : "path_to_default_image"} // Use default image if image_url is null
                          alt={laborer.laborer_name}
                          className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
                        />
                      </div>

                      {/* Profile Info */}
                      <div className="info_section flex flex-col space-y-2 text-center md:text-left">
                        <p className="text-xl md:text-2xl">{laborer.laborer_name}</p>

                        {/* Taglines */}
                        <div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
                          <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                            <p>{laborer.experience}+ years Experience</p>
                          </div>
                          <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                            <p>{laborer.region_name}</p>
                          </div>
						  <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                            <p>{laborer.status}</p>
                          </div>
						  
                          <div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
                            <p>+8801712345678</p> {/* Update with real data if available */}
                          </div>
                        </div>

                        <p className="w-full md:w-fit text-sm md:text-base">
                          {laborer.specialties}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="connection flex flex-col items-center justify-between space-y-4">
                    <Button>{laborer.demand_fees} BDT/Hour</Button>
                    <Button>Connect</Button>
                  </div>
                </div>
              ))
            ) : (
              <p>No laborers available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Labor_list;
