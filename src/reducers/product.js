const initialState = {  }

export default (state = initialState, action) => {
	switch (action.type) {
		case "PAYMENT":
			return {...state, information: action.payload} 
		default:
			return state 
	}
};
