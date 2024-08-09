import Navbar from "../components/Navbar/Navbar";
import BannerImg from "../assets/banner.png";
import Leaf from "../assets/leaf.png";
import arrow from "../assets/right-arrow.png";
import Govt from "../assets/govt.png";
import Wfp from "../assets/wfp.png";
import Usaid from "../assets/usaid.png";
import Brac from "../assets/brac.png";

import Customer from "../assets/customer.jpg";
import Farmer from "../assets/farmer.jpg";
import Investor from "../assets/admin.jpg";
import Card from "../components/Card/Card";

const Landing_page = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="landing_page py-10 bg-lime-50 bg-my-img">
        <div className="banner_content ">
          <div className="none mx-12 flex items-center justify-between py-12">
            <div className="banner_text flex flex-col items-baseline leading-none text-nowrap">
              <h1 className="text-xl font-bold text-lime-500 z-30">
                Make your harvesting
              </h1>
              <h1 className="text-xl font-bold text-lime-700">hassle free</h1>
              <p className="mt-5 font-normal text-lg text-lime-800">
                Struggling with Irrigation, labor force & finance? Laangol got
                you!
              </p>
              <p className="mt-2 font-normal text-lg text-lime-800">
                With an easy to use application, solve your own problem!
              </p>
              <button className="mt-5 p-2 bg-lime-400 rounded-3xl scale-110 flex items-center gap-x-4  ">
                <p>Get an advisor for free </p>
                <img src={arrow} alt="" className=" w-4 h-4" />
              </button>
            </div>
            <div className="banner_images flex items-end relative justify-end">
              <img src={Leaf} alt="" className="" />
              <img src={BannerImg} alt="" className="relative right-7 z-10" />
            </div>
          </div>
        </div>
        <div className="branding_content mt-10  bg-lime-50">
          <div className="none flex flex-col gap-y-12 items-center justify-center">
            <div className="branding_heading mt-9">
              <h1 className="text-5xl font-bold text-lime-500">
                Making your success with our collaborators
              </h1>
            </div>
            <div className="branding_images my-12 flex gap-x-36 items-center">
              <img src={Govt} alt="" className="h-28" />
              <img src={Wfp} alt="" className="h-28" />
              <img src={Usaid} alt="" className="h-20" />
              <img src={Brac} alt="" className="h-20" />
            </div>
          </div>
        </div>
        <div className="accessability_content">
          <div className="none my-10">
            <div className="headings flex flex-col gap-y-5 items-center justify-center leading-none">
              <div className="main_heading flex flex-col items-center">
                <h1 className="text-xl font-bold text-lime-500">
                  Accessibility
                </h1>
                <h2 className="text-7xl font-bold text-lime-700">
                  for everyone
                </h2>
              </div>
              <div className="sub_heading flex flex-col items-center text-lg text-lime-700 leading-8">
                <p>
                  Struggling with Irrigation, labor force & finance? Laangol got
                  you!
                </p>
                <p>With an easy to use application, solve your own problem! </p>
              </div>
            </div>
            <div className="card_section my-20 flex items-center gap-x-10 justify-center">
              <Card imageSrc={Customer} title="Consumer" />
              <Card imageSrc={Farmer} title="Farmer" />
              <Card imageSrc={Investor} title="Investor" />
            </div>
          </div>
        </div>
        .
      </div>
    </>
  );
};

export default Landing_page;
