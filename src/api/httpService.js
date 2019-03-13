
import { base_url } from "./conf"
import axios from 'axios'
import querystring from 'querystring';

export default {
  //ajax请求
  async httpRequest(option = {}) {
// base_url
    if (option.methods == 'GET' || option.methods == 'get') {
      return await axios.get(
        base_url + option.url, {
          params: option.data
        }
      ).then(res => {
        if (res.data.status === '00') {
          return {
            returnStatus: true,
            data: res.data
          }
        } else if(res.data.status === '08'|| res.data.status === '02'){
          window.myvue.$toast.info(res.data.msg)
          window.myvue.$router.replace('/login')
          localStorage.removeItem("packageToken");
        }else{
          return {
            returnStatus: false,
            msg: res.data.msg
          }
        }
      }).then(res => {
        return res
      }).catch((e)=>{
        console.log(e)
        return {
          returnStatus: false,
          msg: "网络中断，请稍后重试"
        }
      })
    } else if (option.methods == 'POST' || option.methods == 'post') {
      return await axios.post(
        base_url + option.url, querystring.stringify(option.data), {
          headers: option.headers || {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then(res => {
        if (res.data.status === '00') {
          return {
            returnStatus: true,
            data: res.data
          }
        }else if(res.data.status === '08'|| res.data.status === '02'){
          window.myvue.$toast.info(res.data.msg)
          window.myvue.$router.replace('/login')
        } else {
          return {
            returnStatus: false,
            msg: res.data.msg
          }
        }
      }).then(res => {
        return res
      }).catch((e)=>{
        if(e['response'].status == 404){
          return {
            returnStatus: false,
            msg: "服务器地址错误请先配置"
          }
        }
        return {
          returnStatus: false,
          msg: "网络中断，请稍后重试"
        }
      })
    } else if(option.methods == 'upload' ){
      return await axios.post(
        base_url + option.url,option.form,{
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          if (res.data.status === '00') {
            return {
              returnStatus: true,
              data: res.data
            }
          }else if(res.data.status === '08'|| res.data.status === '02'){
            window.myvue.$toast.info(res.data.msg)
            window.myvue.$router.replace('/login')
          } else {
            return {
              returnStatus: false,
              msg: res.data.msg
            }
          }
        }).then(res => {
          return res
        }).catch((e)=>{
          console.log(e)
          return {
            returnStatus: false,
            msg: "网络中断，请稍后重试"
          }
        })
    }else {
      console.log('method not allow!')
    }
  }

}
