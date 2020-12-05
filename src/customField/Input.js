import React from "react";

const Input = props => {
	const { field, form, type, label, placeholder, disabled } = props;
	const { name, value, onChange, onBlur } = field;

	return (
			<div className="form-group col-sm-4 mx-auto">
				{label && <label>{label}</label>}
				<input
					{...field}
					placeholder={placeholder}
					type={type}
					className="form-control"
				/>
		</div>
	);
};

export default Input;
