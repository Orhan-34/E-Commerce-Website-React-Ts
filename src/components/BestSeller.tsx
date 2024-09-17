import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export const BestSeller = () => {
	const { products } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = useState<typeof products>([]);

	useEffect(() => {
		const bestProducts = products.filter(
			(product) => product.bestseller === true,
		);
		setBestSeller(bestProducts.slice(0, 5));
	}, [products]);
	return (
		<div className="my-10">
			<div className="text-center text-3xl py-8">
				<Title text1={"LATEST"} text2={"COLLECTIONS"} />
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the.
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
				{bestSeller.map((item, index) => (
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
	);
};
