import axios from "axios";
import history from "../_helers/history.js";

export const SubmitPayment = product => {
	return dispatch => {
		axios
			.post("https://5f3a751b2300b100169a8c00.mockapi.io/customer", {
				fullname: product.full_name,
				phone: product.phone_number,
				email: product.email,
				address: product.address
			})
			.then(res => {
				if (res.status === 201) {
					dispatch(postProduct(res.data));
				}
			});
	};
};

export const postProduct = product => {
	return {
		type: "PAYMENT",
		payload: product
	};
};
