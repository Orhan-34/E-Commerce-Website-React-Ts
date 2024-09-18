import type React from "react";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
	const { search, setSearch, showSearch, setShowSearch } =
		useContext(ShopContext);
	const [visibleSearch, setVisibleSearch] = useState(false);

	const location = useLocation();

	useEffect(() => {
		if (location.pathname.includes("collection")) {
			setVisibleSearch(true);
		} else {
			setVisibleSearch(false);
		}
	});
	return showSearch && visibleSearch ? (
		<div className="text-center border-y bg-gray-50">
			<div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearch(e.target.value)
					}
					className="flex-1 outline-none bg-inherit text-lg"
				/>
				<img src={assets.search_icon} alt="search" className="w-4 " />
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<img
				onClick={() => setShowSearch(false)}
				src={assets.cross_icon}
				alt="close-icon"
				className="w-3 inline cursor-pointer"
			/>
		</div>
	) : null;
};

export default SearchBar;
