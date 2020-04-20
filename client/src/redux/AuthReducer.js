import axios from 'axios';
import { setAlert } from './AlertReducer';
import { setAuthToken } from '../utils/utils';
import { clearProfileAction } from './ProfileReducer';

/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const REGISTER_SUCCESS = createActionName('REGISTER_SUCCESS');
export const REGISTER_FAIL = createActionName('REGISTER_FAIL');
export const USER_LOADED = createActionName('USER_LOADED');
export const AUTH_ERROR = createActionName('AUTH_ERROR');
export const LOGIN_SUCCESS = createActionName('LOGIN_SUCCESS');
export const LOGIN_FAIL = createActionName('LOGIN_FAIL');
export const LOGOUT = createActionName('LOGOUT');
export const CLEAR_PROFILE = createActionName('CLEAR_PROFILE');

/* action creators */

export const registerSuccesAction = (payload) => ({
  payload,
  type: REGISTER_SUCCESS,
});
export const registerFailAction = (payload) => ({
  payload,
  type: REGISTER_FAIL,
});
export const userLoadSuccess = (payload) => ({
  payload,
  type: USER_LOADED,
});
export const userAuthError = (payload) => ({
  payload,
  type: AUTH_ERROR,
});
export const loginSuccesAction = (payload) => ({
  payload,
  type: LOGIN_SUCCESS,
});
export const loginFailAction = (payload) => ({
  payload,
  type: LOGIN_FAIL,
});
export const logoutAction = (payload) => ({
  payload,
  type: LOGOUT,
});

/* actions THUNK */
//load user
export const loadUser = () => {
  return async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch(userLoadSuccess(res.data));
    } catch (err) {
      dispatch(userAuthError({ name: 'AUTH_ERROR' }));
    }
  };
};

//post user
export const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post('/api/users', body, config);

      dispatch(loginSuccesAction(res.data));
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch(loginFailAction({ name: 'LOGIN_FAIL' }));
    }
  };
};

//login user

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post('/api/auth', body, config);

      dispatch(registerSuccesAction(res.data));
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch(registerFailAction({ name: 'REGISTER_FAIL' }));
    }
  };
};

// logout & profile clear

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(clearProfileAction());
    dispatch(logoutAction({ name: 'LOGOUT' }));
  };
};

/* initial state */

const initialState = {
  //store token in localstorage
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // register
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
      };
    //user loading
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}
