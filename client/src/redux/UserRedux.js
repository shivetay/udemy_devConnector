import axios from 'axios';
import { setAlert } from './AlertReducer';

/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const USER_LOADED = createActionName('USER_LOADED');
export const AUTH_ERROR = createActionName('AUTH_ERROR');

/* action creators */

export const userLoadSuccess = (payload) => ({
  payload,
  type: USER_LOADED,
});
export const userAuthError = (payload) => ({
  payload,
  type: AUTH_ERROR,
});

/* actions THUNK */

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

const initialState = {};

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
      };
    default:
      return state;
  }
}
