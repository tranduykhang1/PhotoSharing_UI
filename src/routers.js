import React from "react"

import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register";
import ConfirmEmail from "./components/Auth/ConfirmEmail";
import ForgotPassword from "./components/Auth/ForgotPassword";
import UpdatePassword from "./components/Auth/UpdatePassword";


import PhotoDetail from "./components/Photo/PhotoDetail";



import Home from "./components/Page/Home";
import User from "./components/Page/User";


const routes = [{
        path: '/',
        exact: true,
        main: () => < Home / >
    }, {
        path: '/login',
        exec: false,
        main: () => < Login / >
    }, {
        path: '/register',
        exec: false,
        main: () => < Register / >
    }, {
        path: '/confirm-email',
        exec: false,
        main: () => < ConfirmEmail / >
    }, {
        path: '/update-password',
        exec: false,
        main: () => < UpdatePassword / >
    },
    {
        path: '/forgot-password',
        exec: false,
        name: 'Quên mật khẩu',
        main: () => < ForgotPassword / >
    },
    {
        path: '/photo',
        exec: false,
        main: () => < PhotoDetail / >
    },
    {
        path: '/user',
        exec: false,
        main: () => < User / >
    },
]


export default routes