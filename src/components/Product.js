import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import axios from 'axios';
import Input from "../customField/Input.js";
import { SubmitPayment, postProduct } from "../action/product.js";

import { useDispatch, useSelector } from "react-redux";

import "../style/componentStyle/product.css";
import { useHistory } from "react-router-dom";

const style = {
	position: "relative",
	left: "50%",
	transform: "translateX(-50%)"
};
const Product = props => {
	const history = useHistory();
	const dispatch = useDispatch();


	const submitProduct = product => {
		axios
			.post("https://5f3a751b2300b100169a8c00.mockapi.io/customer", {
				fullname: product.full_name,
				phone: product.phone_number,
				email: product.email,
				address: product.address
			})
			.then(res => {
				if (res.status === 201) {
					history.push('/customer')
					dispatch(postProduct(res.statusText));
				}
			});
	};

	const initialValue = {
		full_name: "",
		phone_number: "",
		email: "",
		address: ""
	};
	return (
		<Formik
			initialValues={initialValue}
			onSubmit={value => submitProduct(value)}
		>
			{formikProps => {
				const { values, errors, touched } = formikProps;
				return (
					<div
						className="container-fluid"
						style={{ marginTop: "100px", height: "85vh" }}
					>
						<h5 className="text-center">Thong Tin Don Hang</h5>
						<Form className="mt-5 p-0">
							<FastField
								name="full_name"
								component={Input}
								label="Ho va Ten:"
								placeholder="Your full name"
							/>
							<FastField
								name="phone_number"
								component={Input}
								label="So dien thoai:"
								placeholder="Your phone number"
							/>
							<FastField
								name="email"
								type="email"
								component={Input}
								label="Email: "
								placeholder="Your email"
							/>
							<FastField
								name="address"
								component={Input}
								label="Dia chi: "
								placeholder="Your address"
							/>
							<button className="btn btn-success col-sm-4" style={style}>
								Submit
							</button>
						</Form>
						<button onClick={() => history.push("/customer")}>
							Click me
						</button>
					</div>
				);
			}}
		</Formik>
	);
};

export default Product;
