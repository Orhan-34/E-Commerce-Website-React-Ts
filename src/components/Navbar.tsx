import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
	const [visibility, setVisibility] = useState(false);
	const { setShowSearch, showSearch, getCartTotal } = useContext(ShopContext);
	return (
		<div className="flex items-center justify-between font-medium py-5">
			<NavLink to="/">
				<img src={assets.logo} alt="logo" className="w-36" />
			</NavLink>
			<ul className="hidden sm:flex gap-5 text-gray-700 text-sm">
				<NavLink to="/" className="flex flex-col items-center gap-1 uppercase">
					<p>Home</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink
					to="/collection"
					className="flex flex-col items-center gap-1 uppercase"
				>
					<p>Collection</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden active:flex" />
				</NavLink>
				<NavLink
					to="/about"
					className="flex flex-col items-center gap-1 uppercase"
				>
					<p>About</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden active:flex" />
				</NavLink>
				<NavLink
					to="/contact"
					className="flex flex-col items-center gap-1 uppercase"
				>
					<p>Contact</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden active:flex" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-6">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src={assets.search_icon}
					alt="search-icon"
					className={`w-5 ${showSearch ? "cursor-pointer" : ""}`}
					onClick={() => setShowSearch(!showSearch)}
				/>
				<div className="group relative">
					<Link to="/login">
						<img
							src={assets.profile_icon}
							alt="profile-icon"
							className="w-5 cursor-pointer"
						/>
					</Link>
					<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
							<p className="hover:text-black">My Profile</p>
							<p className="hover:text-black">
								<NavLink to="/cart">Cart</NavLink>
							</p>
							<p className="hover:text-black">Logout</p>
						</div>
					</div>
				</div>
				<NavLink to="/cart" className="relative">
					<img
						src={assets.cart_icon}
						alt="cart-icon"
						className="w-5 min-w-5 cursor-pointer"
					/>
					<p className="w-4 text-center leading-4 bg-black text-white aspect-square rounded-full absolute text-[8px] right-[-5px] bottom-[-5px]">
						{getCartTotal()}
					</p>
				</NavLink>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					src={assets.menu_icon}
					alt="menu"
					className="w-5 cursor-pointer sm:hidden"
					onClick={() => setVisibility(true)}
				/>
			</div>
			{/* MENU SCREEN FOR SMALL DEVICES */}
			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visibility ? "w-full" : "w-0"}`}
			>
				<div className="flex flex-col text-gray-600">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className="flex items-center gap-5 p-3 "
						onClick={() => setVisibility(false)}
					>
						<img
							src={assets.dropdown_icon}
							alt="dropdown"
							className="h-4 rotate-180"
						/>
						<p className="cursor-pointer hover:bg-gray-300 rounded p-2">Back</p>
					</div>
					<NavLink
						to="/"
						className="py-2 pl-6 border hover:bg-slate-300"
						onClick={() => setVisibility(false)}
					>
						HOME
					</NavLink>{" "}
					<NavLink
						to="/collection"
						className="py-2 pl-6 border hover:bg-slate-300"
						onClick={() => setVisibility(false)}
					>
						COLLECTION
					</NavLink>{" "}
					<NavLink
						to="/about"
						className="py-2 pl-6 border hover:bg-slate-300"
						onClick={() => setVisibility(false)}
					>
						ABOUT
					</NavLink>{" "}
					<NavLink
						to="/contact"
						className="py-2 pl-6 border hover:bg-slate-300"
						onClick={() => setVisibility(false)}
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
