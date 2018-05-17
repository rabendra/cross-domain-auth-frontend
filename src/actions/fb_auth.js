import axios from "axios"
import { dispatch } from 'redux';
import { store } from '../index';

import {
  FB_LOGIN_REQUEST,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_ERROR,
} from "./actionTypes"

export const requestLogin = () => ({
  type: FB_LOGIN_REQUEST,
})

export const receiveLogin = (user) => ({
  type: FB_LOGIN_SUCCESS,
  user,
})