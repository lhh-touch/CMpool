// 简、繁转换封装
// lang->语言种类
// message->简体
// enMessage->繁体
import {
  StranText
} from '@/components/transitionLan/transition.js'
import Vue from 'vue'
var that = this
const $vue = new Vue()
that = $vue
class judege {
  judegeSuccessMess(lang, message, enMessage) {
    if (lang == "en") {
      that.$message.success(enMessage)
    } else if (lang == "ch") {
      that.$message.success(message)
    } else {
      that.$message.success(StranText(message, '繁'))
    }
  }
  judegeWarningMess(lang, message, enMessage) {
    if (lang == "en") {
      that.$message.warning(enMessage)
    } else if (lang == "ch") {
      that.$message.warning(message)
    } else if (lang == "tw") {
      that.$message.warning(StranText(message, '繁'))
    }
  }
  judegeErrorMess(lang, message, enMessage) {
    if (lang == "en") {
      that.$message.error(enMessage)
    } else if (lang == "ch") {
      that.$message.error(message)
    } else {
      that.$message.error(StranText(message, '繁'))
    }
  }
}
export default new judege()
