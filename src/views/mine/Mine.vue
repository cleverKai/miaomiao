<template>
    <div id="main">
        <Header title="我的喵喵"></Header>
        <div id="content">
            <router-view></router-view>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from '@/components/header/Header'
    import TabBar from '@/components/tabbar/TabBar'
    import Login from '@/components/login/Login'
    export default {
        name: "Mine",
        components:{
            Header,
            TabBar,
            Login
        }
    }
</script>

<style scoped>

</style>