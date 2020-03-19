'use strict'
import axios from './api'
import ls from '../utils/localStorage' // 倒入 api
import { Toast } from 'mint-ui'
import router from '@/router'
import store from '../store/index'
import qs from 'qs' // 序列化请求数据，视服务端的要求

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 *
 */

// 单独倒出
export const verificationCodes = data => {
  return axios({
    url: 'verificationCodes',
    method: 'POST',
    data: data

  })
}
export const getCaptcha = () => {
  return axios({
    url: 'getCaptcha',
    method: 'POST'
  })
}
export const register = data => {
  return axios({
    url: 'auth/register',
    method: 'POST',
    data: data
  })
}
export const login = data => {
  return axios({
    url: 'auth/login',
    method: 'POST',
    data: data
  })
}
export const loginViaCode = data => {
  return axios({
    url: 'auth/loginViaCode',
    method: 'POST',
    data: data
  })
}
export const logout = () => {
  return axios({
    url: 'auth/logout',
    method: 'delete'
  })
}
export const userMe = () => {
  return axios({
    url: 'user/me',
    method: 'post',
    data: {
      mustAuth: true
    }
  })
}
export const userUpdate = data => {
  return axios({
    url: 'user/update',
    method: 'put',
    data: data
  })
}
export const userPasswordReset = data => {
  return axios({
    url: 'user/passwordReset',
    method: 'put',
    data: data
  })
}

export const products = (params) => {
  return axios({
    url: 'products',
    method: 'get',
    params: params
  })
}
export const product = (id, params) => {
  return axios({
    url: 'products/' + id,
    method: 'get',
    params: params
  })
}

export const productCategories = (params) => {
  return axios({
    url: 'product_categories',
    method: 'get',
    params: params
  })
}
export const productCategoryTree = (params) => {
  return axios({
    url: 'product_category_trees',
    method: 'get',
    params: params
  })
}
export const productCategory = (id, params) => {
  return axios({
    url: 'product_categories/' + id,
    method: 'get',
    params: params
  })
}

const refreshToken = async(data) => {
  // 请求刷新接口
  return await axios({
    url: 'auth/refreshToken',
    method: 'PUT',
    data: data
  })
}
const storeMsg = async(data) => {
  // 请求刷新接口
  return await axios({
    url: 'messages',
    method: 'POST',
    data: data
  })
}
export const articles = (params) => {
  return axios({
    url: 'articles',
    method: 'get',
    params: params
  })
}
export const article = (id, params) => {
  return axios({
    url: 'articles/' + id,
    method: 'get',
    params: params
  })
}
// 获取 Token
const getToken = async() => {
  // 从缓存中取出 Token
  let token = ls.getItem('token')

  const expiredAt = token ? token.token_expired_at : 0

  // 如果 token 过期了，则调用刷新方法
  if (token && new Date().getTime() > expiredAt && expiredAt !== 0) {
    try {
      const refreshResponse = await refreshToken({
        intercept: false,
        token: token.token
      })
      // 刷新成功
      if (refreshResponse.status === 200) {
        token = refreshResponse
      }
    } catch (e) {
      // 刷新失败了，强制清空登陆信息和token，提示并且跳转到登陆页面
      await store.dispatch('logout')
      Toast('错误: 登陆过期，请重新登陆')
      router.replace('/auth/loginViaCode')
    }
  }

  return token
}

// 默认全部导出
// 根据需要进行
export default {
  verificationCodes,
  getCaptcha,
  register,
  login,
  loginViaCode,
  logout,
  userMe,
  userUpdate,
  userPasswordReset,
  getToken,
  products,
  product,
  productCategory,
  productCategories,
  productCategoryTree,
  article,
  articles,
  storeMsg
}

