import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { NavLink } from "react-router-dom";

const PlaceOrder = () => {
	const [method, setMethod] = useState<string>("cash");

	return (
		<div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
			{/*LEFT SIDE*/}
			<div className="flex flex-col gap-4 w-full sm:w-[480px]">
				<div className="text-xl sm:text-2xl my-3">
					<Title text1={"Delivery"} text2={"Information"} />
				</div>
				<div className="flex gap-3">
					<input
						placeholder="First name"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
					<input
						placeholder="Last name"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
				</div>
				<input
					placeholder="Email address"
					type="text"
					className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
				/>
				<input
					placeholder="Street"
					type="text"
					className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
				/>
				<div className="flex gap-3">
					<input
						placeholder="City"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
					<input
						placeholder="State"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
				</div>
				<div className="flex gap-3">
					<input
						placeholder="Zipcode"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
					<input
						placeholder="Country"
						type="text"
						className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
					/>
				</div>
				<input
					placeholder="Phone"
					type="text"
					className="border border-gray-300 rounded-lg px-3.5 py-1.5 w-full"
				/>
			</div>
			{/*RIGHT SIDE*/}
			<div className="mt-8">
				<div className="mt-8 min-w-80">
					<CartTotal />
				</div>
				<div className="mt-12">
					<Title text1={"Payment"} text2={"Method"} />
					{/*PAYMENT METHOD SELECTION*/}
					<div className="flex gap-3 flex-col lg:flex-row mt-5">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							onClick={() => setMethod("stripe")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" && "bg-green-500"}`}
							/>
							<img src={assets.stripe_logo} alt="" />
						</div>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							onClick={() => setMethod("razorpay")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md∂"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" && "bg-green-500"}`}
							/>
							<img src={assets.razorpay_logo} alt="" />
						</div>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							onClick={() => setMethod("cash")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full  ${method === "cash" && "bg-green-500"}`}
							/>
							<p>CASH ON DELIVERY</p>
						</div>
					</div>
					<div className="w-full justify-end flex">
						<NavLink to="/orders">
							<button
								className="bg-black text-white px-4 py-2 my-3 sm:px-10 sm:py-3 sm:my-8 rounded-lg hover:bg-gray-500"
								type="submit"
							>
								PLACE ORDER
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
