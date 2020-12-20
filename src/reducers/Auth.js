const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, data: action.payload }
        case "REGISTER":
            return {...state, data: action.payload }
        case "FORGOT_PASSWORD":
            return {...state, data: action.payload }
        case "UPDATE_PASSWORD":
            return {...state, data: action.payload }
        case "GOOGLE-LOGIN":
            return {...state, data: action.payload }
        default:
            return state
    }
};