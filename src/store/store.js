import Vue from 'vue';
import Vuex from 'vuex';
import {mutations} from '@/store/mutations'
import {getters} from '@/store/getters'
Vue.use(Vuex);

const state = {
    mobilePhone:"",
    breadcrumb:"",
    locale:"",
    amentBtn:"",

    // 子导航的name
    navName:'',
    // 已登录的用户名
    userName:'',
} 
export default new Vuex.Store({
    state,
    mutations,
    getters
});

