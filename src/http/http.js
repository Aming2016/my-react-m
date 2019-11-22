import axios from 'axios'
const instance = axios.create({
  baseURL: '/',
  withCredentials: true // 跨域类型时是否在请求中协带cookie
})
const getNewHeaders = () =>{
  return {
    'token': window.localStorage.getItem('token')
  }
}
export default class HttpUtil {
  static get (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.success){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
