const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PHOTOS":
            return {...state, listPhotos: action.payload }
        case "GET_PHOTO_ID":
            return {...state, data: action.payload }
        case "GET_PHOTO_FOLLOWING":
            return {...state, photoFl: action.payload }
        case "UPLOAD_PHOTO":
            return {...state, uploadPhoto: action.payload }
        case "SEARCH_PHOTO":
            return {...state, searchPhoto: action.payload }
        case "PHOTO_BY_ALBUM":
            return {...state, albumPhotos: action.payload }
        case "SAVE_PHOTO":
            return {...state, saveRes: action.payload }
        case "REACTION_PHOTO":
            return {...state, reactionRes: action.payload }
        case "LIST_SEARCH":
            return {...state, listSearch: action.payload }
        case "REMOVE_ACTION":
            return {...state, isRemove: action.payload }
        default:
            return state
    }
};