import axios from 'axios'
import Vue from 'vue'
class cardAxios {
  // 获取列表 表格 
  getSystem(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   获取个人资料
  getSelfWorkingStatus(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   获取矿池资料
  getPoolWorkingStatus(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   获取网络资料
  getNetworkDetails(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   币种资料
  getCoinDetail(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   开矿资料
  getLuckly(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   我的未确认收入
  getUnconfirmed(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   我的余额
  getSelfBalance(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
//   我的有效矿工
  geteSelfEffectiveWork(data = {}) {
    if (data || Object.keys(data).length) {
      return axios.post('/api/TouchPool/Pool/GetPoolList', data)
    } else {

    }
  }
}
export default new cardAxios()
