import React from 'react';
import Start from './components/Start'
import Reg from './components/Reg'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
const ROUTERS = [
    {
        name: 'Start',
        reqLogin: false,
        title: null,
        render : Start
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
