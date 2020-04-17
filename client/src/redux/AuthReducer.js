import axios from 'axios';
import { setAlert } from './AlertReducer';
import { setAuthToken } from '../utils/utils';

/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const REGISTER_SUCCESS = createActionName('REGISTER_SUCCESS');
export const REGISTER_FAIL = createActionName('REGISTER_FAIL');
export const USER_LOADED = createActionName('USER_LOADED');
export const AUTH_ERROR = createActionName('AUTH_ERROR');

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
      const res = await axios.post(
        '/api/users',
        //http://localhost:8000/api/users
        body,
        config
      );

      dispatch(registerSuccesAction(res.data));
    } catch (err) {
      const errors = err.response.data.errors;
      // console.log(err.response.request._response);

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch(registerFailAction({ name: 'REGISTER_FAIL' }));
    }
  };
};

/* initial state */

const initialState = {
  //store toke in localstorage
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
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
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
