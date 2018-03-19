// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
// 公共样式
import '../static/css/commonality.css'
// vuex
import store from '@/store/store'
// 字体样式
import 'font-awesome/css/font-awesome.css'
// element样式
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// apollo 
import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// axios
import axios from 'axios'
// axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// i18n国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


Vue.config.productionTip = false
// 接口

/* eslint-disable no-new */

const i18n = new VueI18n({
  locale: "",
  messages: {
    'ch': require('./language/ch'),
    'tw': require('./language/tw'),
    'en': require('./language/en')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>',
  beforeCreate() {
    this.$store.commit('getLocal');
    let language = navigator.browserLanguage ?
      navigator.browserLanguage :
      navigator.language;
    if (localStorage.getItem("locale") == null) {
      if (language.indexOf("en") > -1) {
        this.$i18n.locale = "en";
        localStorage.setItem("locale", "en");
      } else if (language.indexOf("zh-CN") > -1) {
        this.$i18n.locale = "ch";
        localStorage.setItem("locale", "ch");
      } else if (language.indexOf("zh-TW") > -1) {
        this.$i18n.locale = "tw";
        localStorage.setItem("locale", "tw");
      }
    } else {
      this.$i18n.locale = localStorage.getItem('locale')
    }
  },
  mounted() {

  }


})
