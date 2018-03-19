import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//我的账户
import myaccount_setting from '@/components/myaccount/myaccount_setting'
import setting_user_info from '@/components/myaccount/setting_user_info'
import setting_user_account from '@/components/myaccount/setting_user_account'
import setting_user_password from '@/components/myaccount/setting_user_password'
//用户
import user_login from '@/components/user/user_login'
import user_register from '@/components/user/user_register'
import user_reset_password from '@/components/user/user_reset_password'

//home页面
import home_index from '@/components/home/home_index'

// 矿池统计
import pool_system_stts from '@/components/pool/pool_system_stts'
// 矿池详细资料（卡片）
import card from '@/components/pool/card'

// 网站仪表板dashboard
import dashboard from '@/components/dashboard/dashboard'

import comNav from '@/components/comNav'

const vueRouter = new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/index'},
    // redirect:'pool/systemStts',
    //Home
    {path:'/index',components:{index:home_index}},//给路由命名，首页使用指定的index视图渲染
    //仪表板
    {path:'/dashboard/dashboard',component:dashboard },
    //矿池
    {path:'/pool/system_stts',component:pool_system_stts },
    //我的账户
    {path:'/myaccout/setting',component: myaccount_setting,
        children:[
          {path:'user_info',component:setting_user_info},
          {path:'user_account',component:setting_user_account},
          {path:'user_password',component:setting_user_password},
        ] 
  
    },
    // 用户登陆、注册、找回密码
    { path: '/user/login', component: user_login },
    { path: '/user/register',component: user_register },
    { path: '/user/reset',component: user_reset_password },
  ]
});

vueRouter.beforeEach((to, from, next) => {
  if (to.name === 'accountSet') {
    
  }else if(to.path==='/index'){
  	
  }
  
  next();
})

export default vueRouter;
