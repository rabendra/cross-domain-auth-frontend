import axios from 'axios'
import config from '../config.js'
import apiMock from './api.mock'

const { apiUrl } = config

if (config.mockApis) {
  console.log('Api mock enabled for TodoList')
  apiMock()
}

export const fetchUsers = () =>
  axios
    .get(`${apiUrl}/users`)
    .then(({ data }) => data)
