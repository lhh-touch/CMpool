<template>
  <div class="register">
        <h2 class="title" v-if="!registerSuccess">註冊一個賬號</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="!registerSuccess">
            <el-form-item label="" prop="name">
                <el-input placeholder="郵箱地址" v-model="ruleForm.name" class="demo-item">
                    <template slot="prepend"><i class="fa fa-envelope-o fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password1" class="form-item">
                <el-input type="password" placeholder="輸入密碼" v-model="ruleForm.password1" class="demo-item">
                    <template slot="prepend"><i class="fa fa-lock fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password2" class="form-item">
                <el-input type="password" placeholder="再次輸入密碼" v-model="ruleForm.password2" class="demo-item">
                    <template slot="prepend"><i class="fa fa-lock fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
                <el-input placeholder="驗證碼" v-model="ruleForm.code" class="demo-item">
                    <template slot="prepend" style="width:110px"><img src="" alt="驗證碼圖片" style="width:14px"></template>
                </el-input>
            </el-form-item>
            <div style="margin-bottom:15px;padding-left:110px;text-align:left"> 
                <el-checkbox-group v-model="ruleForm.agree">
                    <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
                    <el-checkbox label="我同意" name="yes"></el-checkbox> 
                    <span style="font-size:13px;color:#4d9efc;cursor:pointer" @click="serverTerm()">&nbsp; 服務條款</span> &nbsp;&nbsp;
                    <span v-if="showCodeInfo" style="font-size:13px;float:right;color:#f16a6e;"> 
                        <i class="el-icon-warning"></i>
                        你需要同意服務條款!
                    </span>
                </el-checkbox-group>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">現在註冊</el-button>
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>
            <ul class="link-list">
                <li>已經註冊了賬戶？</li>
                <li class="link">
                    <router-link to="/user/login">
                        <span>這裡登錄</span>
                    </router-link>
                </li>
            </ul>
        </el-form>
        <!--登錄后顯示視圖-->
        <div class="register-success" v-if="registerSuccess" style="padding-top:80px">
            <i class="el-icon-success" style="color:#0ac940;font-size:55px"></i>
            <p style="line-height:50px">註冊成功！請登錄{{ruleForm.name}}電郵按指示進行賬號激活。</p>
        </div>
  </div>
</template>
<script>
import verfy from '@/regular/comRegular.js'
import UserManager from "../../axiosJoggle/UserManager";
import judege from "@/components/judegeMess/judegeMessage";
import md5 from "js-md5";
export default {
  data() {
        //匹配密码强度和长度
        var validatePass1 = (rule, value, callback) => {
            var regArr = [];
            var count = 0;
            regArr.push(/[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/); //匹配半角符号
            regArr.push(/[a-z]/); 
            regArr.push(/[A-Z]/); 
            regArr.push(/[0-9]/); 
            regArr.forEach((v,i)=>{
                if(v.test(value)){
                    count++;
                }
            })
            if((value.length<8 || value.length>24) || count<3) {
                callback(new Error('包含大寫、小寫、數字、半形標點至少3種，8-24個字符!'));
            } else {
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if(value !== this.ruleForm. password1) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
      return {
        ruleForm: {
          name: '1000@123.com',
          password1: 'Password1',
          password2: 'Password1',
          code: '',
          agree:false
        },
        rules: {
            name: [
                { required: true, message: '這是必填項', trigger: 'blur' },
                { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password1: [
                { required: true, message: '這是必填項', trigger: 'blur' },
                // { min: 8, max: 24, message: '包含大寫字母、小寫字母、數字、半形標點至少三種，8-24個字符', trigger: 'blur' },
                { validator: validatePass1, trigger: 'blur' }
            ],
            password2: [
                { required: true, message: '這是必填項', trigger: 'blur' },
                { validator: validatePass2, trigger: 'blur' }
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            code: [
                { required: true, message: '這是必填項', trigger: 'blur' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        },
        registerSuccess:false,
        showCodeInfo:false,
      }
  },
  mounted() {
    //   this.register();
    //   console.log('register!123');
  },
  methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.ruleForm.agree===false){
                    this.showCodeInfo = true;
                    return false;
                }
                UserManager.UsersRegister({
                    email:this.ruleForm.name,
                    password:this.ruleForm.password1
                }).then(res=>{
                    console.log(res);
                    if(res.data.code ==='0'){
                        this.registerSuccess = true;
                    }
                }).catch(res=>{
                    console.log(res);
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        serverTerm(){
            this.$msgbox({
            title: '服務條款',
            message: "content"
            })
        },
        register(){
            this.$http({
                url:'http://localhost:7000/user/register',
                method:'post',
                data:{
                    name:this.email,
                    // email:'1535959649@qq.com',
                    password:this.password1
                }
            }).then(res=>{
                console.log(res);
            }).catch(res=>{
                console.log(res)
            })

            // this.$http({
            //     method:'post',
            //     url:'http://localhost:7000/api/user/register',
            //     // url:'http://localhost:7000/data/write',
            //     data:{
            //         email:'12345@qq.com',
            //         password:'123456'
            //     }
            // })

            // UserManager.UsersRegister({
            //     email:'12345@qq.com',
            //     password:'123456'
            // })
        }
    
  },
  watch:{
      'ruleForm.agree':function(){
          console.log(this.ruleForm.agree);
            this.showCodeInfo = !this.ruleForm.agree;
      }
  },
  components: {
  }
};
</script>
<style lang="less" scoped>
    .register {
        margin-top:38px;
        .title {
            font-size:22px;
        }
        .demo-ruleForm {
            width: 420px;
            margin:10px auto;
            -webkit-transform:translate(-50px);
            -o-transform:translate(-50px);
            -moz-transform:translate(-50px);
            .demo-item {
                // margin-top:8px;
            }
        }
        .link-list {
            margin:0 auto;
            padding-left:100px;
            text-align:center;
            li {
                font-size:14px;
                span {
                    color:#3b7ab5;
                }
            }
        }
    }

</style>



