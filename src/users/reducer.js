import { flow, set, merge, unset, keyBy } from 'lodash/fp'
import { types } from './actions'
import * as h from './helpers'

export const initialState = {
  loading: false,
  data: {},
  NewItem: {
    name: '',
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_REQUEST:
      return set('loading', true)(state)
    case types.LIST_SUCCESS:
      return { ...state,
              isFetching: false,
              users: action.data,}
    default:
      return state
  }
}
