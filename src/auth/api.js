import axios from 'axios'
import config from '../config.js'
import apiMock from './api.mock'

const { authApiUrl } = config

if (config.mockApis) {
  console.log('Api mock enabled for auth')
  apiMock()
}

export const createUser = ({user }) =>
  axios
    .post(`http://localhost:3001/registrations`, { user })
    .then(({ data }) => data)

export const requestAuth = ({ provider, oauthAccessToken, user }) =>
  axios
    .post(`${authApiUrl}/registrations/${provider}`, { oauthAccessToken, user })
    .then(({ data }) => data)

export const loginUser = ({user }) =>
  axios
    .post(`http://localhost:3001/sessions`, { user })
    .then(({ data }) => data)


