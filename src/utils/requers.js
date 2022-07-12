import axios from "axios";
import { Message } from "element-ui";
import { getItem } from "../utils/storage";
const instance = axios.create({
  baseURL: "http://zh.9yuecloud.com/api",
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    console.log(config);
    const token = getItem("token");
    // console.log("token===>", token);
    if (token) {
      config.headers.token = token;
    }
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const {
      data: { data, msg, code },
    } = response;
    console.log(response);

    if (code === 200) {
      return data;
    } else {
      return Message.error(msg);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
