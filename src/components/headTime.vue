<template>
  <el-row class="headtime clearfix hidden-xs-only" >
      <span title="server time in timezone : CHINA" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">{{time | data}}</span>
      <span title="Pool Hashrate" class="" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">1.954 Eh/s</span>
      <span title="selected coin" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3"><i class="fa fa-btc"></i>Bitcoin</span>
      <span title="The price of CNY" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">CNY: <strong>72582.91</strong> </span>
      <span title="The price of EUR" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">EUR: <strong>9255.15</strong></span>
      <span title="The price of GBP" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">GBP: <strong>8171.28</strong></span>
      <span title="The price of 8USD" :span="3" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">8USD: <strong>11294.9</strong></span>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      time: Date.now(),
      num:1
    };
  },
  mounted(){
      this.$nextTick(function () {
          window.clearInterval(timer)
          var timer=window.setInterval(this.set,500)
      })
  },
  methods: {
    set() {
      if(this.num>=1){
          this.time=Date.now();
        //   
      }
    }
  },
  filters: {
    data: function(input) {
      let d = new Date(input);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      let hour = d.getHours()<10?"0"+d.getHours():""+d.getHours();
      let minutes = d.getMinutes()<10?"0"+d.getMinutes():""+d.getMinutes();
      let seconds = d.getSeconds()<10?"0"+d.getSeconds():""+d.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
</script>

<style>
.headtime {
  position: relative;
  top: 0;
  text-align: left;
}
.headtime span:nth-child(1){
    display: inline-block;
    border-right: 2px solid rgb(153, 169, 191);
    width: 150px;
    padding: 5px 5px;
}
.headtime span:nth-child(2){
    border-right: 2px solid rgb(153, 169, 191);
    padding: 5px 5px;
}
.headtime span:nth-child(3){
    border-right: 2px solid rgb(153, 169, 191);
    padding: 5px 5px;
}
</style>

