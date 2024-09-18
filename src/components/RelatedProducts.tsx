import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

interface Product {
	_id: string;
	image: string;
	name: string;
	price: number;
}

interface RelatedProductsProps {
	category: string;
	subCategory: string;
}

const RelatedProducts = ({ category, subCategory }: RelatedProductsProps) => {
	const { products } = useContext(ShopContext);
	const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

	useEffect(() => {
		if (products.length > 0) {
			let productsCopy = products.slice();
			productsCopy = productsCopy.filter(
				(product) =>
					product.category === category && product.subCategory === subCategory,
			);

			setRelatedProducts(productsCopy.slice(0, 5));
		}
	}, [products, category, subCategory]);

	return (
		<div className="my-10">
			<div className="text-center py-8 text-3xl">
				<Title text1={"RELATED"} text2={"PRODUCTS"} />
			</div>
			{/* Rendering Products */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
				{relatedProducts.map((item, index) => (
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

export default RelatedProducts;
