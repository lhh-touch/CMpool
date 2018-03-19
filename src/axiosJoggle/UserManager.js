import axios from 'axios'
import Vue from 'vue'
class UserManager {
  // 登录
  UsersLogin(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/Login/checklogin', data)
    } else {

    }
  }
  //注册
  UsersRegister(data = {}) {
    if (data || Object.keys(data).length) {
      // return axios.post('http://localhost:7000/api/user/register', data)
      return axios.post('http://localhost:7000/api/user/register', data)
    } else {

    }
  }
  // 发送邮箱
  SendMail(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/SystemManage/User/ModifyEmail', data)
    } else {

    }
  }
  // 修改密码验证
  PwdVer(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/SystemManage/User/ModifyPassword', data)
    } else {

    }
  }
//忘记密码->邮箱
PwdForget(data = {}) {
  if (data || Object.keys(data).length) {
    return axios.post('/api/Login/ForgetPassword', data)
  } else {

  }
}
//忘记密码->重置密码
AgainForget(data = {}) {
  if (data || Object.keys(data).length) {
    return axios.post('/api/Login/ResetPassword', data)
  } else {

  }
}
// 修改邮箱返回
ConfirmNewEmail(data={}) {
  if (data || Object.keys(data).length) {
    return axios.post('/api/Login/ConfirmNewEmail', data)
  } else {

  }
}
  //绑定手机->发送验证码
  TelBinding(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/SystemManage/User/NumberVerify', data)
    } else {

    }
  }
  //获取国际代码
  GetCode() {
    return axios.get(`/api/SystemManage/User/GetDialCodes`)
  }
  //提交全部信息
  SubmitAllMess(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/SystemManage/User/NumberVerifyCheck', data, {
        withCredentials: true
      })
    } else {

    }
  }
}
export default new UserManager()
