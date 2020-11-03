import axios from 'axios'

export const postsApi = axios.create({
  baseURL: 'http://localhost:4002'
})

export const commentsApi = axios.create({
  baseURL: 'http://localhost:4001'
})