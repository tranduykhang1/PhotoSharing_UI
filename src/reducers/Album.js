const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALBUM":
            return {...state, data: action.payload }
        case "GET_ALBUM_USER":
            return {...state, albumUser: action.payload }
        case "GET_ALBUM_ID":
            return {...state, albumId: action.payload }
        case "CREATE_ALBUM":
            return {...state, createAlb: action.payload }
        case "DELETE_ALBUM":
            return {...state, deleteRes: action.payload }
        case "RENAME_ACTION":
            return {...state, isUpdate: action.payload }
        default:
            return state
    }
};