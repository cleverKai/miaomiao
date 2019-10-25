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
        {
            path: "detail/1/:movieId",
            components :{
                default : ()=> import('@/components/nowPlaying/NowPlaying'),
                detail : ()=> import('@/views/move/MovieDetail')
            },
            //路由匹配传参
            props:{
                detail : true
            }
        },
        {
            path: "detail/2/:movieId",
            components :{
                default : ()=> import('@/components/comingSoon/ComingSoon'),
                detail : ()=> import('@/views/move/MovieDetail')
            },
            //路由匹配传参
            props:{
                detail : true
            }
        },
        // 二级路由重定向
        {
            path:'/move',
            redirect:'/move/nowPlaying'
        }
    ]
}
