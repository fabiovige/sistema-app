import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': 'Bearer 5|zhQjpxuRiYXmiUCLMjmXgZtKjdRQ92VWagwUQdRy',
  },
})

export default axiosInstance
