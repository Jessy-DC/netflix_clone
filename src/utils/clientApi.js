import axios from "axios";
import {API_URL, LANG, apiKey} from "../config";

const clientApi = endpoint => {
    const page = 1;
    const startChar = endpoint.includes('?') ? '&' : '?'
    const keyLang = `${startChar}api_key=${apiKey}&language=${LANG}&page=${page}`
    return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}

export { clientApi }
