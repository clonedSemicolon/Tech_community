import axios from 'axios'

const instance=axios.create({
    baseURL='https://techcommunityiict.herokuapp.com'
})

export default instance

axios.get('/upload/image')