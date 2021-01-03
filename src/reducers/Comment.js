const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {...state, listComments: action.payload }
        case "POST_COMMENT":
            return {...state, commentResponse: Math.floor((Math.random() * 10) + 1) }
        case "REMOVE_COMMENT":
            return {...state, removeResponse: Math.floor((Math.random() * 10) + 1) }
        default:
            return state
    }
};