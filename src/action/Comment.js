import axios from "axios";

const token = localStorage.getItem('token')

export const getCommentById = id => {
    return dispatch => {
        axios
            .get(`http://localhost:9999/comment/?id=${id}`)
            .then(res => {
                if (res.status === 200) {
                    return dispatch(getCommentAction(res.data));
                }
            });
    };
};
export const postComment = data => {
    return dispatch => {
        axios.post(`http://localhost:9999/comment`, {
            user_id: data.user_id,
            photo_id: data.photo_id,
            content: data.content
        }, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            return dispatch(commentAction(res.data));
        })
    }
}
export const removeComment = (photoId, commentId) => {
    return dispatch => {
        axios.delete(`http://localhost:9999/comment/?comment_id=${commentId}&photo_id=${photoId}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(result => {
            dispatch(removeCommentAction(result.data))
        }).catch(err => dispatch(removeCommentAction(err)))
    }
}



const getCommentAction = data => {
    return {
        type: "GET_COMMENTS",
        payload: data
    };
};
const commentAction = data => {
    return {
        type: "POST_COMMENT",
        payload: data
    };
}
const removeCommentAction = data => {
    return {
        type: "REMOVE_COMMENT",
        payload: data
    };
}