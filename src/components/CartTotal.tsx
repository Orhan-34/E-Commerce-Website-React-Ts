import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { NavLink, useLocation } from "react-router-dom";

const CartTotal = () => {
	const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
	const [cartAmount, setCartAmount] = useState<number>(0);
	const location = useLocation();
	const pathName = location.pathname.includes('cart');

	useEffect(() => {
		getCartAmount().then((amount) => setCartAmount(amount));
	}, [getCartAmount]);

	return (
		<div className="w-full">
			<div className="text-2xl">
				<Title text1="Cart" text2="Totals" />
			</div>
			<div className="flex flex-col gap-4 mt-2 text-sm">
				<div className="flex justify-between">
					<p>Subtotal</p>
					<p>
						{currency}
						{cartAmount}.00
					</p>
				</div>
				<hr />
				<div className="flex justify-between">
					<p>Shipping Fee</p>
					<p>
						{currency}
						{cartAmount === 0 ? "0" : delivery_fee}.00
					</p>
				</div>
				<hr />
				<div className="flex justify-between">
					<p>
						<b>Total</b>
					</p>
					<p>
						{currency}
						{cartAmount === 0 ? "0" : cartAmount + delivery_fee}.00
					</p>
				</div>
				<div className="w-full flex justify-end ">
					<NavLink to="/place-order">
						<button
							className={`bg-black text-white  px-4 py-2  my-3 sm:px-8 sm:py-3 sm:my-8 rounded-lg hover:bg-gray-500 ${pathName ? "block" : "hidden"}`}
							type="submit"
						>
							PROCEED TO CHECKOUT
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
