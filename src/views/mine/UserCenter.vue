<template>
    <div>
        <div>个人中心：</div>
        <img class="userHead" :src="$store.state.user.userHead" alt="">
        <div>当前用户：{{ $store.state.user.username }} <a href="javascript:" @touchstart="handleToLogout">退出登录</a> </div>
        <div v-if=" $store.state.user.isAdmin ">用户身份：管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
        <div>
            <input type="file" name="file" value="上传头像" @change="handleToUpload">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {messageBox} from "../../components/js";
    export default {
        name: "UserCenter",
        methods: {
            handleToLogout() {
                this.$axios.get('/api2/users/logout').then((res) => {
                    let status = res.data.status;
                    if (status === 0) {
                        localStorage.removeItem('username');
                        localStorage.removeItem('isAdmin');
                        this.$store.commit('user/USER_NAME',{ username: '' , isAdmin : false, userHead: ''});
                        this.$router.push('/mine/login');
                    }
                });
            },
            handleToUpload(ev){
                let file = ev.target.files[0];
                let params = new FormData();
                params.append('file',file,file.name);
                let config = {
                    headers:{
                        'Content-Type' : 'multipart/form-data'
                    }
                };
                this.$axios.post('/api2/users/uploadUserHead',params,config).then((res)=>{
                    const status = res.data.status;
                    let This = this;
                    if(status === 0){
                        messageBox({
                            title :'上传头像',
                            content :'头像上传成功',
                            ok: '确定',
                            handleOk(){
                                This.$store.commit('user/USER_NAME',{
                                    username: This.$store.state.user.username ,
                                    isAdmin: This.$store.state.user.isAdmin,
                                    userHead: res.data.data.userHead + '?' + Math.random()
                                });
                            }
                        });
                    }else{
                        messageBox({
                            title :'上传头像',
                            content :'头像上传失败',
                            ok: '确定'
                        });
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
                            vm.$store.commit('user/USER_NAME',{
                                username: res.data.data.username ,
                                isAdmin: res.data.data.isAdmin,
                                userHead: res.data.data.userHead
                            });
                        });
                    }else{
                        next('/mine/login');
                    }
                });
        }
    }
</script>

<style scoped>
    .userHead{
        height: 50px;
        width:50px;
        border-radius: 50%;
        overflow: hidden;
    }
</style>