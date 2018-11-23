import axios from 'axios'
import store from '@/store'
import {hex_md5} from './md5.js';
// axios.defaults.baseURL = 'http://crm.bex500.com/';  // 默认地址
// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {

    // 请求拦截
    instance.interceptors.request.use(config => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        if (config.data) {
            var test = config.data;
            test.sign = '';
            var signStr = '';
            for (var i in test) {
                if (test[i] && test[i] != '') {
                    signStr = signStr + '&' + i + '=' + test[i];
                }
            }
            signStr = signStr.substr(1);
            signStr = signStr + 'BEX5002018';
            test.sign = hex_md5(signStr);
            config.data = test;
        }
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      // addErrorLog(error.response)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
