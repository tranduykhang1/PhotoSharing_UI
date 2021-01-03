import axios from "axios"


const token = localStorage.getItem('token')


export const createAlbum = data => {
    return dispatch => {
        axios.post('http://localhost:9999/create-album', { album_name: data.name }, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(createAlbumAction(res))
            }
        }).catch(err => {
            dispatch(createAlbumAction(false))
        })
    }
}
export const getAlbum = () => {
    return dispatch => {
        axios.get('http://localhost:9999/get-album', {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(getAlbumAction(res))
            }
        }).catch(err => {
            dispatch(getAlbumAction(false))
        })
    }
}

export const getAlbumByUser = id => {
    return dispatch => {
        axios.get(`http://localhost:9999/album-by-user?id=${id}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(getAlbumUserAction(res.data))
            }
        }).catch(err => {
            dispatch(getAlbumUserAction(false))
        })
    }
}
export const getAlbumById = id => {
    return dispatch => {
        axios.get(`http://localhost:9999/get-album-id/?id=${id}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(getAlbumIdAction(res.data))
            }
        }).catch(err => {
            dispatch(getAlbumIdAction(false))
        })
    }
}
export const deleteAlbum = id => {
    return dispatch => {
        axios.delete(`http://localhost:9999/delete-album/?id=${id}`, {
            headers: {
                authorization: `JWT ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(deleteAlbumAction(res.data))
            }
        }).catch(err => {
            dispatch(deleteAlbumAction(false))
        })
    }
}
export const renameAlbum = (id, newName) => {
    return dispatch => {
        axios.put('http://localhost:9999/edit-album', {
                id: id,
                new_name: newName
            }, {
                headers: {
                    authorization: `JWT ${token}`
                }
            }).then(result => dispatch(renameAction(result.data)))
            .catch(err => dispatch(renameAction(false)))
    }
}




//
const getAlbumAction = data => {
    return {
        type: "GET_ALBUM",
        payload: data
    }
}
const getAlbumUserAction = data => {
    return {
        type: "GET_ALBUM_USER",
        payload: data
    }
}
const getAlbumIdAction = data => {
    return {
        type: "GET_ALBUM_ID",
        payload: data
    }
}
const createAlbumAction = data => {
    return {
        type: "CREATE_ALBUM",
        payload: data
    }
}
const deleteAlbumAction = data => {
    return {
        type: 'DELETE_ALBUM',
        payload: data
    }
}
const renameAction = data => {
    return {
        type: 'RENAME_ACTION',
        payload: data
    }
}