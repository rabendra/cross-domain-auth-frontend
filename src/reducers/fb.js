import {
  FB_LOGIN_REQUEST,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_ERROR,
} from "../actions/actionTypes"

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case FB_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FB_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        isAuthenticated: !!action.user.accessToken,
      }
    default:
      return state
  }
}