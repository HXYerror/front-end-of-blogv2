import axios from "../request"

//用户注册接口
export const registerApi = 
(name,phone,pwd)=>axios.post("/api/v1/pri/user/register",{
    "name":name,
    "phone":phone,
    "pwd":pwd
})


//登录接口
export const loginApi =
(userPhone,userPwd)=>axios.post("/api/v1/pri/user/login",{
    userPhone,
    userPwd
})

//轮播图接口
export const getBanner = ()=>axios.get("/api/v1/pub/banner/list")


//文章列表接口
export const getArticleList = () => axios.get("/api/v1/pub/article/list")

//获取文章细节
export const getArticleDetail =(article_id)=> axios.get("/api/v1/pub/article/detail",{
    params:{
        article_id : article_id
        //todo 不写双引号可以吗？？？
    }
})

//保存订单
export const saveOrder = (token,article_id)=> axios.post("/api/v1/pri/order/save",{
    article_id
},{
    headers:{
        "token":token
    }
})

//获取订单列表
export const getOrderList = (token)=> axios.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
})

//获取用户信息
export const getUserInfo = (token)=> axios.get("/api/v1/pri/user/find_by_token",{
    headers:{
        token
    }
})

