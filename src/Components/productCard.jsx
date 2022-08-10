import React from "react";

export default function ProductCard(props) {
	const [isDetailVisible, setIsDetailVisible] = React.useState(false);
	function showDetail(e) {
		setIsDetailVisible(true);
	}	
	function hideDetail (e) {
		setIsDetailVisible(false);
	}
	return (
		<>
			<div className="product-Card" onMouseOver={showDetail} onMouseLeave={hideDetail}>
				<img className="product-image" id={props} src={props.info.image} />
				{isDetailVisible ? <p className="description"> {props.info.description} </p> : ""}
			</div>
		</>
	);
}