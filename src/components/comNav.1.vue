<template>
<div class="con-nav">
    <div class="main-nav">
        <div class="logo">logo</div>
        <!--主导航条-->
        <ul class="ul-lev1">
            <!--主页新闻-->
            <li class="li-lev1" @click="clickHandle($event)" @mouseover="mouseoverHandle($event)" @mouseout="mouseoutHandle($event)">
            <!--一级菜单标题-->
            <router-link :to="routeObj['1-1']">
            <div class="nav-title" index="1" @click="clickHandle($event)">{{$t("message.nav_title[0]")}}</div>
            </router-link>
            </router-link>
            <!--二级菜单标题-->
            <div class="menu-son">
                <ul class="ul-lev2 clear-float">
                    <router-link :to="routeObj['1-1']">
                        <li class="li-lev2" index="1-1" >
                        <i class="fa fa-home fa-fw"></i> 
                        {{$t("message.nav_homepage[0]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['1-2']">
                        <li class="li-lev2" index="1-2">
                        <i class="fa fa-lightbulb-o fa-fw"></i>
                        {{$t("message.nav_homepage[1]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['1-3']">
                        <li class="li-lev2" index="1-3">
                        <i class="fa fa-address-book fa-fw"></i> 
                        {{$t("message.nav_homepage[2]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['1-4']">
                        <li class="li-lev2" index="1-4">
                        <i class="fa fa-medium fa-fw"></i> 
                        {{$t("message.nav_homepage[3]")}}
                        </li>
                    </router-link>
                </ul>
            </div>
            </li>
            <!--矿池统计-->
            <li class="li-lev1" @click="clickHandle($event)" @mouseover="mouseoverHandle($event)" @mouseout="mouseoutHandle($event)">
            <!--一级菜单标题-->
            <router-link :to="routeObj['2-1']">
            <div class="nav-title" index="2" @click="clickHandle($event)">{{$t("message.nav_title[1]")}}</div>
            </router-link>
            <!--二级菜单标题-->
            <div class="menu-son">
                <ul class="ul-lev2 clear-float">
                    <router-link :to="routeObj['2-1']">
                        <li class="li-lev2" index="2-1">
                        <i class="fa fa-bar-chart fa-fw"></i> 
                        {{$t("message.min_sta[0]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['2-2']">
                        <li class="li-lev2" index="2-2">
                        <i class="fa fa-lightbulb-o fa-fw"></i>
                        {{$t("message.min_sta[1]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['2-3']">
                        <li class="li-lev2" index="2-3">
                        <i class="fa fa-history fa-fw"></i> 
                        {{$t("message.min_sta[2]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['2-4']">
                        <li class="li-lev2" index="2-4">
                        <i class="fa fa-trophy fa-fw"></i> 
                        {{$t("message.min_sta[3]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['2-5']">
                        <li class="li-lev2" index="2-5">
                        <i class="fa fa-bar-chart fa-fw"></i> 
                        {{$t("message.min_sta[4]")}}
                        </li>
                    </router-link>
                </ul>
            </div>
            </li>
            <!--帮助中心-->
            <li class="li-lev1" @click="clickHandle($event)" @mouseover="mouseoverHandle($event)" @mouseout="mouseoutHandle($event)">
            <!--一级菜单标题-->
            <router-link :to="routeObj['3-1']">
            <div class="nav-title" index="3" @click="clickHandle($event)">{{$t("message.nav_title[2]")}}</div>
            </router-link>
            <!--二级菜单标题-->
            <div class="menu-son">
                <ul class="ul-lev2 clear-float">
                    <router-link :to="routeObj['3-1']">
                        <li class="li-lev2" index="3-1">
                            <i class="fa fa-life-ring fa-fw"></i> 
                            {{$t("message.help_center[0]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['3-2']">
                        <li class="li-lev2" index="3-2">
                            <i class="fa fa-lightbulb-o fa-fw"></i>
                            {{$t("message.help_center[1]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['3-3']">
                        <li class="li-lev2" index="3-3">
                            <i class="fa fa-code fa-fw"></i> 
                            {{$t("message.help_center[2]")}}
                        </li>
                    </router-link>
                </ul>
            </div>
            </li>
            <!--我的账户-->
            <li class="li-lev1" @click="clickHandle($event)" @mouseover="mouseoverHandle($event)" @mouseout="mouseoutHandle($event)">
            <!--一级菜单标题-->
            <router-link :to="routeObj['4-1']">
            <div class="nav-title" index="4" @click="clickHandle($event)">{{$t("message.nav_title[3]")}}</div>
            </router-link>
            <!--二级菜单标题-->
            <div class="menu-son" data-flag="myaccount_list">
                <ul class="ul-lev2 clear-float">
                    <router-link :to="routeObj['4-1']">
                        <li class="li-lev2" index="4-1">
                        <i class="fa fa-th-large fa-fw"></i> 
                        {{$t("message.account[0]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-2']">
                        <li class="li-lev2" index="4-2">
                        <i class="fa fa-cogs fa-fw"></i>
                        {{$t("message.account[1]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-3']">
                        <li class="li-lev2" index="4-3">
                        <i class="fa fa-line-chart fa-fw"></i> 
                        {{$t("message.account[2]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-4']">
                        <li class="li-lev2" index="4-4">
                        <i class="fa fa-btc fa-fw"></i> 
                        {{$t("message.account[3]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-5']">
                        <li class="li-lev2" index="4-5">
                        <i class="fa fa-usd fa-fw"></i> 
                        {{$t("message.account[4]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-6']">
                        <li class="li-lev2" index="4-6">
                        <i class="fa fa-book fa-fw"></i> 
                        {{$t("message.account[5]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-7']">
                        <li class="li-lev2" index="4-7">
                        <i class="fa fa-cog fa-fw"></i> 
                        {{$t("message.account[6]")}}
                        </li>
                    </router-link>
                    <router-link :to="routeObj['4-8']">
                        <li class="li-lev2" index="4-8">
                        <i class="fa fa-cog fa-fw"></i> 
                        {{$t("message.account[7]")}}
                        </li>
                    </router-link>
                </ul>
            </div>
            </li>

        </ul>
        <div class="control">
            <div class="login-status">
                <!--<div v-text="$store.state.isLogin?'已登录':'未登录'"></div>-->
                <div class="user-control" v-if="!$store.state.userName">
                    <router-link to="/user/login">
                        <span>登录</span>
                    </router-link>
                    <span style="width:10px;display:inline-block"></span>
                    <router-link to="/user/register">
                        <span>注册</span>
                    </router-link>
                </div>
                <el-dropdown v-if="$store.state.userName"  @command="userControl">
                    <span class="el-dropdown-link">
                        {{$store.state.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item  command="cancel">注销</el-dropdown-item>
                        <el-dropdown-item  command="exit">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="language">
                <!--<div class="flag"></div>-->
                <el-dropdown style="float:right;margin-right:18px;line-height:60px" @command="handleCommand">
                    <span>
                        <strong>{{$t('message.language')}}</strong>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" id="langSlect">
                        <el-dropdown-item command="en">EN</el-dropdown-item>
                        <el-dropdown-item command="ch">CN</el-dropdown-item>
                        <el-dropdown-item command="tw">HK</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </div>
    </div>
    <!--tab导航条-->
    <div class="tab-nav" v-if="!isUserPath"  style="margin-top:4px;">
        <el-tabs type="card" v-model="activeName"   @tab-click="handleClick">
            <!--动态生成tab导航-->
            <el-tab-pane v-for="(v,i) in $t(tObj[activeTab])" :key="i" :label="v" :name="activeTab+'-'+(i+1)"  style="background:red"></el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script>
// import routeObj from '../router/nav.config.js';
export default {
  data() {
    return {
      locale: "ch",
      judge: true,
      // 当前激活index
      activeIndex:'',
      isLogin:true,
      //存取路由映射信息
      routeObj:{},
      //配置存储$t对象的导航信息
      tObj:{
          '1':'message.nav_homepage',
          '2':'message.min_sta',
          '3':'message.help_center',
          '4':'message.account',
      },
      //tab导航切换至的key
      activeTab:'',
      //tab导航激活name
      activeName:'',
      //路由是否包含/user/
      isUserPath:false,
    //   //已登录用户名
    //   loginName:'',
    };
  },
  watch: {
      locale(val) {
        this.$i18n.locale = val;
      },
      //检测navName数据变动，设置下拉的子导航样式
      '$store.state.navName':function(){
          var currentNavName = this.$store.state.navName;
          //设置样式
          document.querySelectorAll('.li-lev2').forEach(function(v,i){
              var index = v.getAttribute('index'); 
              if(index===currentNavName){
                  v.classList.add('active');
              }else{
                  v.classList.remove('active');
              }
          })
      },
      '$route':'changeRoute',
  },
  mounted() {
      var login = localStorage.getItem("login");
      if (login == "ok") {
        this.judge = false;
      }
  },
  methods: {
      //路由改变处理
    changeRoute(){
        let currentPath = this.$route.path;
        let pathArr = currentPath.split('/');
        if(pathArr.length>3){
            currentPath = '/'+pathArr[1]+'/'+pathArr[2];
        }
        let flag = false;
        //设置导航激活样式
        for(let key in this.routeObj){
            if(this.routeObj[key] === currentPath){
                this.setNavStyle(key);  //设置主导航、下拉子导航、tab子导航样式
                flag = true;
            }
        }
        if(!flag){
            this.setNavStyle('0-0'); //如果是配置以外的，取消主導航樣式
        }
        //判断如果是带/user/路径(登录、注册、找回密码页)，隐藏tab导航条
        if(/^\/user\//.test(currentPath)){
            this.isUserPath = true;
        }else{
            this.isUserPath = false;
        }
    },
    //导航点击事件处理
    clickHandle(event){
        // 点击后隐藏下拉导航列表
        document.querySelectorAll('.menu-son').forEach(v=>{
            v.style.display = 'none';
        }); 
    },
    //设置主导航、下拉子导航、tab子导航样式
    setNavStyle(currentIndex){
        // 切换tab导航条
        this.activeTab = currentIndex.split("-")[0];
        //设主导航
        document.querySelectorAll('.nav-title').forEach((v,i)=>{
            let _index = v.getAttribute('index'); 
            if(_index===currentIndex.split('-')[0]){
                if(_index === '4'){
                    //如果进入的是我的账户，需判断是否登录，否则跳到登录页
                    if(window.sessionStorage.getItem('loginName')){ 
                        v.classList.add('active');
                    }else{
                        this.$router.push({path:'/user/login'});
                        this.$message({
                            message: '請先行登錄！',
                            type: 'warning'
                        });
                    }
                }else{
                    v.classList.add('active');
                }
            }else{
                v.classList.remove('active');
            }
        })
        //设置下拉导航
        document.querySelectorAll('.li-lev2').forEach((v,i)=>{
            let _index = v.getAttribute('index'); 
            if(_index===currentIndex){
                v.classList.add('active');
            }else{
                v.classList.remove('active');
            }
        })
        //设tab子导航
        this.activeName = currentIndex;

    },
    // tab导航条点击
    handleClick(tab, event) {
        // console.log(tab, event);
        console.log(tab.name);
        this.$router.push({name:tab.name})
    },
    // 鼠标移入事件
    mouseoverHandle(event){
        var currentList = event.currentTarget.querySelector('.menu-son');
        //根据登录状态来设置‘我的账户’子导航是否显示
        // if(currentList.getAttribute('data-flag') == 'myaccount_list' && !window.sessionStorage.getItem('loginName')){
        //     return;
        // }else{
        //     currentList.style.display = 'block';
        // }
            currentList.style.display = 'block';
    },
    // 鼠标移出事件
    mouseoutHandle(event){
        event.currentTarget.querySelector('.menu-son').style.display = 'none';
    },
    // 用户注销、退出
    userControl(command){
        if(command==='cancel'){  //注销
            this.$router.push({path:'/user/login'});
            this.$message('你已註銷！');
        }else{ //退出
            this.$router.push({name:'1-1'});
            this.$message('你已退出！');
        }
        window.sessionStorage.setItem('loginName','');
        this.$store.commit('setUserName','');
    },
    // 语言选择
    handleCommand(command) {
        this.$i18n.locale = command;
        localStorage.setItem("locale", command);
        this.$store.commit("getLocal");
        this.$store.state.a = command;
    },
    // 登录、注册、注销
    register(command) {
      if (command == "logOut") {
        localStorage.setItem("login", "no");
        localStorage.removeItem("request_id");
        this.$router.push({ name: "homePage" });
        this.judge = true;
      }
    },
  },
    mounted(){
        //根据路由，初始化导航样式
        this.changeRoute();
    },
    created(){
        //获取登录状态
        this.$store.commit('setUserName',window.sessionStorage.getItem('loginName'));
        //获取路由映射信息
        let _this = this;
        this.$router.options.routes.forEach(v=>{
            if(v.name){
                _this.routeObj[v.name] = v.path;
            }
        });
        console.log(this.routeObj)
    }
};
</script>

<style lang="less">
@nav-height:60px;
@theme-color:#0c203b;
@active-color:#3296fa;
@active-color:#499ca5;
.con-nav {
    // padding-left:180px;
    .main-nav {
        background-color: @theme-color;
        text-align:left;
        // display:flex;
        div.logo {
            display:inline-block;
            height:@nav-height;
            float:left;
            width:120px;
            line-height: @nav-height;
            text-align:center;
        }
        ul.ul-lev1 {
            height:@nav-height;
            padding-top:5px;
            padding-left:10px;
            font-size:14px;
            display:inline-block;
            li.li-lev1 {
            float:left;
            height:50px;
            line-height:50px;
            position:relative;
            border:1px solid transparent;
            border-radius:4px;
            cursor:pointer;
            font-weight:700;
            &:hover {
                // 显示下拉导航列表
                border-color:#3c6b7a;
            }
            // 导航下拉列表样式
            .menu-son {
                display:none;
                z-index:9999;
                width:280px;
                position: absolute;
                top:50px;
                left:-1px;
                padding:4px 0;
                &:hover {
                    display:block;
                }
                ul.ul-lev2 {
                    font-weight:400;
                    border:1px solid #2d505c;
                    border-radius:4px;
                    background-color: @theme-color;
                    li.li-lev2 {
                    color:#ccc;
                    text-shadow:none;
                    height:40px;
                    line-height: 40px;
                    border-bottom:1px solid #2d505c;
                    margin-bottom:-1px;
                    text-align:left;
                    padding-left:10px;
                    &:hover {
                        // border-color:#558f98
                        background-color: rgba(255,255,255,.1);
                    }
                    }
                    // 子导航激活样式
                    li.li-lev2.active {
                        color:@active-color;
                        // text-shadow:0px 0px 2px #fff;
                        background-color: rgba(255,255,255,.1);
                    }
                }
            }
            div.nav-title {
                color:#ccc;
                padding:0 18px;
            }
                // 主导航激活样式
                div.nav-title.active {
                    color:@active-color;
                    // text-shadow:0px 0px 2px #fff;
                }
            }

        }
        div.control {
            float:right;
            color:#2992e0;
            font-size:14px;
            div.login-status {
                float:left;
                display:inline-block;
                height:@nav-height;
                line-height: @nav-height;
                margin-right:30px;
                // margin-right:20px;
                .user-control {
                    span {
                        color:#3296fa;
                    }
                }
            }
            div.language {
                float:left;
                display:inline-block;
                // div.flag {
                //     width:90px;
                //     height:50px;
                //     // background-color: red;
                // }
            }

        };

        .clear-float:after {
            // &:after{
            content:'';
            height:0;
            line-height:0;
            display:block;
            visibility:
            hidden;
            clear:both;
            // }
        }
    }
    div.el-tabs__item {
        // background-color: red;
        padding: 0 25px;
        height: 32px;
        line-height: 32px;
        color:#606265;
    }
        div.el-tabs__item.is-active {
            color:@active-color;
            font-weight:700;
        }

}
</style>
