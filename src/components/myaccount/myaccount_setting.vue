<template>
<div class="myaccount_setting">
    <div class="aside">
        <v-aside></v-aside>
    </div>
    <div class="main-box">
        <router-view/>
    </div>
</div> 
</template>
<script>
import aside from './setting_aside'
export default {
    // components(){
    //     aside
    // }
    components: {
        'v-aside':aside
    },
    created(){
        let path = window.sessionStorage.getItem('myaccountCurrentPath');
        path = path?path:'/myaccout/setting/user_info';
        this.$router.push({path:path});
    }
};
</script>
<style lang="less">
// aside寬度
@aside-width:220px;
.myaccount_setting {
    position: relative;
    margin-top:20px;
    min-height:530px;
    .aside {
        position: absolute;
        left:0;
        top:0;
        width:@aside-width;
        min-height:100px;
    }
    .main-box {
        width:90%;
        padding-left:@aside-width+90px;
        padding-right:180px;
    }

}

</style>
    