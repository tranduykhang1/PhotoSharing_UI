import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Customer({}) {
	const product = useSelector(state => state.product);
	console.log(product);
	return <div>customer</div>;
}

Customer.defaultProps = {};

Customer.propTypes = {};

export default Customer;
