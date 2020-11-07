import axios from "axios"
const instance = axios.create({
    baseURL: 'https://us-central1-clone-e5240.cloudfunctions.net/api'
    //baseURL: 'https://localhost:5001/clone-e5240/us-central1/api'
})
export default instance;