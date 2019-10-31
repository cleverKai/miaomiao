const  state = {
    username: window.localStorage.getItem('username') || '',
    isAdmin : window.localStorage.getItem('isAdmin')|| false,
    userHead: ''
};

const actions ={

};
const mutations ={
    USER_NAME( state , payload){
        state.username = payload.username;
        state.isAdmin = payload.isAdmin;
        state.userHead = payload.userHead;
    }

};

export default {
    namespaced : true,
    state,
    actions,
    mutations,
}
