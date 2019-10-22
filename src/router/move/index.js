export default {
    path: "/move",
    name: "move",
    component:() => import('@/views/move/Move'),
    // 配置move的二级路由
    children:[
        {
            path: "city",
            component:()=> import('@/components/city/City')
        },
        {
            path: "nowPlaying",
            component:()=> import('@/components/nowPlaying/NowPlaying')
        },
        {
            path: "comingSoon",
            component:()=> import('@/components/comingSoon/ComingSoon')
        },
        {
            path: "search",
            component:()=> import('@/components/search/Search')
        },
        // 二级路由重定向
        {
            path:'/move',
            redirect:'/move/nowPlaying'
        }
    ]
}
