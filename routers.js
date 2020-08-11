import Start from './components/Start'
import Reg from './components/Reg'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

import Wallet from './components/Wallet'
    import Notify from './components/Wallet/Notify'
    import News from './components/Wallet/News'
    import SetCoins from './components/Wallet/SetCoins'

import Stake from './components/Stake'

import Swap from './components/Swap'

import Account from './components/Account'
    import Profile from './components/Account/Profile'
    import Currency from './components/Account/Currency'
    import Language from './components/Account/Language'
    import Display from './components/Account/Display'
    import Secure from './components/Account/Secure'
        import ChangePass from './components/Account/Secure/ChangePass'
        import Pin from './components/Account/Secure/Pin'


import tabWallet from './assets/images/tab-wallet.png'
import tabWalletActive from './assets/images/tab-wallet-active.png'
import tabStake from './assets/images/tab-stake.png'
import tabSwap from './assets/images/tab-swap.png'
import tabAccount from './assets/images/tab-account.png'
import tabAccountActive from './assets/images/tab-account-active.png'
const ROUTERS = [
    {
        name: 'Start',
        reqLogin: false,
        title: null,
        render : Start,
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
    {
        name: 'Notify',
        reqLogin: true,
        title: 'Thông báo',
        render : Notify
    },
    {
        name: 'News',
        reqLogin: true,
        title: 'Thông báo',
        render : News
    },
    {
        name: 'SetCoins',
        reqLogin: true,
        title: 'Add Coins',
        render : SetCoins
    },
    {
        name: 'Profile',
        reqLogin: true,
        title: '',
        render : Profile
    },
    {
        name: 'Currency',
        reqLogin: true,
        title: '',
        render : Currency
    },
    {
        name: 'Language',
        reqLogin: true,
        title: '',
        render : Language
    },
    {
        name: 'Display',
        reqLogin: true,
        title: '',
        render : Display
    },
    {
        name: 'Secure',
        reqLogin: true,
        title: '',
        render : Secure
    },
    {
        name: 'ChangePass',
        reqLogin: true,
        title: '',
        render : ChangePass
    },
    {
        name: 'Pin',
        reqLogin: true,
        title: '',
        render : Pin
    },
];

const TABS = [
    {
        name: 'Wallet',
        title: 'Ví',
        render : Wallet,
        logo: tabWallet,
        logoActive: tabWalletActive,
        reqLogin: true,
    },
    {
        name: 'Staking',
        title: 'Staking',
        render : Stake,
        logo: tabStake,
        logoActive: tabStake,
        reqLogin: true,
    },
    {
        name: 'Swap',
        title: 'Swap',
        render : Swap,
        logo: tabSwap,
        logoActive: tabSwap,
        reqLogin: true,
    },
    {
        name: 'Me',
        title: 'Me',
        render : Account,
        logo: tabAccount,
        logoActive: tabAccountActive,
        reqLogin: true,
    },
]



export {
    ROUTERS,TABS
}
