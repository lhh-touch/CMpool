<template>
  <div class="wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @click="handleClick($event)">
        <router-link to="/myaccout/setting/user_info">
            <el-menu-item index="1" @click="handleClick('1')">
                <i class="el-icon-menu"></i>
                <span slot="title">基本設置</span>
            </el-menu-item>
        </router-link>
        <router-link to="/myaccout/setting/user_account">
            <el-menu-item index="2" @click="handleClick('2')">
                <i class="el-icon-menu"></i>
                <span slot="title">賬戶設置</span>
            </el-menu-item>
        </router-link>
        <router-link to="/myaccout/setting/user_password">
            <el-menu-item index="3" @click="handleClick('3')">
                <i class="el-icon-menu"></i>
                <span slot="title">密碼設置</span>
            </el-menu-item>
        </router-link>
            <!--<el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">启用硬币</span>
            </el-menu-item>-->
            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>比特币</span>
                </template>
                <el-menu-item index="4-1" style="padding-left:50px;">矿业</el-menu-item>
                <el-menu-item index="4-2" style="padding-left:50px;">监控</el-menu-item>
                <el-menu-item index="4-3" style="padding-left:50px;">赔率</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">设备</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-document"></i>
                <span slot="title">訪問令牌</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span slot="title">安全</span>
            </el-menu-item>
    </el-menu>
  <!--</el-col>-->
  </div>
</template>
<script>
export default {
    data(){
        return {
            activeIndex:'1',
        }
    },
    watch:{
        '$route.path':function(){
          window.sessionStorage.setItem('myaccountCurrentPath',this.$route.path);
          console.log(this.$route.path);
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(index){
          console.log(index);
          window.sessionStorage.setItem('myaccountAsideActive',index);
      }
    },
    created(){
        let myaccountAsideActive = window.sessionStorage.getItem('myaccountAsideActive');
        this.activeIndex = myaccountAsideActive?myaccountAsideActive:'1';
    }
}
</script>
<style lang="less">
.wrap {
    .el-submenu {
        text-align: left;
    }
    .el-menu-item {
        text-align: left;
    }


}
/*.wrap {
  background-color: #e1e1e1;
  height: 600px;
  text-align: left;
}
.wrap ul li {
  padding: 15px 20px;
  border-bottom: 1px solid rgb(128, 128, 128);
}
.wrap ul li .skip {
  width: 100%;
  color: rgb(128, 128, 128);
  display: inline-block;
}
.wrap ul li:hover {
  background-color: #fff;
}
img {
  width: 25px;
  vertical-align: middle;
}*/
</style>

