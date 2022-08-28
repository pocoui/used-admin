import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'

axios
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res: AxiosResponse) => {
    console.log(res)
  })

// 模拟get请求
axios
  .get('/get', {
    params: {
      name: 'poco',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

//模拟post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      color: 'bbbb'
    }
  })
  .then((res) => {
    console.log(res)
  })

//拦截器 fn1成功 fn2失败
axios.interceptors.request.use(
  (config) => {
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

//fn1 数据成功响应
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功拦截')
    return res.data
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
