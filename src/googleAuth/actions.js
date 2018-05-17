export const types = {
  LOGIN_REQUEST:    'googleAuth/login/request',
  LOGIN_SUCCESS:    'googleAuth/login/success',
}

export const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
})

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
})
