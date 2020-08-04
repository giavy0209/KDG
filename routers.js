import React from 'react';
import Home from './components/Home'
import Reg from './components/Reg'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
const ROUTERS = [
    {
        name: 'Home',
        reqLogin: false,
        title: null,
        render : Home
    },
    {
        name: 'Login',
        reqLogin: false,
        title: 'Đăng nhập',
        render : Login
    },
    {
        name: 'ForgotPassword',
        reqLogin: false,
        title: 'Quên mật khẩu',
        render : ForgotPassword
    },
    {
        name: 'Reg',
        reqLogin: false,
        title: 'Đăng ký',
        render : Reg
    },
]

export default ROUTERS
