import {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../redux/actions/auth';

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
      dispatch(authActions.login({email, password,name}));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return {currentUser, login, logout}
}

