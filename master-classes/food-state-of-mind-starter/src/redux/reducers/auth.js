import {LOGIN, LOGOUT} from "../../hooks/useAuth";

export function authReducer(state = null, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return payload;

    case LOGOUT:
      return null;

    default:
      return state;
  }
}