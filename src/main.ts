import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegisterApp } from './global'
// import './service/axios_demo'
// import request1 from '@/service/index'
import 'normalize.css'
import './assets/css/index.css'
import { setupStore } from './store'

// request1.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// request1
//   .request<DataType>({
//     method: 'GET',
//     url: 'home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//   })
setupStore()

const app = createApp(App)

app.use(globalRegisterApp)

app.use(store).use(router).mount('#app')
