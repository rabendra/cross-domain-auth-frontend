import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
} from "./actionTypes"

export const requestLogin = () => ({
  type: GOOGLE_LOGIN_REQUEST,
})

export const receiveLogin = (user) => ({
  type: GOOGLE_LOGIN_SUCCESS,
  user,
})