import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

type ProductItemProps = {
	id: string;
	name: string;
	image: string;
	price: number;
};

const ProductItem = ({ id, name, image, price }: ProductItemProps) => {
    const {currency} = useContext(ShopContext);

	return (
		<Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img className="hover:scale-110 transition duration-500 ease-in-out" src={image[0]} alt={name} />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-semibold">{currency}{price}</p>
        </Link>
	);
};

export default ProductItem;
