<template>
<div class="setting-user">
    <div class="setting-title">密碼設置</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="" prop="name">
                <el-input placeholder="郵箱地址" v-model="ruleForm.name" class="demo-item">
                    <template slot="prepend"><i class="fa fa-envelope-o fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password1" class="form-item">
                <el-input type="password" placeholder="輸入舊密碼" v-model="ruleForm.password1" class="demo-item">
                    <template slot="prepend"><i class="fa fa-lock fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password2" class="form-item">
                <el-input type="password" placeholder="輸入新密碼" v-model="ruleForm.password2" class="demo-item">
                    <template slot="prepend"><i class="fa fa-lock fa-fw" style="font-size: 20px;width:14px"></i></template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">提 交</el-button>
                <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>
        </el-form>
</div> 
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          name: window.sessionStorage.getItem('loginName'),
          password1: '',
          password2: '',
          code: ''
        },
        rules: {
          name: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password1: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password2: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        editEmail() {
            this.isEdit = true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    }
};
</script>
<style lang="less" >
.setting-user {
    .setting-title {
        margin-bottom:30px;
        color:#0f203a;
        font-size:20px;
    }
    .el-select {
        width: 100%;
        
    }
    .el-input.is-disabled .el-input__inner {
        background-color: #fff;
    }
    .modal-email {
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,.5);
        z-index: 10000;
        .edit-email-box {
            margin:155px auto;
            height:350px;
            width:600px;
            background-color: #fff;
            border-radius:6px;
            padding:22px;
            position: relative;
            .closed {
                position: absolute;
                top:12px;
                right:12px;
                width:22px;
                height:22px;
                cursor: pointer;
                &:hover {
                    color:#41a3dd;
                }
            }
        }
        .demo-ruleForm {
            width:480px;
            margin:32px auto;
            padding-right:65px;
            padding-left:-80px;
        }
    }
}

</style>
    