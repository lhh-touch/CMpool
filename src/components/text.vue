<template>
  <div >
      a
  </div>
</template>
<script>
import store from "@/store/store";
import { mapState,mapMutations } from 'vuex';
import Vue from 'vue'
// import ElementUI from 'element-ui'

export default {
  mounted(){
    class b {
      a(){
        const $vue = new Vue()
        let that = this
        that= $vue
        console.log()
        that.$message.error('aaa')
      }
    }
    var c = new b()
    c.a()
  }
  
  
};
</script>

