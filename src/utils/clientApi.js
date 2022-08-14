import axios from "axios";
import {API_URL, LANG, apiKey} from "../config";

const sleep = t => new Promise(resolve => setTimeout(resolve, t))

const clientApi = async endpoint => {
    const page = 1;
    const startChar = endpoint.includes('?') ? '&' : '?'
    await sleep(2000)
    const keyLang = `${startChar}api_key=${apiKey}&language=${LANG}&page=${page}`
    return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}

export { clientApi }
