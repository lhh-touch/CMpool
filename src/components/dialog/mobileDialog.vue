<template>
  <div class="btn">
    <el-button class="fr" @click="mobile = true" id="judgeAmend"></el-button>
    <el-dialog :visible.sync="mobile" v-loading="loading">
        {{$t('mobileDialog.title[0]')}}
        <div class="select">
          <el-select v-model="value" :placeholder="$t('mobileDialog.placeholder[2]')" size="large" id="select" @change="judgeCor" >
              <el-option
              v-for="(item,key) in options"
              :key="key"
              :label="item.countryCode"
              :value="item.countryCode">
              <span style="float: left">{{item.countryCode}}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.dialCode }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="telphone">
            {{$t('mobileDialog.title[1]')}}
        <el-input v-model="mobileInput" id="mobileInput" :placeholder="$t('mobileDialog.placeholder[0]')"  @keyup.native="mobileVer"></el-input>
        <input type="button" id="btnCode" @click="sendCode" :disabled="disableds" :value="$t('mobileDialog.btn[0]')">
        </div>
        <div style="display:block" class="code" >
            {{$t('mobileDialog.title[2]')}}
        <el-input v-model="mobileCode" :placeholder="$t('mobileDialog.placeholder[1]')" style="width:200px;margin-top:20px;" id="mobileCode" ></el-input>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button  @click="cancel">{{$t('mobileDialog.btn[3]')}}</el-button>
          <el-button @click="submit" :disabled="submits" type="primary">{{$t('mobileDialog.btn[2]')}}</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import verfy from "@/regular/comRegular.js";
import { telReg } from "@/regular/regular.js";
import UserManager from "../../axiosJoggle/UserManager";
import judege from "@/components/judegeMess/judegeMessage";
export default {
  data() {
    return {
      mobile: false,
      mobileInput: "",
      disableds: false,
      submits: false,
      mobileCode: "",
      codeTimeout: "",
      codeBtn: "",
      count: 59,
      curcount: "",
      options: "",
      value: "",
      loading: false,
      req_message: "",
      req_enMessage: ""
    };
  },
  mounted() {
    let judgeAmend = document.getElementById("judgeAmend");
    if (localStorage.getItem('mobilePhone')) {
      judgeAmend.innerHTML = this.$t("mobileDialog.btn[4]");
    } else {
      judgeAmend.innerHTML = this.$t("mobileDialog.btn[5]");
    }
    UserManager.GetCode()
      .then(req => {
        if (req.status == 200) {
          this.options = req.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    sendCode() {
      this.curcount = this.count;
      let btnCode = document.getElementById("btnCode");
      let mobileInput = document.getElementById("mobileInput");
      if (telReg.test(this.mobileInput)) {
        let select = document.getElementById("select");
        select.style.backgroundColor = "";
        if (this.value != "") {
          select.style.backgroundColor = "";
          this.disableds = true;
          btnCode.value = this.curcount + "s";
          this.codeTimeout = window.setInterval(this.codeTime, 1000);
          mobileInput.style.backgroundColor = "";
          UserManager.TelBinding({
            countryCode: this.value,
            number: this.mobileInput
          })
            .then(req => {
              this.req_message = req.data.message;
              this.req_enMessage = req.data.enMessage;
              if (req.status == 200) {
                if (req.data.state == "success") {
                  this.$store.state.mobilePhone = this.mobileInput;
                  judege.judegeSuccessMess(
                    this.$store.state.locale,
                    this.req_message,
                    this.req_enMessage
                  );
                } else if (req.data.state == "error") {
                  judege.judegeWarningMess(
                    this.$store.state.locale,
                    this.req_message,
                    this.req_enMessage
                  );
                }
              }
            })
            .catch(error => {
              judege.judegeWarningMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage
              );
            });
        } else {
          select.style.backgroundColor = "#FFC0CB";
          this.$message.error(this.$t("el_message[1]"));
        }
      } else {
        mobileInput.style.backgroundColor = "#FFC0CB";
        this.$message.error(this.$t("el_message[0]"));
      }
    },
    codeTime() {
      let btnCode = document.getElementById("btnCode");
      if (this.curcount == 0) {
        this.disableds = false;
        window.clearInterval(this.codeTimeout);
        btnCode.value = this.$t("el_message[7]");
      } else {
        this.curcount--;
        btnCode.value = this.curcount + "s";
      }
    },
    cancel() {
      let btnCode = document.getElementById("btnCode");
      this.mobile = false;
      window.clearInterval(this.codeTimeout);
      btnCode.value = this.$t("el_message[2]");
      this.mobileInput = "";
      this.mobileCode = "";
      this.value = "";
      this.disableds = false;
    },
    mobileVer() {
      let mobileInp = document.getElementById("mobileInput");
      verfy.telVerfy(mobileInp, this.mobileInput, this.$t("register[6]"));
    },
    submit() {
      let mobileInput = document.getElementById("mobileInput");
      let mobileCode = document.getElementById("mobileCode");
      let btnCode = document.getElementById("btnCode");
      if (this.mobileInput == "") {
        mobileInput.style.backgroundColor = "#FFC0CB";
        this.$message.error(this.$t("el_message[2]"));
      } else if (this.mobileCode == "") {
        mobileCode.style.backgroundColor = "#FFC0CB";
        this.$message.error(this.$t("el_message[3]"));
      } else if (this.value == "") {
        select.style.backgroundColor = "#FFC0CB";
        this.$message.error(this.$t("el_message[4]"));
      } else {
        this.loading = true;
        window.clearInterval(this.codeTimeout);
        btnCode.value = this.$t("el_message[1]");
        UserManager.SubmitAllMess({
          email: localStorage.getItem("email"),
          number: this.mobileInput,
          code: this.mobileCode
        })
          .then(req => {
            this.req_message = req.data.message;
            this.req_enMessage = req.data.enMessage;
            if (req.status == 200 && req.data.state == "success") {
              judege.judegeSuccessMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage
              );
              this.loading = false;
              this.mobile = false;
              window.clearInterval(this.codeTimeout);
              btnCode.value = this.$t("el_message[2]");
              localStorage.setItem('mobilePhone',this.mobileInput)
              this.mobileInput = "";
              this.mobileCode = "";
              this.value = "";
            } else {
              judege.judegeWarningMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage
              );
              this.loading = false;
            }
          })
          .catch(error => {
            this.loading = false;
            judege.judegeErrorMess(
              this.$store.state.locale,
              this.req_message,
              this.req_enMessage
            );
          });
      }
    },
    judgeCor() {
      if (this.value == "") {
        select.style.backgroundColor = "#FFC0CB";
      } else {
        select.style.backgroundColor = "";
      }
    }
  }
};
</script>
<style lang="less" >
@media screen and (max-width: 575.98px) {
  .el-dialog {
    width: 400px;
  }
}
.el-dialog {
  .el-button {
    margin-top: 10px;
  }
  .select {
    display: inline-block;
    .el-select {
      .el-input {
        width: 100px;
        font-size: 16px;
      }
    }
  }
  .telphone {
    margin-top: 20px;
    .el-input {
      width: 200px;
      display: inline-block;
      font-size: 16px;
    }
    #btnCode {
      padding: 5px 0;
      width: 100px;
      cursor: pointer;
      background-color: white;
      border: 1px solid #e1e1e1;
      font-size: 12px;
      border-radius: 5%;
    }
  }
  .code {
    .el-input {
      width: 200px;
      display: inline-block;
      font-size: 16px;
    }
  }
}
</style>

