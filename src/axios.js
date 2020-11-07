import axios from "axios"
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e5240/us-central1/api'
})
export default instance;