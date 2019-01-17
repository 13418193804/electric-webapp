
import {base_url}  from "./conf"
import axios from 'axios'
export default {
    //ajax请求
    async httpRequest(option = {}) {
        if (option.methods == 'GET' || option.methods == 'get') {
          return await axios.get(
            base_url+  option.url, {
              params: option.data
            }
          )
        } else if (option.methods == 'POST' || option.methods == 'post') {
          return await axios.post(
            base_url+  option.url, option.data,{
              headers: option.headers ||  {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            }
          )
        } else {
          console.log('method not allow!')
        }
    }
}