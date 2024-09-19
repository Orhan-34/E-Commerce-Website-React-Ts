import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
	const { currency, cartItems, products, updateQuantity } =
		useContext(ShopContext);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [cartData, setCartData] = useState<any[]>([]);

	useEffect(() => {
		const sceneData = [];
		for (const items in cartItems) {
			for (const item in cartItems[items]) {
				if (cartItems[items][item] > 0) {
					sceneData.push({
						_id: items,
						size: item,
						quantity: cartItems[items][item],
					});
				}
			}
		}
		setCartData(sceneData);
	}, [cartItems]);

	return (
		<div className="border-t pt-14">
			<div className="text-2xl mb-3">
				<Title text1={"Your"} text2={"Cart"} />
			</div>
			<div>
				{cartData.map((item, index) => {
					const productData = products.find(
						(product) => product._id === item._id,
					);

					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="py-4 border-y text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
						>
							<div className="flex items-start gap-6">
								<img
									className="w-16 sm:w-20"
									src={productData.image[0]}
									alt=""
								/>
								<div>
									<p className="font-medium text-sm sm:text-lg">
										{productData.name}
									</p>
									<div className="flex items-center mt-3">
										<p className="text-sm sm:text-lg ">
											{currency}
											{productData.price}
										</p>
										<p className="border px-2 sm:px-3 sm:py-1  bg-slate-100 ml-4 flex items-center rounded-lg">
											{item.size}
										</p>
									</div>
								</div>
							</div>
							<input
								type="number"
								onChange={(e) =>
									e.target.value === "" || e.target.value === "0"
										? null
										: updateQuantity(
												item._id,
												item.size,
												Number(e.target.value),
											)
								}
								defaultValue={item.quantity}
								className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
							/>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<img
								onClick={() => updateQuantity(item._id, item.size, 0)}
								src={assets.bin_icon}
								alt="delete-icon"
								className="w-4 mr-4 sm:w-5 cursor-pointer"
							/>
						</div>
					);
				})}
			</div>
			<div className="flex justify-end my-20">
				<div className="w-full sm:w-[450px]">
					<CartTotal />
				</div>
			</div>
		</div>
	);
};

export default Cart;
