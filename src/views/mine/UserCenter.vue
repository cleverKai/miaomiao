<template>
    <div>
        <div>个人中心：</div>
        <div>当前用户：{{ $store.state.user.username }} <a href="javascript:;" @touchstart="handleToLogout">退出登录</a> </div>
        <div v-if=" $store.state.user.isAdmin ">用户身份：管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "UserCenter",
        methods: {
            handleToLogout() {
                this.$axios.get('/api2/users/logout').then((res) => {
                    let status = res.data.status;
                    if (status === 0) {
                        localStorage.removeItem('username');
                        localStorage.removeItem('isAdmin');
                        this.$store.commit('user/USER_NAME',{ username: '' , isAdmin : false});
                        this.$router.push('/mine/login');
                    }
                });
            }
        },
          beforeRouteEnter(to, from, next){
                axios.get('/api2/users/getUser').then((res)=>{
                    let status = res.data.status;
                    if(status === 0){
                        next( vm => {
                            localStorage.setItem('username',res.data.data.username);
                            localStorage.setItem('isAdmin',res.data.data.isAdmin);
                            vm.$store.commit('user/USER_NAME',{ username: res.data.data.username , isAdmin: res.data.data.isAdmin});
                        });
                    }else{
                        next('/mine/login');
                    }
                });
        }
    }
</script>

<style scoped>

</style>