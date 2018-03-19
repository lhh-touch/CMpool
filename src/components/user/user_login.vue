<template>
  <div class="login">
        <h2 class="title">請登錄</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="" prop="name">
                <el-input placeholder="用戶名" v-model="ruleForm.name" class="demo-item">
                    <template slot="prepend"><i class="fa fa-user fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password" class="form-item">
                <el-input type="password" placeholder="密碼" v-model="ruleForm.password" class="demo-item">
                    <template slot="prepend"><i class="fa fa-lock fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
                <el-input placeholder="驗證碼" v-model="ruleForm.code" class="demo-item">
                    <template slot="prepend" style="width:110px"><img src="" alt="驗證碼圖片" style="width:14px"></template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登錄</el-button>
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>
            <ul class="link-list">
                    <li>
                        <router-link to="/user/register">
                            <span>註冊</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/reset">
                            <span>忘記密碼</span>
                        </router-link>
                    </li>
            </ul>
        </el-form>
  </div>
</template>
<script>
import verfy from '@/regular/comRegular.js'
import UserManager from "../../axiosJoggle/UserManager";
import judege from "@/components/judegeMess/judegeMessage";
import md5 from "js-md5";
export default {
  data() {
      return {
        ruleForm: {
          name: 'admin@Touch-Network.com',
          password: '123456',
          code: ''
        },
        rules: {
          name: [
            { required: true, message: '請輸入用戶名', trigger: 'blur' },
            { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '請輸入密碼', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '請輸入驗證碼', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
  },
  mounted() {
  },
  methods: {
        submitForm(formName) {
            let _window = window;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    if(this.ruleForm.name==='admin@Touch-Network.com'&&this.ruleForm.password==='123456'){
                        // 登录成功
                        this.$router.push({name:'4-1'});
                        window.sessionStorage.setItem('loginName',this.ruleForm.name);
                        this.$store.commit('setUserName',this.ruleForm.name); //this.$store.state.isLogin设置ok
                        this.$message({
                            message: '歡迎登錄！',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('賬號或密碼錯誤！');
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    
  },
  components: {
  }
};
</script>
<style lang="less" scoped>
    .login {
        margin-top:38px;
        .title {
            font-size:22px;
        }
        .demo-ruleForm {
            width: 442px;
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
            padding-left:50px;
            text-align:center;
            li {
                // float:left;
                display:inline-block;
                margin-left:50px;
                span {
                    color:#3b7ab5;
                    font-size:14px;
                }
            }
        }
    }

</style>



