<template>
  <div class="setWrap">
      <h2>{{$t('myaccount.title')}}</h2>
      <div class="setmail">
          <h3>{{$t('myaccount.setmail.title')}}</h3>
          <div class="line"></div>
          <div class="change">
              <p>{{$t('myaccount.setmail.change[0]')}}</p>
              <p>{{$t('myaccount.setmail.change[1]')}}</p>
          </div>
          <label for="mailNow">
          <div class="clearfix mailNow">
              <div class="fl">
                  <span class="mailTitle">{{$t('myaccount.setmail.mail[0]')}}</span>
              </div>
              <div class="fr">
                  <span>
                      <input type="text" id="mailNow" readonly :value="oldMail">
                  </span>
              </div>
          </div>
          </label>
          <label for="mailNew">
          <div class="clearfix mailNew">
              <div class="fl">
                  <span class="mailTitle">{{$t('myaccount.setmail.mail[1]')}}</span>
              </div>
              <div class="fr">
                  <span>
                      <input type="text" id="mailNew" ref="mailInp" @change="mailVerify">
                  </span>
              <el-dialog :title="$t('pwdVerify[1]')" :visible.sync="dialogFormVisibles" v-loading="pwd_Verify_Load">
                <el-form>
                  <el-form-item :label="$t('pwdVerify[0]')" :label-width="formLabelWidth">
                    <el-input v-model="oldPwd" type="password" auto-complete="off" id="oldVer" style="width:250px"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisibles = false">{{$t('pwdVerify[3]')}}</el-button>
                  <el-button type="primary" @click="sendMail">{{$t('pwdVerify[2]')}}</el-button>
                </span>
            </el-dialog>
              </div>
          </div>
          </label>
          <div class="clearfix">
              <div class="btn">
                  <el-button class="fr" ref="mailZero" @click="mailZero">{{$t('myaccount.btn[0]')}}</el-button>
                  <el-button class="fr" :disabled="disabledd" @click="dialogshow" >{{$t('myaccount.btn[1]')}}</el-button>
              </div>
          </div>
      </div>
       <div class="setpwd">
        <h3>{{$t('myaccount.setpwd.title')}}</h3> 
        <div class="line"></div>
        <label for="pwdNow">
            <div class="clearfix pwdNow">
                <div class="fl">
                    <span class="pwdTitle">{{$t('myaccount.setpwd.pwd[0]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNow" ref="pwdNowInp" @change="nowPwdVerify">
                    </span>
                </div>
            </div>
            </label>
            <label for="pwdNew">
            <div class="clearfix pwdNew">
                <div class="fl">
                    <span class="pwdTitle">{{$t('myaccount.setpwd.pwd[1]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNew" ref="pwdInp" @change="pwdVerify">
                    </span>
                </div>
            </div>
            </label>
            <label for="pwdNews">
            <div class="clearfix pwdNews">
                <div class="fl">
                    <span class="pwdTitle" >{{$t('myaccount.setpwd.pwd[2]')}}</span>
                </div>
                <div class="fr">
                    <span>
                        <input type="password" id="pwdNews" ref="pwdInps" @change="pwdAgain">
                    </span>
                </div>
            </div>
            </label>
            <div class="clearfix">
                <div class="btn">
                    <el-button class="fr" @click="pwdZero" type="password">{{$t('myaccount.btn[0]')}}</el-button>
                    <el-button class="fr" id="pwdNowBtn" v-loading="pwdLoad" :disabled="disableds" @click="pwdNowVerify">{{$t('myaccount.btn[1]')}}</el-button>
                </div>
            </div>
       </div>
       <div class="telephone">
            <h3>{{$t('myaccount.telphone.title')}}</h3> 
            <div class="line"></div>
            <label for="telephone">
          <div class="clearfix telbox">
              <div class="fl ">
                  <span class="telTitle">{{$t('myaccount.telphone.telbox')}}</span>
              </div>
              <div class="fr">
                  <span>
                      <input type="text" id="telephone" :value="mobilePhone"  readonly style="border:none;">
                  </span>
              </div>
          </div>
          </label>
          <div class="clearfix">
                <mobile-dialog/>
            </div>
       </div>
  </div>
</template>
<script>
import verfy from '@/regular/comRegular.js'
import md5 from "js-md5";
import mobileDialog from "@/components/dialog/mobileDialog";
import UserManager from "../../axiosJoggle/UserManager";
import judege from "@/components/judegeMess/judegeMessage";
export default {
  data() {
    return {
      newMail: "",
      newPwd: "",
      newPwds: "",
      oldPwd: "",
      pwd_Verify_Load: false,
      disabledd: false,
      disableds: false,
      mobile: false,
      dialogFormVisible: false,
      dialogFormVisibles: false,
      formLabelWidth: "120px",
      mobilePhone: "",
      oldMail: "",
      pwdLoad: false,
      req_message: "",
      req_enMessage: "",

    };
  },
  components: {
    mobileDialog
  },
  mounted() {
    this.disabled = true;
    this.disableds = true;
    let login = localStorage.getItem("login");
    this.oldMail = localStorage.getItem("email");
    this.mobilePhone = localStorage.getItem('mobilePhone')
  },
  methods: {
    // 邮箱验证
    mailVerify() {
      this.newMail = this.$refs.mailInp.value;
      let mailNew = document.getElementById("mailNew");
      if (this.$refs.mailInp.value == "") {
        mailNew.style.backgroundColor = "";
      } else {
        verfy.mailVerfy(mailNew,this.newMail,this.$t("register[0]",this.disabledd))
      }
    },
    // 发送邮箱
    sendMail() {
      this.pwd_Verify_Load = true;
      if (this.oldPwd) {
        this.$http
          .post("/api/SystemManage/User/ModifyEmail", {
            newEmail: this.newMail,
            password: md5(this.oldPwd)
          })
          .then(req => {
            this.req_message = req.data.message;
            this.req_enMessage = req.data.enMessage;
            this.pwd_Verify_Load = false;
            if (req.status == 200 && req.data.state == "success") {
              judege.judegeSuccessMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage
              );
              this.oldPwd = "";
              localStorage.setItem("email", this.$refs.mailInp.value);
              this.oldMail = this.$refs.mailInp.value;
              this.$refs.mailInp.value = "";
              this.dialogFormVisibles = false;
            } else {
              judege.judegeWarningMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage
              );
            }
          })
          .catch(error => {
            this.pwd_Verify_Load = false;
            judege.judegeErrorMess(
              this.$store.state.locale,
              this.req_message,
              this.req_enMessage
            );
          });
      } else {
        this.pwd_Verify_Load = false;
        this.$message.error(this.$t("register[1]"));
      }
    },
    // 密码验证
    pwdVerify() {
      this.newPwd = this.$refs.pwdInp.value;
      let pwdNew = document.getElementById("pwdNew");
      if (this.newPwd != "") {
        verfy.pwdVerfy(pwdNew,this.pwd,this.$t("register[1]"))
      }
    },
    // 再次输入密码验证
    pwdAgain() {
      this.newPwds = this.$refs.pwdInps.value;
      let pwdNews = document.getElementById("pwdNews");
      if (this.newPwds != "") {
        if (this.newPwds != this.newPwd) {
          this.disableds = true;
          pwdNews.style.backgroundColor = "#FFC0CB";
        } else {
          this.disableds = false;
          pwdNews.style.backgroundColor = "";
        }
      }
    },
    dialogshow(){
      if(this.$refs.mailInp.value){
        this.dialogFormVisibles = true
      }
    },
    // 重置邮箱
    mailZero() {
      let mailNew = document.getElementById("mailNew");
      mailNew.value = "";
      mailNew.style.backgroundColor = "";
      mailNew.focus();
    },
    // 当前密码验证
    nowPwdVerify() {
      this.oldPwd = this.$refs.pwdNowInp.value;
    },
    // 现在密码验证

    pwdNowVerify() {
      this.pwdLoad = true;
      let btn = document.getElementById("pwdNowBtn");
      let btnChara = btn.children[0];
      // this.$http.post("/api/SystemManage/User/ModifyPassword", {
      //   oldPassword: md5(this.oldPwd),
      //   userPassword: md5(this.newPwds)
      // })
      UserManager.PwdVer({
        oldPassword: md5(this.oldPwd),
        userPassword: md5(this.newPwds)
      })
        .then(req => {
          this.req_message = req.data.message;
          this.req_enMessage = req.data.enMessage;
          if (req.status == 200) {
            if (req.data.state == "success") {
              this.$refs.pwdNowInp.value = "";
              this.$refs.pwdInp.value = "";
              this.$refs.pwdInps.value = "";
              judege.judegeSuccessMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage,
                this
              );
              btnChara.innerText = this.$t("success[2]");
              btn.classList.add("el-successBtn");
              this.pwdLoad = false;
              setTimeout(() => {
                btnChara.innerText = this.$t("myaccount.btn[1]");
                btn.classList.remove("el-successBtn");
              }, 2000);
            } else {
              judege.judegeWarningMess(
                this.$store.state.locale,
                this.req_message,
                this.req_enMessage,
                this
              );
              this.pwdLoad = false;
              btnChara.innerText = this.$t("success[3]");
              btn.classList.add("el-errorBtn");
              setTimeout(() => {
                btnChara.innerText = this.$t("myaccount.btn[1]");
                btn.classList.remove("el-errorBtn");
              }, 2000);
            }
          }
        })
        .catch(req => {
          judege.judegeErrorMess(
            this.$store.state.locale,
            this.req_message,
            this.req_enMessage,
            this
          );
        });
    },
    // 重置密码
    pwdZero() {
      let pwdNew = document.getElementById("pwdNew");
      let pwdNews = document.getElementById("pwdNews");
      pwdNew.value = "";
      pwdNew.style.backgroundColor = "";
      pwdNew.focus();
      pwdNews.value = "";
      pwdNews.style.backgroundColor = "";
    },
  }
};
</script>

<style>
@media screen and (max-width: 575.98px) {
  input {
    margin-top: 10px;
    border: 1px solid #e1e1e1;
  }
  .fr {
    float: left;
  }
}
.setWrap {
  border: 1px solid #e1e1e1;
}
.setWrap h2 {
  font-size: 30px;
}
.setmail,
.setpwd,
.telephone {
  text-align: left;
  padding: 5px 20px;
}
.line {
  border-bottom: 1px solid #e1e1e1;
}
.change {
  padding: 15px;
  color: #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.change p {
  margin-top: 20px;
}
.telephone {
  line-height: 40px;
}
h3 {
  font-size: 16px;
  color: gray;
  font-weight: 600;
  padding: 5px;
  text-align: left;
}
.mailNow,
.mailNew,
.pwdNow,
.pwdNew,
.pwdNews,
.telbox {
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  cursor: pointer;
}
.mailTitle,
.pwdTitle,
.telTitle {
  font-size: 20px;
  font-weight: 400;
}
.el-button {
  margin-top: 10px;
  margin-right: 3px;
}
input {
  width: 300px;
  height: 30px;
  font-size: 20px;
  outline: none;
}
#pwdNowBtn:hover {
  color: #409eff !important;
  border-color: #c6e2ff !important;
  background-color: #ecf5ff !important;
}
#mailNow {
  border: none;
}
.el-successBtn {
  background-color: rgb(103, 194, 58) !important;
  color: white !important;
}
.el-errorBtn {
  background-color: #ffc0cb !important;
  color: white !important;
}
</style>

