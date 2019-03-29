import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";

const initialState = {
  name: null,
  email: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      let user = action.payload
      return {
        ...state,
        name: user.name,
        email: user.email
      }
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null
      }
    default:
      return state
  }
}

export default userReducer;
