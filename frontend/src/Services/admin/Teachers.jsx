import axios from "axios";
import * as Config from "../../../Utils/Config";


export async function AddTeachersdata(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}addTeachers`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}


export async function getAllTeacherdata(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}getAllteacher`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}






