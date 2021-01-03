import axios from "axios";

export const login = value => {

    return dispatch => {
        axios
            .post("http://localhost:9999/login", {
                email: value.email,
                password: value.password
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch(loginAction(res))
                }
            });
    };
};

export const googleLogin = value => {
    return dispatch => {
        axios
            .post("http://localhost:9999/login/google", {
                tokenId: value
            })
            .then(res => {
                dispatch(googleLoginAction(res))
            });
    };
};



export const register = value => {
    return dispatch => {
        axios
            .post("http://localhost:9999/register", {
                first_name: value.first_name,
                last_name: value.last_name,
                email: value.email,
                password: value.password,
                confirm_password: value.password_confirm
            })
            .then(res => {
                dispatch(registerAction(res))
            });
    };
};
export const forgotPassword = value => {
    return dispatch => {
        axios
            .post("http://localhost:9999/forgot-password", {
                email: value.email
            })
            .then(res => {
                dispatch(forgotAction(res))
            });
    };
};

export const updatePassword = value => {
    return dispatch => {
        axios
            .put("http://localhost:9999/update-password", {
                new_password: value.new_password
            })
            .then(res => {
                dispatch(updatePasswordAction(res))
            });
    };
};






export const loginAction = data => {
    return {
        type: "LOGIN",
        payload: data,
    };
};
export const googleLoginAction = data => {
    return {
        type: "GOOGLE-LOGIN",
        payload: data,
    };
};
export const registerAction = data => {
    return {
        type: "REGISTER",
        payload: data,
    };
};
export const forgotAction = data => {
    return {
        type: "FORGOT_PASSWORD",
        payload: data,
    };
};
export const updatePasswordAction = data => {
    return {
        type: "UPDATE_PASSWORD",
        payload: data,
    };
};