import Start from './components/Start'
import Reg from './components/Reg'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Notify from './components/Notify'
import News from './components/News'
import SetCoins from './components/SetCoins'

import Wallet from './components/Wallet'
import Stake from './components/Stake'
import Swap from './components/Swap'
import Account from './components/Account'

import tabWallet from './assets/images/tab-wallet.png'
import tabStake from './assets/images/tab-stake.png'
import tabSwap from './assets/images/tab-swap.png'
import tabAccount from './assets/images/tab-account.png'
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
];

const TABS = [
    {
        name: 'Wallet',
        title: 'Ví',
        render : Wallet,
        logo: tabWallet,
        reqLogin: true,
    },
    {
        name: 'Staking',
        title: 'Staking',
        render : Stake,
        logo: tabStake,
        reqLogin: true,
    },
    {
        name: 'Swap',
        title: 'Swap',
        render : Swap,
        logo: tabSwap,
        reqLogin: true,
    },
    {
        name: 'Me',
        title: 'Me',
        render : Account,
        logo: tabAccount,
        reqLogin: true,
    },
]



export {
    ROUTERS,TABS
}
