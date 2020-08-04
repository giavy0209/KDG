import axios from 'axios'
const API_DOMAIN = "http://171.244.18.130:6000"
const calAPI = axios.create({
    baseURL: API_DOMAIN,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default calAPI