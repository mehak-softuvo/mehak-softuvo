import {
    apiGetMethod,
    apiPostMethod,
    apiPatchMethod,
    apiDeleteMethod,
    apiPutMethod,
} from './api';
import {
    apiBaseUrl
} from './api/apiBaseUrl';

const {
    ADMIN_USER
} = apiBaseUrl;

export const getAdminUserList = () => {
    return new Promise((resolve, reject) => {
        apiGetMethod(ADMIN_USER)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export const deleteuser = (data) => {
    return new Promise((resolve, reject) => {
        apiDeleteMethod(`${ADMIN_USER}/${data.id}`).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

