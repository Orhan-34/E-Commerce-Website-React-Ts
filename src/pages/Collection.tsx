import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
	const { products } = useContext(ShopContext);
	const [visibleFilter, setVisibleFilter] = useState(false);
	const [collectionProducts, setCollectionProducts] = useState<typeof products>(
		[],
	);
  const [category,setCategory] = useState<typeof products>([]);
  const [subCategory,setSubCategory] = useState<typeof products>([]);
  
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
	if(category.includes((e.target as HTMLInputElement).value)){
	  setCategory(category.filter((item) => item !== (e.target as HTMLInputElement).value));
    }else {
      setCategory((prev) => [...prev, (e.target as HTMLInputElement).value]);
    }
  }
  useEffect(() => {
    setCollectionProducts(products)
  },[products])

	useEffect(() => {
    console.log(category)
	},[category]);

	return (
		<div className="flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t">
			<hr />
			{/* Filter Options */}
			<div className="min-w-60">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className="text-xl uppercase my-2 flex items-center gap-2 cursor-pointer"
					onClick={() => setVisibleFilter(!visibleFilter)}
				>
					Filters
					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<img
						className={`h-3 sm:hidden ${visibleFilter ? "rotate-90" : ""} transition-transform duration-300`}
						src={assets.dropdown_icon}
					/>
				</p>
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${visibleFilter ? "" : "hidden"} sm:block`}
				>
					<p className="mb-3 ml-3 uppercase prata-regular">Categories</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory}/>
							Men
						</p>
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory}/>
							Women
						</p>
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory}/>
							Kids
						</p>
					</div>
				</div>
				<div
					className={`border border-gray-300 pl-5 py-3 my-6 ${visibleFilter ? "" : "hidden"} sm:block`}
				>
					<p className="mb-3 ml-3 uppercase prata-regular">Type</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Topwear"} />
							Topwear
						</p>
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Bottomwear"} />
							Bottomwear
						</p>
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Winterwear"} />
							Winterwear
						</p>
					</div>
				</div>
			</div>
			{/* Right Side */}
			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Title text1={"all"} text2={"collections"} />
					{/* Product Sort */}
					<select className="border-2 border-gray-300 text-sm px-1 rounded-lg">
						<option value="relavent">Sort by: Relavent</option>
						<option value="low-high">Sort by: Low to Hight</option>
						<option value="high-low">Sort by: Hight to Low</option>
					</select>
				</div>
				{/* Products Mapping*/}
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
					{collectionProducts.map((item, index) => (
						<ProductItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							id={item._id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
