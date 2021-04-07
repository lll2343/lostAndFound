import axios from 'axios'
import qs from 'qs'

// 设置路径，在后面发送请求时候使用，简写成URL
const baseUrl = '';
axios.defaults.baseURL = baseUrl;

//解决微信小程序直接调用axios报错的问题
axios.defaults.adapter = function(config) {
    return new Promise((resolve,reject)=>{
        let data = config.method == 'get' ? config.params : qs.stringify(config.data)
        // 微信小程序同时发起相应的请求
        wx.request({
            url: baseUrl+config.url,
            method:config.method,
            success: (res)=>{ return resolve(res)},
            fail: (err)=>{ return reject(err)}
        })
    })
}

// 封装axios请求函数
function HttpCall(url,params={},method='GET'){
    return axios({
        method,
        url,
        params
    })
}

// 封装axios.post请求
function HttpPost(url,data,method="POST"){
    return axios({
        method,
        url,
        data
    })
}

export default{
    HttpCall,
    HttpPost
}