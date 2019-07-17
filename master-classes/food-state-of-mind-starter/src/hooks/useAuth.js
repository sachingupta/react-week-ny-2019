import {useDispatch, useSelector} from "react-redux";

export const LOGIN = '[AUTH] LOGIN';
export const LOGOUT = '[AUTH] LOGOUT';

export function signIn ({ email, password, name }) {
  return {
    type: LOGIN,
    payload: {email, password, name}
  }
}

export function signOut() {
  return {
    type: LOGOUT,
  }
}

/*
 I don't want to know in my componnets that I am using redux 
 so creating this selector will decouple it.
*/
export function useAuth() {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const login = ({email, password, name}) => {
      dispatch(signIn({email, password,name}));
  };

  const logout = () => {
    dispatch(signOut());
  };

  return {currentUser, login, logout}
}

