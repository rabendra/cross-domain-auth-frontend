import axios from "axios";
// import { dispatch } from 'redux';
import { store } from '../index';
import {createUser } from "../auth/api"

import {
  SIGNUP_REQUEST
} from "./actionTypes"

export const requestLogin = () => ({
  type: SIGNUP_REQUEST,
})

export const createSignup = (user) => ({
  type: SIGNUP_REQUEST,
  user,
})
