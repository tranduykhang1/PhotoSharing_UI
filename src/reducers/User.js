const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CURRENT_USER":
            return {...state, currentUser: action.payload }
        case "GET_FOLLOW_LIST":
            return {...state, following: action.payload }
        case "GET_USER_ID":
            return {...state, user: action.payload }
        case "UPDATE_PROFILE":
            return {...state, updateRes: action.payload }
        case "FOLLOW_USER":
            return {...state, followRes: action.payload }
        case "UNFOLLOW_USER":
            return {...state, unFollowRes: action.payload }
        case "LIST_FOLLOWS":
            return {...state, listFollows: action.payload }
        default:
            return state
    }
};