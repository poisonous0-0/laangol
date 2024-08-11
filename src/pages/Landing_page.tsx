import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";

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
import Logo from "../assets/laangol.png";

const Landing_page = () => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<div className="landing_page py-10 bg-lime-50 bg-my-img">
				<header>
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
				</header>

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
				<div className="review_content">
					<div className="my-32">
						<div className="heading_part">
							<h1 className="flex items-center justify-center text-xl font-bold text-lime-700">
								Trusted by your fellow!
							</h1>
						</div>
						<div className="user_review_content"></div>
					</div>
				</div>
				<div className="faq_content">
					<div className="my-36">
						<div className="heading">
							<h1 className="flex items-center justify-center text-xl font-bold text-lime-700">
								Frequently Asked Questions
							</h1>
						</div>
						<div className="mt-20 content_section flex flex-col gap-y-5 items-center justify-center text-lime-700 text-2xl font-medium">
							<Dropdown title="What is Laangol">
								<p className="text-base font-normal">
									Laangol is platform for different kind of users such for the
									farmers, for the consumer and last but not the least the
									consumer. Laangol helps one to receive crop recommendations
									based on regional environmental conditions, hire labor to work
									on their land for increased productivity etc.
								</p>
							</Dropdown>
							<Dropdown title="How Laangol can benefit me? ">
								<p className="text-base font-normal">
									Laangol is platform for different kind of users such for the
									farmers, for the consumer and last but not the least the
									consumer. Laangol helps one to receive crop recommendations
									based on regional environmental conditions, hire labor to work
									on their land for increased productivity etc.
								</p>
							</Dropdown>
							<Dropdown title="Is Laangol free for all time? ">
								<p className="text-base font-normal">
									Laangol is platform for different kind of users such for the
									farmers, for the consumer and last but not the least the
									consumer. Laangol helps one to receive crop recommendations
									based on regional environmental conditions, hire labor to work
									on their land for increased productivity etc.
								</p>
							</Dropdown>
							<Dropdown title="Does Laangol have any hidden charges? ">
								<p className="text-base font-normal">
									Laangol is platform for different kind of users such for the
									farmers, for the consumer and last but not the least the
									consumer. Laangol helps one to receive crop recommendations
									based on regional environmental conditions, hire labor to work
									on their land for increased productivity etc.
								</p>
							</Dropdown>
						</div>
					</div>
				</div>
				<div className="contact_content">
					<div className="content mx-28 pb-32 bg-slate-50 rounded-2xl">
						<div className="contact_heading pt-12 pl-12">
							<h1 className="text-6xl text-lime-500 font-bold">Not sure? </h1>
							<h2 className="text-2xl text-lime-700 font-bold">
								How about you give us your number and we will contact you{" "}
							</h2>
						</div>
						<div className="contact_form mt-10 ml-12 p-2 max-w-fit bg-white rounded-2xl">
							<form action="" className="">
								<input
									type="text"
									placeholder="Enter your number"
									className="py-5 pl-8 w-80"
								/>
								<Button className="bg-lime-500 py-5 px-9 scale-100 rounded-2xl text-base font-semibold text-lime-700">
									Contact us
								</Button>
							</form>
						</div>
					</div>
				</div>
				<footer>
					<div className="footer_content mt-36 bg-white">
						<div className="pl-28 pt-11 flex items-center justify-start gap-x-80">
							<div className="logo_part">
								<img src={Logo} alt="" className="w-72" />
							</div>
							<div className="content_part flex justify-center gap-x-32">
								<div className="links_part flex flex-col gap-y-6">
									<div className="headings">
										<h1 className="headings text-sm font-normal leading-4 text-lime-200">
											LINKS
										</h1>
									</div>
									<div className="links flex flex-col gap-y-2 text-base font-medium text-lime-700">
										<a href="">Features</a>
										<a href="">Blog</a>
										<a href="">FAQ</a>
										<a href="">About us</a>
									</div>
								</div>
								<div className="external_part flex flex-col gap-y-6">
									<div className="headings text-sm font-normal leading-4  text-lime-200">
										<h1>EXTERNAL</h1>
									</div>
									<div className="external flex flex-col gap-y-2 text-base font-medium text-lime-700">
										<a href="">Terms and Services</a>
										<a href="">Legal poilicy</a>
									</div>
								</div>
							</div>
						</div>
						<div className="copyright mt-14 pl-28 pb-40 text-base text-lime-600">
							<p>Copyright © 2024 Team SAD gpt. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Landing_page;
