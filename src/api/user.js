import axios from '@/libs/api.request'

export const login = ({userName, password}) => {
    const data = {
        userName,
        password
    }
    return axios.request({
        url: 'login',
        data,
        method: 'post'
    })
}

export const getUserInfo = (token) => {
    return axios.request({
        url: 'get_info',
        params: {
            token
        },
        method: 'get'
    })
}

export const logout = (token) => {
    return axios.request({
        url: 'logout',
        method: 'post'
    })
}

export const getLan = (type) => {
    const data = {
        type
    }
    return axios.request({
        url: 'http://crm.bex500.com/index/Account/packageLang',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
export const setLan = (type, content) => {
    const data = {
        type,
        content
    }
    return axios.request({
        url: 'http://crm.bex500.com/index/Account/packageLang',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
