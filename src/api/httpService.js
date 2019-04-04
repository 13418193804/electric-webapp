
import { base_url, getBaseUrl } from "./conf"
import axios from 'axios'
import querystring from 'querystring';
import Vue from 'vue';
axios.defaults.timeout = 6000;
const requestGet = (option = {}) => {
  return axios.get(
    getBaseUrl() + option.url, {
      params: option.data
    }
  ).then(res => {
    if (res.data.status === '00') {
      return {
        returnStatus: true,
        data: res.data
      }
    } else if (res.data.status === '08' || res.data.status === '02') {
      if (Vue.prototype.mqttClient) {
        Vue.prototype.mqttClient.end()
      }
      window.myvue.$toast.info(res.data.msg)
      window.myvue.$router.replace('/login')
      localStorage.removeItem("packageToken");
    } else {
      return {
        returnStatus: false,
        msg: res.data.msg
      }
    }
  }).then(res => {
    return res
  }).catch((e) => {
    if ((e['response'] || '') === '') {
      return {
        returnStatus: false,
        msg: "网络中断或服务器配置错误"
      }
    }
    if (e['response'].status == 404) {
      return {
        returnStatus: false,
        msg: "服务器配置错误"
      }
    }
  })
}

const requestPost = (option = {}) => {
  return axios.post(
    getBaseUrl() + option.url, querystring.stringify(option.data), {
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
    } else if (res.data.status === '08' || res.data.status === '02') {
      if (Vue.prototype.mqttClient) {
        Vue.prototype.mqttClient.end()
      }
      window.myvue.$toast.info(res.data.msg)
      window.myvue.$router.replace('/login')
      localStorage.removeItem("packageToken");
    } else {
      return {
        returnStatus: false,
        msg: res.data.msg
      }
    }
  }).then(res => {
    return res
  }).catch((e) => {
    if ((e['response'] || '') === '') {
      return {
        returnStatus: false,
        msg: "网络中断或服务器配置错误"
      }
    }
    if (e['response'].status == 404) {
      return {
        returnStatus: false,
        msg: "服务器配置错误"
      }
    }
  })
}

const requestUpload = (option = {}) => {
  return axios.post(
    getBaseUrl() + option.url, option.form, {
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      if (res.data.status === '00') {
        return {
          returnStatus: true,
          data: res.data
        }
      } else if (res.data.status === '08' || res.data.status === '02') {
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
    }).catch((e) => {
      if ((e['response'] || '') === '') {
        return {
          returnStatus: false,
          msg: "网络中断或服务器配置错误"
        }
      }
      if (e['response'].status == 404) {
        return {
          returnStatus: false,
          msg: "服务器配置错误"
        }
      }
    })
}
const methodEnum = {
  'GET': requestGet,
  'get': requestGet,
  'POST': requestPost,
  'post': requestPost,
  'upload': requestUpload,
}
export default {
  //ajax请求
  async httpRequest(option = {}) {
    return await methodEnum[option.methods](option)
  }
}
