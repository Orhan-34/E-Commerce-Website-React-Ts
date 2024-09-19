import type React from "react";
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

type ShopContextPropsType = {
	children: React.ReactNode;
};

interface ShopContextType {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	products: any[];

	delivery_fee: number;

	currency: string;

	search: string;

	setSearch: (search: string) => void;

	showSearch: boolean;

	setShowSearch: (showSearch: boolean) => void;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	cartItems: { [key: string]: any };

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	setCartItems: (cartItems: { [key: string]: any }) => void;

	addToCart: (productId: string, size: string) => void;

	getCartTotal: () => number;

	updateQuantity: (itemId: string, size: string, quantity: number) => void;

	getCartAmount: () => Promise<number>;	
}

export const ShopContext = createContext<ShopContextType>({
	products: [],

	delivery_fee: 0,

	currency: "",

	search: "",

	setSearch: () => {},

	showSearch: false,

	setShowSearch: () => {},

	cartItems: {},

	setCartItems: () => {},

	addToCart: () => {},

	getCartTotal: () => 0,

	updateQuantity: () => {},

	getCartAmount: async() => 0,
});

const ShopContextProvider = (props: ShopContextPropsType) => {
	const currency = "$";
	const delivery_fee = 10;
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [cartItems, setCartItems] = useState<{ [key: string]: any }>({});

	const addToCart = async (itemId: string, size: string) => {
		toast.dismiss();
		// biome-ignore lint/style/useConst: <explanation>
		let cartData = structuredClone(cartItems);
		if (!size) {
			toast.error("Please select a size");
		} else {
			if (cartData[itemId]) {
				if (cartData[itemId][size]) {
					cartData[itemId][size] += 1;
				} else {
					cartData[itemId][size] = 1;
				}
			} else {
				cartData[itemId] = {};
				cartData[itemId][size] = 1;
			}
			setCartItems(cartData);
			toast.success("Item added to cart");
		}
	};

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const getCartTotal = () => {
		let total = 0;
		for (const item in cartItems) {
			for (const size in cartItems[item]) {
				try {
					if (cartItems[item][size] > 0) {
						total += cartItems[item][size];
					}
				} catch (e) {
					console.log(e);
				}
			}
		}
		return total;
	};

	const updateQuantity = async (itemId: string, size: string, quantity: number) => {
		const cartData = structuredClone(cartItems);
		cartData[itemId][size] = quantity;
		setCartItems(cartData);
	};


	const getCartAmount = async() => {
		let totalAmount = 0;
		for (const items in cartItems) {
			const itemInfo = products.find((item) => item._id === items);
			for(const item in cartItems[items]){
				try{
					if(cartItems[items][item] > 0){
						if (itemInfo) {
							totalAmount += itemInfo.price * cartItems[items][item];
						}
					}
				}
				catch(e){
					console.log(e);
				}
			}			
		}
		return totalAmount;
	}

	const value = {
		products,
		delivery_fee,
		currency,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		setCartItems,
		addToCart,
		getCartTotal,
		updateQuantity,
		getCartAmount
	};

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	);
};

export default ShopContextProvider;
