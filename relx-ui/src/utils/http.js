import axios from 'axios'
import { ElMessage } from 'element-plus'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// axios中请求配置有baseURL选项，表示请求URL公共部分
axios.defaults.baseURL = process.env.VUE_APP_RESTFUL_URL

// 超时
axios.defaults.timeout = 5000

// 添加请求拦截器。在发送请求之前做些什么
axios.interceptors.request.use(
    config => {
        //config.headers['Content-Type'] = "application/json;charset=utf-8";
        //config.baseURL = process.env.VUE_APP_RESTFUL_URL;
        return config;
    },
    error => {
        // 对请求错误做些什么
        console.log(error)
        return Promise.error(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response;
    },
    error => {
        // 对响应错误做点什么
        console.log(error)
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    ElMessage.error({ message: error.response.status + " Bad Request", duration: 10000, showClose: true })
                    break;
                case 401:
                    ElMessage.error({ message: error.response.status + " Unauthorized", duration: 10000, showClose: true })
                    break;
                case 403:
                    ElMessage.error({ message: error.response.status + " Forbidden", duration: 10000, showClose: true })
                    break;
                case 404:
                    ElMessage.error({ message: error.response.status + " Not Found", duration: 10000, showClose: true })
                    break;
                case 405:
                    ElMessage.error({ message: error.response.status + " Method Not Allowed", duration: 10000, showClose: true })
                    break;
                case 406:
                    ElMessage.error({ message: error.response.status + " Not Acceptable", duration: 10000, showClose: true })
                    break;
                case 408:
                    ElMessage.error({ message: error.response.status + " Request Timeout", duration: 10000, showClose: true })
                    break;
                case 500:
                    ElMessage.error({ message: error.response.status + " Internal Server Error", showClose: true })
                    break;
                default:
                    ElMessage.error({ message: error.response.status + ": " + JSON.stringify(error.response.data), showClose: true })
                    break;
            }
        }
        return Promise.reject(error);
    }
)

export default {
    /**
     * get 请求方法
     * @param {String} url 
     * @param {Object} params 
     */
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params
                })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    /**
     * post 请求方法
     * @param {String} url 
     * @param {Object} data 
     */
    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(
                response => {
                    resolve(response.data)
                },
                error => {
                    reject(error)
                }
            )
        })
    },

    /**
     * patch 方法封装
     * @param {String} url 
     * @param {Object} data 
     */
    patch(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.patch(url, data).then(
                response => {
                    resolve(response.data)
                },
                error => {
                    reject(error)
                }
            )
        })
    },

    /**
     * put 方法封装
     * @param {String} url 
     * @param {Object} data 
     */
    put(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.put(url, data).then(
                response => {
                    resolve(response.data)
                },
                error => {
                    reject(error)
                }
            )
        })
    },

    /**
     * delete 请求方法
     * @param {String} url 
     * @param {Object} params 
     */
    delete(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, {
                    params: params
                })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}






