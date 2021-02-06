import axios from 'axios'

const instance=axios.create({
    baseURL: 'http://localhost:3001'
})

export default instance

axios.get('http://localhost:3002/upload/image')