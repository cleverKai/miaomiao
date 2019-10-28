<template>
    <div>
        <div>个人中心：</div>
        <div>当前用户：{{ $store.state.user.username }} <a href="javascript:;" @touchstart="handleToLogout">退出登录</a> </div>
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
                        this.$store.commit('user/USER_NAME',{ username: ''});
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
                            vm.$store.commit('user/USER_NAME',{ username: res.data.data.username});
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