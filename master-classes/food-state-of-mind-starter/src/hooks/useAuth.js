import {useContext} from 'react';
import {AuthContext} from "../providers/AuthContextProvider";

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
  const {state, dispatch} = useContext(AuthContext);

  const login = ({email, password, name}) => {
    dispatch(signIn({email, password,name}));
  };

  const logout = () => {
    dispatch(signOut());
  };

  return {currentUser: state, login, logout }
}