import axios from "axios"

const instance = axios.create({
  baseURL: "https://service-provision.onrender.com/api",
})

export default instance
