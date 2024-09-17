import type React from "react";
import { createContext } from "react";
import { products } from "../assets/assets";

type ShopContextPropsType = {
	children: React.ReactNode;
};

export const ShopContext = createContext({
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	products: [] as any[],
	delivery_fee: 0,
	currency: "",
});

const ShopContextProvider = (props: ShopContextPropsType) => {
	const currency = "$";
	const delivery_fee = 10;

	const value = {
		products,
		delivery_fee,
		currency,
	};

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	);
};

export default ShopContextProvider;
