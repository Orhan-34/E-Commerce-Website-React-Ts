import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
	const { products, currency } = useContext(ShopContext);
	return (
		<div className="border-t pt-16">
			<div className="text-2xl">
				<Title text1={"my"} text2={"orders"} />
			</div>
			<div className="">
				{products.slice(1, 4).map((product, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="py-4 border-y text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img src={product.image[0]} alt="" className="w-16 sm:w-20"/>
                <div>
                  <p className="sm:text-base font-medium">{product.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                      <p className="text-lg">{currency}{product.price}</p>
                      <p>Quantity: 1</p>
                      <p>Size: M</p>
                  </div>
                  <p className="mt-2">Date: <span className="text-gray-400">19 Sept 2024</span> </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500" />
                  <p>Ready to ship</p>
                </div>
                <button type="submit" className="bg-orange-400 hover:bg-orange-600 hover:rotate-360 duration-1000 text-white p-2 rounded-lg">Track Order</button>
              </div>
          </div> 
				))}
			</div>
		</div>
	);
};

export default Orders;
