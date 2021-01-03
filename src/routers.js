import React from "react"

import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register";
import ConfirmEmail from "./components/Auth/ConfirmEmail";
import ForgotPassword from "./components/Auth/ForgotPassword";
import UpdatePassword from "./components/Auth/UpdatePassword";


import PhotoDetail from "./components/Photo/PhotoDetail";


import Home from "./components/Page/Home";
import User from "./components/Page/User";
import Album from "./components/Page/Album"

import UpdateProfile from "./components/Page/UpdateProfile";


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
        path: '/photo/:id',
        exec: false,
        main: () => < PhotoDetail / >
    },
    {
        path: '/user/:id',
        exec: false,
        main: () => < User / >
    },
    {
        path: '/album/:id',
        exec: false,
        main: () => < Album / >
    },
    {
        path: '/profile/update',
        exec: false,
        main: () => < UpdateProfile / >
    },
    {
        path: '/following',
        exact: true,
        main: () => < Home / >
    },
]


export default routes