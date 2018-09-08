import axios from 'axios'
// import store from '@/store'
// import { Message, Notification } from 'element-ui'
const msg = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '网络请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

function errHandle ({ message, response }) {
  let ret = {
    errMsg: message,
    message: '请求出了一点错误，请稍候重试'
  }
  if (response) {
    let { status } = response
    Object.assign(ret, {
      status,
      message: msg[status] || message
    })
  }
  return ret
}

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = Object.assign(config.data || {}, {
      // _token: window.token
      // _token: 'tokenValue'
    })
  }
  // config.method = 'post'
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers['Set-Cookie'] = 'hidden=value; httpOnly'
  config.headers['X-CSRF-TOKEN'] =  window.TOKEN
  return config
})

axios.interceptors.response.use(function (response) {
  if (response.data.code === 900) {
    // Message({
    //   type: 'warning',
    //   message: '验证失效，请重新登录！',
    //   duration: 1000,
    //   onClose: function () {
    //     // 此处弹出登录框
    //     // store.commit('showLogin', true)
    //   }
    // })
  }
  if (response.data.success === false) {
    let { results } = response.data
    if (results) {
      // typeof results === 'string' && Notification({
      //   message: results,
      //   type: 'error'
      // })
      // return Promise.reject(results)
    }
  }
  return response
}, function (error) {
  let { message, errMsg } = errHandle(error)
  // Message({
  //   message,
  //   type: 'error'
  // })
  error.message = errMsg || message
  return Promise.reject(error)
})

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/mock'
}

axios.defaults.withCredentials = true

axios.install = (Vue) => {
  Vue.prototype.$http = axios
}

export default axios
