<template>
  <div class="resetPassword">
        <h2 class="title" v-if="!setSuccess">密碼重設</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  v-if="!setSuccess">
            <el-form-item label="" prop="email">
                <el-input placeholder="邮箱地址" v-model="ruleForm.email" class="demo-item">
                    <template slot="prepend"><i class="fa fa-envelope-o fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
                <el-input placeholder="验证码" v-model="ruleForm.code" class="demo-item">
                    <template slot="prepend" style="width:110px"><img src="" alt="验证码图片" style="width:14px"></template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">重置我的密碼</el-button>
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>
            <ul class="link-list">
                <li>或</li>
                <router-link to="/user/login">
                <li class="link">這裡登錄</li>
                </router-link>
            </ul>
        </el-form>
        <!--設置成功后提示-->
        <div class="set-success" v-if="setSuccess" style="padding-top:80px">
            <i class="el-icon-success" style="color:#0ac940;font-size:55px"></i>
            <p style="line-height:50px">申請成功！請登錄{{ruleForm.name}}電郵按指示進行密碼設置。</p>
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
      return {
        ruleForm: {
          email: '',
          code: ''
        },
        rules: {
          email: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        setSuccess:false
      }
  },
  mounted() {
  },
  methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // alert('submit!');
                this.setSuccess = true;
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
    .resetPassword {
        margin-top:38px;
        .title {
            font-size:22px;
        }
        .demo-ruleForm {
            width: 440px;
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
                // float:left;
                display:inline-block;
                // margin-left:50px;
                font-size:14px;
            }
            li.link {
                color:#3b7ab5;
            }
        }
    }

</style>



