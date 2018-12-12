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
        url: 'index/Account/packageLang',
        method: 'post',
        data,
    })
}
export const setLan = (type, content) => {
    const data = {
        type,
        content
    }
    return axios.request({
        url: 'index/Account/packageLang',
        method: 'post',
        data,
    })
}

export const getArticle = (type) => {
    const data = {
        type
    }
    return axios.request({
        url: 'index/Account/getArticle',
        method: 'post',
        data,
    })
}
export const storeArticle = (data) => {
    return axios.request({
        url: 'index/Account/storeArticle',
        method: 'post',
        data,
    })
}