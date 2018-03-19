import {
  mailReg,
  pwdReg,
  telReg
} from "@/regular/regular";
import Vue from 'vue'
const $vue = new Vue()
var that = $vue
class verfy {
  mailVerfy(dom, parm,_$t) {
    if (mailReg.test(parm)) {
      dom.style.backgroundColor = "";
    } else {
      dom.style.backgroundColor = "#FFC0CB";
      that.$message.error(_$t);
    }
  }
  telVerfy(dom, parm,_$t) {
    if (telReg.test(parm)) {
      dom.style.backgroundColor = "";
    } else {
      dom.style.backgroundColor = "#FFC0CB";
      that.$message.error(_$t);
    }
  }
  pwdVerfy(dom, parm,_$t) {
    if (pwdReg.test(parm)) {
      dom.style.backgroundColor = "";
    } else {
      dom.style.backgroundColor = "#FFC0CB";
      that.$message.error(_$t);
    }
  }
}
export default new verfy()
