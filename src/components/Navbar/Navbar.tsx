import { Link } from "react-router-dom";
import Laangol from "../../assets/laangol.png";
import Button from "../Button/Button";

const Navbar = () => {
	const items = ["Features", "Dashboard", "Blog", "FAQ", "About us"];
	return (
		<div>
			<nav className="p-7 flex items-center justify-between bg-lime-50">
				<div className="logo-panel">
					<a href="/">
						<img src={Laangol} alt="Laangol Logo" className="w-60" />
					</a>
				</div>
				<div className="max-w-full">
					<ul className="flex flex-row items-center gap-16">
						{items.map((item, index) => (
							<li
								key={index}
								className="scale-110 font-medium transition ease-in-out delay-50 hover:text-lime-700 duration-300"
							>
								<a href="">{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="mr-28">
					<Link to="/login">
						<Button className=" hover:bg-lime-700 hover:text-white">
							Sign in
						</Button>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
