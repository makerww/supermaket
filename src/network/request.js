import axios from 'axios';

export function request(config) {

    const instance = axios.create({

        baseURL: "http://123.207.32.32:8000",
        timeout: 500

    })

    // 请求前拦截
    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    })
    // 响应后拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    }
    )

    return instance(config)
}