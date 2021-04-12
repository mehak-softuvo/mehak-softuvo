import axios from "axios";

export const header={};

export const apiDeleteMethod = (url, headers) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}${url}`, { headers }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}

export const apiMultiDeleteMethod = (url,headers,data) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${'http://localhost:3333'}${url}`,{ headers,data }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}
export const apiGetMethod = (url, headers) => {
    return new Promise((resolve, reject) => {
        axios.get(`${'http://localhost:3333'}${url}`, { headers }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}

export const apiPatchMethod = (url, data, headers) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${process.env.REACT_APP_BASE_URL}${url}`, data, { headers }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}

export const apiPutMethod = (url, data, headers) => {
    return new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BASE_URL}${url}`, data, { headers }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}

export const apiPostMethod = (url, data, headers) => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, data, { headers }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response);
        })
    })
}
