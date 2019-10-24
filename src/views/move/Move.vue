<template>
       <div id="main">
        <Header title="喵喵电影"></Header>
<!--        菜单-->
        <div id="content">
            <!--        菜单-->
        <div class="movie_menu">
            <router-link tag="div" to="/move/city" class="city_name">
                <span>{{ $store.state.city.nm }}</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
                <router-link tag="div" to="/move/nowPlaying" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/move/comingSoon" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/move/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
            <!--        菜单-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <TabBar></TabBar>
<!--           <MessageBox></MessageBox>-->
       </div>
</template>

<script>
    import Header from '@/components/header/Header'
    import TabBar from '@/components/tabbar/TabBar'
    import {messageBox} from '@/components/js/index'
    // import MessageBox from '@/components/js/messageBox/MessageBox'
    export default {
        name: "Move",
        components:{
            Header,
            TabBar,
        },
        mounted() {
            setTimeout(()=>{
            //请求城市定位数据接口
                this.$axios.get('/api/getLocation').then((res)=>{
                    console.log(res);
                let msg = res.data.msg;
                if(msg === "ok"){
                    let cityNm = res.data.data.nm;
                    let cityId = res.data.data.id;
                    if(this.$store.state.city.id == cityId ){
                        return ;
                    }else {
                        messageBox({
                            title: '是否定位到当前城市',
                            content: cityNm,
                            cancel: '取消',
                            ok: '切换定位',
                            handleOk() {
                                window.localStorage.setItem('nowNm', cityNm);
                                window.localStorage.setItem('nowId', cityId);
                                window.location.reload();
                            }
                        });
                    }
                }
            })
            },3000)
        }
    }
</script>

<style scoped lang="css">
    #content .movie_menu{
        width: 100%; height: 45px;
        border-bottom:1px solid #e6e6e6;
        display: flex;
        justify-content:space-between;
        align-items:center;
        background:white;
        z-index:10;
    }
    .movie_menu .city_name{
        margin-left: 20px;
        height:100%;
        line-height: 45px;
    }
    .movie_menu .city_name.active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .city_name.router-link-active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .hot_swtich{
        display: flex; height:100%;
        line-height: 45px;
    }
    .movie_menu .hot_item{
        font-size: 15px;
        color:#666; width:80px;
        text-align:center;
        margin:0 12px;
        font-weight:700;
    }
    .movie_menu .hot_item.active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .hot_item.router-link-active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .search_entry{
        margin-right:20px;
        height:100%;
        line-height: 45px;
    }
    .movie_menu .search_entry.active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .search_entry.router-link-active{
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
    }
    .movie_menu .search_entry i{
        font-size:24px;
        color:red;
    }
</style>