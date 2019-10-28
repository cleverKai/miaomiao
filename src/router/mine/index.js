export  default {
    path:'/mine',
    name:'mine',
    component: ()=> import('@/views/mine/Mine'),
    children : [
        {
            path: 'userCenter',
            name : 'userCenter',
            component : ()=> import('@/views/mine/UserCenter'),
        },
        {
            path: 'login',
            name: 'name',
            component :()=> import('@/components/login/Login')
        },
        {
            path: 'register',
            name: 'register',
            component :()=> import('@/components/register/Register')
        },
        {
            path: 'findPassword',
            name: 'findPassword',
            component : ()=> import('@/components/findPassword/FindPassword')
        },
        {
            path: '/mine',
            redirect : 'userCenter'
        }
    ]
}