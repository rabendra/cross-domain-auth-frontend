import axios from "axios";
// import { dispatch } from 'redux';
import { store } from '../index';

import {
  SIGNIN_REQUEST
} from "./actionTypes"

// export const requestLogin = () => ({
//   type: SIGNIN_REQUEST,
// })

export const createSignin = (user) => ({
  type: SIGNIN_REQUEST,
  user,
})
