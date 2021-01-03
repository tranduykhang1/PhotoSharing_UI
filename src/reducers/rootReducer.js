import { combineReducers } from "redux";
import auth from "./Auth.js";
import user from "./User.js";
import photo from "./Photo.js";
import comment from "./Comment.js"
import album from "./Album.js"



const reducers = combineReducers({
    auth,
    user,
    photo,
    comment,
    album
});
export default reducers;