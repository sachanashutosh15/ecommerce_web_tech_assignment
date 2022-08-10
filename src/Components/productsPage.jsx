import React from "react";
import ProductCard from "./productCard";

export default function Products (props) {
	const products = props.info.map(item => <ProductCard info={item} />)
	return (
    <>
			<div className="products">
				{products}
			</div>
    </>
	);
}