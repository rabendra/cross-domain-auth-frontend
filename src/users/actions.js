export const types = {
  LIST_REQUEST:      'User/list/request',
  LIST_SUCCESS:      'User/list/success',
  LIST_FAILURE:      'User/list/failure',
}

export const fetchUserList = () => (
  { type: types.LIST_REQUEST }
)

export const receiveUsers = (data) => (
  { type: types.LIST_SUCCESS, data }
)

export const receiveUsersError = (error) => (
  { type: types.LIST_FAILURE, error }
)

