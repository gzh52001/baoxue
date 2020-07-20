//使用axios进行异步操作
import axios from "axios"
import {message} from "antd"
message.config({
    top: 200
})
const service = axios.create({
    proxy:{
        "/api":{
          target:"http://m.bmall.163.com",
          changeOrigin:true,
          pathRewrite:{
            "^/api":""
          }
        }
      }
})

//axios的拦截器
//请求之前的拦截
//我们可以在发送请求之前，可以在请求头上面携带一些信息例如token，将其转送给后端，进行token验证操作。
service.interceptors.request.use(config=>{
    // console.log("request-config",config)
    //后续authToken值肯定需要从本地存储取出来，然后再去发给后端
    config.data = {...config.data,authToken:"adjlsajdlaoeuasd"}
    return config
})




//响应之后的拦截
service.interceptors.response.use(res=>{
    console.log("response-res",res)
    if(res.data.code === 200){
        return res.data.data
    }else{
        message.error(res.data.errMsg)
    }
})



//请求列表数据
export const getList = ()=>{
    return service.get("/api/webShop/category/itemList?1595039076879")
}

