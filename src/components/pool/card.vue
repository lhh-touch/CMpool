<template>

      <el-main>
        <el-row>
            <el-col :lg="24" :xs="24" style="margin:0 0 20px 0">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">{{this.$t('breadcrumb[0]')}}</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/pool/systemStts'}">{{this.$t('breadcrumb[1]')}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="cardRow">
            <el-col class="oneself cardCol" :lg="12" :xs="24" v-show="oneselfShow">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="fl">{{this.$t('card.myWorking[0]')}}</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-user fr"></i>
                    </div>
                    <div >
                        <i class="fa fa-flash"></i>
                    </div>
                    <div class="" style="font-size:20px">
                        <span>0.00</span>
                        <span>H/s</span>
                        <h4 style="font-size:14px; color:gray">{{this.$t('card.myWorking[1]')}}</h4>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <ul>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.myWorking[2]')}}</span>
                                <span class="fr">0.00 <span>%</span></span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.myWorking[3]')}}</span>
                                <span class="fr">0</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.myWorking[4]')}}</span>
                                <span class="fr">None</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.myWorking[5]')}}</span>
                                <span class="fr">0.00</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.myWorking[6]')}}</span>
                                <span class="fr">0.00 <span>%</span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <div class="left fl">
                            <div style="font-size:25px">0.00</div>
                            <div style="color:gray">{{this.$t('card.myWorking[7]')}}</div>
                        </div>
                        <div class="right fr"> 
                            <div style="font-size:25px">0</div>
                            <div style="color:gray">{{this.$t('card.myWorking[8]')}}</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col class="pool cardCol" :lg="12" :xs="24">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="fl">{{this.$t('card.poolWork[0]')}}</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-users fr"></i>
                    </div>
                    <div >
                        <i class="fa fa-flash"></i>
                    </div>
                    <div class="" style="font-size:20px">
                        <span>0.00</span>
                        <span>H/s</span>
                        <h4 style="font-size:14px; color:gray">{{this.$t('card.poolWork[0]')}}</h4>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <ul>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[1]')}}</span>
                                <span class="fr">6,035,888</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[2]')}}</span>
                                <span class="fr">121,686</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[3]')}}</span>
                                <span class="fr">100 <span>%</span></span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[4]')}}</span>
                                <span class="fr">1</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[5]')}}</span>
                                <span class="fr">None</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[6]')}}</span>
                                <span class="fr">None</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.poolWork[7]')}}</span>
                                <span class="fr">None</span>
                            </li>
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <div class="left fl">
                            <div style="font-size:25px">0.00</div>
                            <div style="color:gray">{{this.$t('card.poolWork[8]')}}</div>
                        </div>
                        <div class="right fr"> 
                            <div style="font-size:25px">0</div>
                            <div style="color:gray">{{this.$t('card.poolWork[9]')}}</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col class="Network cardCol" :lg="12" :xs="24">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="fl">{{this.$t('card.Network[0]')}}</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-cloud fr"></i>
                    </div>
                    <div >
                        <i class="fa fa-flash"></i>
                    </div>
                    <div class="" style="font-size:20px">
                        <span>0.00</span>
                        <span>H/s</span>
                        <h4 style="font-size:14px; color:gray">{{this.$t('card.Network[1]')}}</h4>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <ul>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[2]')}}</span>
                                <span class="fr">Myriad Groestl</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[3]')}}</span>
                                <span class="fr">90 <span>s</span></span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[4]')}}</span>
                                <span class="fr">6,035,943</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[5]')}}</span>
                                <span class="fr">823.84</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[6]')}}</span>
                                <span class="fr">203,908</span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.Network[7]')}}</span>
                                <span class="fr">2.1.6  <span>(Latest)</span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <div class="left fl">
                            <div style="font-size:25px">0.00</div>
                            <div style="color:gray">DGB/GH</div>
                        </div>
                        <div class="right fr"> 
                            <div style="font-size:25px">0</div>
                            <div style="color:gray">BTC/GH</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col class="Coin cardCol" :lg="12" :xs="24">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="fl">{{this.$t('card.coin[0]')}}</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-info-circle fr"></i>
                    </div>
                    <div >
                        <img src="/static/img/digibyte (1).png" alt="">
                    </div>
                    <div class="" style="font-size:20px">
                        
                        <h4 style="font-size:14px; color:gray">DigiByte</h4>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix">
                        <ul>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.coin[1]')}}</span>
                                <span class="fr"><a href="#">https://www.digibyte.io/</a></span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.coin[2]')}}</span>
                                <span class="fr">0.00000696 <span>BTC</span></span>
                            </li>
                            <li class="clearfix">
                                <span class="fl">{{this.$t('card.coin[3]')}}</span>
                                <span class="fr"><span>$</span> 157,017,342.00</span>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="cardRow cardTable">
            <el-col :lg="24" :xs="24">
                <el-card class="box-card" style="width:100%">
                    <div slot="header" class="clearfix">
                        <span class="fl">709.51
                            <br>
                            <span style="color:gray">{{this.$t('card.luckly[0]')}}</span>
                        </span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-history fr"></i>
                    </div>
                    <div >
                    </div>
                    <div class="clearfix" style="font-size:20px">
                        <h4 class="fl" style="font-size:14px; color:gray"><i class="fa fa-cubes"></i> {{this.$t('card.luckly[1]')}}</h4>
                    </div>
                    <div class="line" style="margin:10px 0 0 0;"></div>
                    <div class="clearfix" style="margin-top: 10px;">
                        <table style="width:100%">
                            <tr style="border-bottom:1px solid black">
                                <th>{{this.$t('card.luckly[2]')}}</th>
                                <th>{{this.$t('card.luckly[3]')}}</th>
                                <th>{{this.$t('card.luckly[4]')}}</th>
                                <th>{{this.$t('card.luckly[5]')}}</th>
                                <th>{{this.$t('card.luckly[6]')}}</th>
                            </tr>
                            <tr v-for="(item) in tableData" v-bind:key="item.Date">
                                <td>{{item.Date}}</td>
                                <td><i class="fa fa-cube text-success block"></i>{{item.Round}}</td>
                                <td>{{item.Founder}}</td>
                                <td>{{item.Actual}}</td>
                                <td>{{item.Luck}}</td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="cardRow cardTable">
            <el-col :lg="24" v-show="income">
                <el-card class="box-card" style="width:100%">
                    <div slot="header" class="clearfix">
                        <span class="fl" style="text-align:left;">
                            <span>0.00000000 </span>
                            DASH
                            <br>
                            <span style="color:gray">{{this.$t('card.unconfirmed[0]')}}</span>
                        </span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-credit-card-alt fr"></i>
                    </div>
                    <div >
                    </div>
                    <div class="clearfix" style="font-size:20px">
                        <h4 class="fl" style="font-size:14px; color:gray"><i class="fa fa-money"></i>{{this.$t('card.unconfirmed[1]')}}</h4>
                    </div>
                    <div class="line" style="margin:10px 0 0 0;"></div>
                    <div class="clearfix" style="margin-top: 10px;">
                        <table style="width:100%">
                            <tr v-for="(item) in revenue" v-bind:key="item.Date">
                                <td>{{item.Date}}</td>
                                <td><i class="fa fa-cube text-success block"></i>{{item.Round}}</td>
                                <td>{{item.Dash}} <span>DASH</span> </td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="cardRow cardTable">
            <el-col class="cardCol" :lg="24" v-show="balance">
                <el-card class="box-card" style="width:100%">
                    <div slot="header" class="clearfix">
                        <span class="fl" style="text-align:left;">
                            <span>0.00000000 </span>
                            DASH
                            <br>
                            <span style="color:gray">{{this.$t('card.balance[0]')}}</span>
                        </span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-credit-card-alt fr"></i>
                    </div>
                    <div >
                    </div>
                    <div class="clearfix" style="font-size:20px">
                        <h4 class="fl" style="font-size:14px; color:gray"><i class="fa fa-money"></i>{{this.$t('card.balance[1]')}}</h4>
                    </div>
                    <div class="line" style="margin:10px 0 0 0;"></div>
                    <div class="clearfix" style="margin-top: 10px;">
                        <table style="width:100%">
                            <tr v-for="(item) in balance" v-bind:key="item.Date">
                                <td>{{item.Date}}</td>
                                <td><i class="fa fa-cube text-success block"></i>{{item.Round}}</td>
                                <td>{{item.Founder}} <span>DASH</span> </td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="cardRow cardTable">
            <el-col :lg="24" :xs="24" v-show="activeWorker">
                <el-card class="box-card" style="width:100%">
                    <div slot="header" class="clearfix">
                        <span class="fl">0
                            <br>
                            <span style="color:gray">{{this.$t('card.effective[0]')}}</span>
                        </span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <i class="fa fa-history fr"></i>
                    </div>
                    <div >
                    </div>
                    <div class="clearfix" style="font-size:20px">
                        <h4 class="fl" style="font-size:14px; color:gray"><i class="fa fa-cubes"></i>{{this.$t('card.effective[1]')}}</h4>
                        <span class="fr" style="font-size:12px;"><i>0</i>{{this.$t('card.effective[2]')}}</span>
                    </div>
                    <div class="line" style="margin:10px 0 0 0;"></div>
                    <div class="clearfix" style="margin-top: 10px;">
                        
                    </div>
                </el-card>
            </el-col>
        </el-row>
      </el-main>

</template>

<script>
import cardAxios from "../../axiosJoggle/cardAxios";
export default {
  data() {
    return {
      tableData: [
        {
          Date: "2016-05-02",
          Round: "5,916,141",
          Founder: "shwuhk",
          Actual: "56.40",
          Luck: 447.9
        },
        {
          Date: "2016-05-04",
          Round: "5,916,141",
          Founder: "shwuhk",
          Actual: "56.40",
          Luck: 447.9
        }
      ],
      revenue: [
        {
          Date: "2017-11-28",
          Round: "777,914",
          Dash: "0.00000000"
        },
        {
          Date: "2017-11-27",
          Round: "777,914",
          Dash: "0.00000000"
        }
      ],
      balance: [
        {
          Date: "2017-10-18",
          icon: "",
          Dash: "-0.00100000"
        },
        {
          Date: "2017-10-17",
          icon: "",
          Dash: "-9.12154484 "
        },
        {
          Date: "2017-10-13",
          icon: "",
          Dash: "9.12254429"
        }
      ],
      name: "",
      breadcrumb: this.$store.state.breadcrumb,
      oneselfShow: true,
      income: true,
      balance: true,
      activeWorker: true
    };
  },
  mounted() {
    console.log(this.$route.params.id)
    let login = localStorage.getItem("login");
    if (login !== "ok") {
      this.oneselfShow = false;
      this.income = false;
      this.balance = false;
      this.activeWorker = false;
      this.$message({
        type: "warning",
        message: this.$t("loginHint[0]"),
        showClose: true
      });
    }
  },
  methods: {}
};
</script>
<style lang="less">
@media screen and (max-width: 575.98px) {
  #app {
    .el-container {
      font-size: 12px;
      .el-main {
        .cardTable {
          padding: 0;
        }
      }
    }
  }
}

.el-main {
  .el-container {
    width: 100%;
    .cardRow {
      margin: 20px 0;
      .cardCol {
        margin: 20px 0;
        //   padding: 0 100px;
        .el-card {
          margin: 0 auto;
        }
      }
    }
  }
  .line {
    margin: 20px 50px;
    border-bottom: 1px solid gray;
    box-shadow: 1px 1px 6px gray;
  }
}

table td {
  padding: 10px 0;
}
.block {
  color: greenyellow;
  font-size: 20px;
}
</style>