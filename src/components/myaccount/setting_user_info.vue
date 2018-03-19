<template>
<div class="setting-user">
    <div class="setting-title">基本設置</div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="語 言">
                <el-select v-model="form.language" placeholder="请选择語言">
                <el-option label="英文" value="new Yow"></el-option>
                <el-option label="繁體中文" value="honkong"></el-option>
                <el-option label="簡體中文" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="時 區">
                <el-select v-model="form.timeZone" placeholder="请选择時區">
                <el-option label="+0000 UTC" value="shanghai"></el-option>
                <el-option label="+0000 非洲/阿比讓" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="國 家">
                <el-select v-model="form.country" placeholder="请选择國家">
                <el-option v-for="(v,i) in countryList" :key="i" :label="v" :value="v"></el-option>
                <!--<el-option label="+0000 UTC" value="shanghai"></el-option>
                <el-option label="+0000 非洲/阿比讓" value="beijing"></el-option>-->
                </el-select>
            </el-form-item>
            <!--<el-form-item label="名 字">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="電 郵">
                <el-input placeholder="" v-model="form.email" class="input-with-select" :disabled="true">
                    <el-button slot="append" @click="editEmail()">点击修改</el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="電 話">
                <el-input placeholder="请输入内容" v-model="form.phoneNumber" class="input-with-select">
                    <el-select v-model="form.phoneZoneNum" slot="prepend" placeholder="请选择" style="width:96px">
                        <el-option label="+86" value="1"></el-option>
                        <el-option label="+88" value="2"></el-option>
                        <el-option label="+88" value="3"></el-option>
                    </el-select>
                </el-input>
            </el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width:100%">提 交</el-button>
                <!--<el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">提 交</el-button>-->
            </el-form-item>
        </el-form>
        <div class="modal-email" v-if="isEdit">
            <div class="edit-email-box">
                <div style="font-size:20px;margin:20px">更改電郵</div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="当前電郵" prop="nowEmail">
                        <el-input placeholder="输入当前電郵" v-model="ruleForm.nowEmail" class="demo-item"> </el-input>
                    </el-form-item>
                    <el-form-item label="新電郵" prop="newEmail">
                        <el-input placeholder="输入新電郵" v-model="ruleForm.nweEmail" class="demo-item"> </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">提 交</el-button>
                        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                    </el-form-item>
                </el-form>
                <div class="closed" @click="isEdit=false"><i class="el-icon-close"></i></div>
            </div>
        </div>
</div> 
</template>
<script>
import countryList from '../../assets/country_list'
export default {
    data() {
      return {
        countryList:[],
        isEdit:false,
        form: {
          name: '',
          email: '123@qq.com',
          phoneZoneNum:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //新旧邮箱名
        ruleForm:{
            nowEmail:'',
            newEmail:'',
        },
        rules: {
          nowEmail: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          newEmail: [
            { required: true, message: '這是必填項', trigger: 'blur' },
            { type: 'email', message: '請輸入正確的郵箱地址', trigger: 'blur,change' }
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
    },
    created(){
        this.countryList = countryList;
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
    