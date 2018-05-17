import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../../actions/actionTypes"

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
}

// export default function auth (state = initialState, action) {
//   debugger
//   switch (action.type) {
//     case GOOGLE_LOGIN_REQUEST:
//       return {
//         ...state,
//         isFetching: true,
//       }
//     case SIGNUP_SUCCESS:
//       console.log(action.user.accessToken)
//       return {
//         ...state,
//         isFetching: false,
//         user: action.user,
//         isAuthenticated: !!action.user.accessToken,
//       }
//     default:
//       return state
//   }
// }

export default (state = initState, action = {}) => {
  switch (action.type) {
    // case CREATE_SIGNUP_ERROR:
    //   return {
    //     ...state,
    //     loading: true,
    //     kind: 0,
    //     id: action.payload && action.payload.id,
    //   }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        calendars: [...state.posts, action.payload.post],
      }

    default:
      return state
  }
}