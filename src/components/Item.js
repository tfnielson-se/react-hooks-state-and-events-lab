import React, {useState} from "react";

function Item({ name, category }) {

	const [inCart, setInCart] = useState("")
	const cartText = inCart ? "Remove From Cart" : "Add to Cart"

	const handleClickAddToCart = () => {
		setInCart( !inCart )
		console.log(inCart)
	}

	return (
		<li className="">
			<span>{name}</span>
			<span className="category">{category}</span>
			<button 
			className="add"
			onClick={handleClickAddToCart}>{cartText}</button>
		</li>
	);
}

export default Item;
