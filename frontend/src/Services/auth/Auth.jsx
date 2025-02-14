import axios from "axios"; 
import * as Config from "../../../Utils/Config";

 
export async function login(data , token) {
    try {
        const res = await axios.post(`${Config.base_url}login`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}
