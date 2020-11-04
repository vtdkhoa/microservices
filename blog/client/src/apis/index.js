import axios from 'axios'

export const postsApi = axios.create({
  baseURL: 'http://localhost:4000'
})

export const commentsApi = axios.create({
  baseURL: 'http://localhost:4001'
})

export const query = axios.create({
  baseURL: 'http://localhost:4002'
})