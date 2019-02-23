
import { base_url } from "./conf"
import axios from 'axios'
import querystring from 'querystring';
export default {
  //ajax请求
  async httpRequest(option = {}) {
    if (option.methods == 'GET' || option.methods == 'get') {
      return await axios.get(
        base_url + option.url, {
          params: option.data
        }
      )
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
        } else {
          return {
            returnStatus: false,
            msg: res.data.msg
          }
        }
      }).then(res => {
        return res
      })
    } else {
      console.log('method not allow!')
    }
  }

}
