import axios from "axios";

const urlBase = "https://application-backend-production.up.railway.app/product";

const instance = axios.create({
    baseURL: urlBase,
    headers: {
        "Content-Type": "application/json",
    }
})

export default instance;