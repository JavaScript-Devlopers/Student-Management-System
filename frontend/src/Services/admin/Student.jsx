import axios from "axios"; 
import * as Config from "../../../Utils/Config";

 
export async function AddStudent(data , token) {
    try {
        const res = await axios.post(`${Config.base_url}addStudent`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function getAllSubject(data , token) {
    try {
        const res = await axios.get(`${Config.base_url}getAllSubject`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function getAllStudent(data , token) {
    try {
        const res = await axios.post(`${Config.base_url}getAllStudent`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function getAllClass(data , token) {
    try {
        const res = await axios.get(`${Config.base_url}getAllclass`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

export async function UpdateStudent(data , token) {
    try {
        const res = await axios.post(`${Config.base_url}updateStudent`, data, {
            data: {},
        })
        return await res?.data;
    }
    catch (err) {
        return await err;

    }

}

