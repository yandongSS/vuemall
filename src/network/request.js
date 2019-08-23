import axios from 'axios'
export function request(config){
const instance=axios.create({
    baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:70000
})
instance.interceptors.request.use(config=>{
    return config
},err=>{

})
//响应拦截
instance.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.log(err)
})
return instance(config)
}