import axios from "axios";

const token = localStorage.getItem("token");
export const getAllPhoto = () => {
    return dispatch => {
        axios
            .get("http://localhost:9999/all-photos")
            .then(res => {
                if (res.status === 200) {
                    return dispatch(getAllPhotoAction(res.data));
                }
            });
    };
};
export const getPhotoById = id => {
    return dispatch => {
        axios.get(`http://localhost:9999/photo/?id=${id}`).then(res => {
            return dispatch(getPhotoByIdAction(res.data));
        })
    }
}
export const getPhotoByFollowing = () => {
    return dispatch => {
        axios.get(`http://localhost:9999/get-photo-by-following`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            return dispatch(getPhotoByFlAction(res.data));
        })
    }
}
export const uploadPhoto = data => {
    return dispatch => {
        let fd = new FormData();
        fd.append('photo', data.photo, data.photo.name)
        fd.append('title', data.title)
        fd.append('desc', data.desc)
        fd.append('album', data.album)

        axios.post('http://localhost:9999/upload-photo', fd, { headers: { authorization: `JWT ${token}` } }).then(result => {
            dispatch(uploadPhotoAction(result.data))
        })
    }
}
export const searchPhoto = q => {
    return dispatch => {
        axios.get(`http://localhost:9999/search?q=${q}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(result => {
            dispatch(searchPhotoAction(result.data))
        })
    }
}

export const getPhotoByAlbum = id => {
    return dispatch => {
        axios.get(`http://localhost:9999/get-photo-by-album?id=${id}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(result => {
            dispatch(photoByAlbum(result.data))
        }).catch(err => {
            dispatch(photoByAlbum(err))
        })
    }
}

export const savePhoto = (album, data) => {
    return dispatch => {
        axios.post(`http://localhost:9999/save-photo`, {
            url: data.url,
            old_id: data._id,
            user: data.user,
            album: album,
            desc: data.desc,
            title: data.title
        }, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(result => {
            dispatch(savePhotoAction(result.data))
        }).catch(err => {
            dispatch(savePhotoAction(err))
        })
    }
}


export const reactionPhoto = (photoId, userId) => {
    return dispatch => {
        axios.post('http://localhost:9999/react', {
                user_id: userId,
                photo_id: photoId
            }, { headers: { authorization: `JWT ${token}` } })
            .then(result => {
                dispatch(reactionAction(result.data))
            }).catch(err => dispatch(reactionAction(err)))
    }
}
export const getSearchList = () => {
    return dispatch => {
        axios.get('http://localhost:9999/list-search', { headers: { authorization: `JWT ${token}` } })
            .then(result => {
                dispatch(listSearchAction(result.data))
            }).catch(err => dispatch(listSearchAction(err)))
    }
}

export const removePhoto = photoId => {
    return dispatch => {
        axios.delete(`http://localhost:9999/remove-photo?id=${photoId}`, { headers: { authorization: `JWT ${token}` } })
            .then(result => {
                dispatch(removePhotoAction(result.data))
            }).catch(err => dispatch(removePhotoAction(err)))
    }
}



//
const getAllPhotoAction = data => {
    return {
        type: "GET_ALL_PHOTOS",
        payload: data
    };
};
const getPhotoByIdAction = data => {
    return {
        type: "GET_PHOTO_ID",
        payload: data
    }
}
const getPhotoByFlAction = data => {
    return {
        type: "GET_PHOTO_FOLLOWING",
        payload: data
    };
};
const uploadPhotoAction = data => {
    return {
        type: "UPLOAD_PHOTO",
        payload: data
    };
};
const searchPhotoAction = data => {
    return {
        type: "SEARCH_PHOTO",
        payload: data
    };
};

const photoByAlbum = data => {
    return {
        type: 'PHOTO_BY_ALBUM',
        payload: data
    }
}
const savePhotoAction = data => {
    return {
        type: 'SAVE_PHOTO',
        payload: data
    }
}
const reactionAction = data => {
    return {
        type: 'REACTION_PHOTO',
        payload: data
    }
}
const listSearchAction = data => {
    return {
        type: 'LIST_SEARCH',
        payload: data
    }
}

const removePhotoAction = data => {
    return {
        type: 'REMOVE_ACTION',
        payload: data
    }
}