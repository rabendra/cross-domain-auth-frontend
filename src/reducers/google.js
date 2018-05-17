import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
} from "../actions/actionTypes"

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GOOGLE_LOGIN_SUCCESS:
      console.log(action.user.accessToken)
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