<template>
  <div id="app">
    <com-nav ref="commonnav"></com-nav>
    <div class="index-router-view">
    		<!--home_index组件指定在这个视图里面渲染-->
    		<router-view name="index"></router-view>
    </div>
    <div class="router-view" id="router-view">
        <router-view> </router-view>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import comNav from "@/components/comNav";
import footer from "@/components/footer";
export default {
  name: 'App',
  components: {
    comNav,
    "v-footer":footer
  },
  methods:{
    // 初始页面自适应
    initpage(){
        var initWidth = 1000;
        var html = document.getElementsByTagName('html')[0];
        var view_width = html.getBoundingClientRect().width;  
        var initRouterHeight = html.getBoundingClientRect().height - 60-128;  
        if(view_width<1000 && view_width>=960){
            initWidth = view_width;
        }else if(view_width<960){
            initWidth = 960;
        }
        // document.querySelector('#app').style.width = initWidth+'px';
        // document.querySelector('.router-view').style.minHeight = initRouterHeight+'px';
    },
  },
  mounted(){
      this.initpage();
  },
  watch:{
  	
  }
}
</script>

<style lang="less">
    @view-width:1180px;
    #app {
    	min-width: 1180px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      height: 100%;
      margin:0 auto;
      background-color: #fff;
      position: relative;
        .router-view {
            width:@view-width;
            margin:0 auto;
            /*min-height:355px;*/
        }
    }
</style>
