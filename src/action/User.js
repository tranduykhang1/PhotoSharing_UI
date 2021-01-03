import axios from "axios"

const token = localStorage.getItem('token')

export const getCurrentUser = () => {
    return dispatch => {
        axios
            .get("http://localhost:9999/profile", {
                headers: {
                    authorization: `JWT ${token}`
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch(currentUser(res.data))
                }
            }).catch(err => {
                return dispatch(currentUser(false))
            })
    };
};
export const getListFollow = () => {
    return dispatch => {
        axios.get('http://localhost:9999/list-follow', {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            dispatch(listFollow(res.data))
        }).catch(err => dispatch(listFollow(false)))
    }
}

export const getUserById = id => {
    return dispatch => {
        axios.get(`http://localhost:9999/user/?id=${id}`, ).then(res => {
            dispatch(getUserId(res.data))
        }).catch(err => dispatch(getUserId(false)))
    }
}
export const updateProfile = data => {
    let fd = new FormData();
    fd.append('gender', Number(data.gender))
    fd.append('last_name', data.last_name)
    fd.append('first_name', data.first_name)
    fd.append('user_name', data.user_name)
    fd.append('bio', data.bio)
    fd.append('location', data.location)
    if (data.imgChange === 'upload') {
        fd.append('photo', data.image, data.image.name)
    }
    if (data.imgChange === 'update') {
        fd.append('photo', data.image)
    }
    console.log(data)
    return dispatch => {
        axios.put('http://localhost:9999/update-profile', fd, {
            headers: { authorization: `JWT ${token}` }
        }).then(result => {
            dispatch(updateProfileAction(result.data))
        }).catch(err => dispatch(updateProfileAction(err)))
    }
}

//
export const followUser = userId => {
    return dispatch => {
        axios.post('http://localhost:9999/follow', {
                follow_user: userId
            }, {
                headers: {
                    authorization: `JWT ${token}`
                }
            }).then(result => dispatch(followUserAction(result.data + Math.floor((Math.random() * 10) + 1))))
            .catch(err => dispatch(followUserAction(false)))
    }
}
export const unFollowUser = userId => {
    return dispatch => {
        axios.delete(`http://localhost:9999/remove-follow?follow_id=${userId}`, {
                headers: {
                    authorization: `JWT ${token}`
                }
            }).then(result => dispatch(unFollowUserAction(result.data + Math.floor((Math.random() * 10) + 1))))
            .catch(err => dispatch(unFollowUserAction(false)))
    }
}

export const getListFollows = () => {
    return dispatch => {
        axios.get(`http://localhost:9999/list-follow`, {
                headers: {
                    authorization: `JWT ${token}`
                }
            }).then(result => dispatch(listFollowsAction(result.data)))
            .catch(err => dispatch(listFollowsAction(false)))
    }
}





//


const currentUser = data => {
    return {
        type: "GET_CURRENT_USER",
        payload: data
    }
}
const listFollow = data => {
    return {
        type: "GET_FOLLOW_LIST",
        payload: data
    }
}
const getUserId = data => {
    return {
        type: "GET_USER_ID",
        payload: data
    }
}
const updateProfileAction = data => {
    return {
        type: "UPDATE_PROFILE",
        payload: data
    }
}

const followUserAction = data => {
    return {
        type: 'FOLLOW_USER',
        payload: data
    }
}
const unFollowUserAction = data => {
    return {
        type: 'UNFOLLOW_USER',
        payload: data
    }
}
const listFollowsAction = data => {
    return {
        type: 'LIST_FOLLOWS',
        payload: data
    }
}