import axios from 'axios'

const baseURL = process.env.BASE_URL

const service = axios.create({
  baseURL: baseURL,
  timeout: 60000
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    if (response.headers['content-type'] == 'application/json') {
      const {
        res: { code, data }
      } = response.data
      if (code !== '0') {
        return Promise.reject(new Error(res.msg || 'Error'))
      } else {
        return data
      }
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
