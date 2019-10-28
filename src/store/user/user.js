const  state = {
    username: '',
};

const actions ={

};
const mutations ={
    USER_NAME( state , payload){
        state.username = payload.username;
    }

};

export default {
    namespaced : true,
    state,
    actions,
    mutations,
}
