export const mutations = {
    getLocal(state){
        state.locale = localStorage.getItem('locale')
    },
    //设置navName值
    setNavName(state,name){
        state.navName = name;
    },
    //设置登录状态
    setUserName(state,name){
        state.userName=name;
    },
}