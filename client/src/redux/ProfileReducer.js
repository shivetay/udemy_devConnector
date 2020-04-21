import axios from 'axios';
// import { setAlert } from './AlertReducer';
// import { setAuthToken } from '../utils/utils';

/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const GET_PROFILE = createActionName('GET_PROFILE');
export const ERROR_PROFILE = createActionName('ERROR_PROFILE');
export const CLEAR_PROFILE = createActionName('CLEAR_PROFILE');

/* action creators */

export const getProfileAction = (payload) => ({
  payload,
  type: GET_PROFILE,
});
export const getProfileError = (payload) => ({
  payload,
  type: ERROR_PROFILE,
});
export const clearProfileAction = (payload) => ({
  payload,
  type: CLEAR_PROFILE,
});
/* actions THUNK */

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/profile/me');

      dispatch(getProfileAction(res.data));
    } catch (err) {
      dispatch(
        getProfileError({
          msg: err.response.statusText,
          status: err.response.status,
        })
      );
    }
  };
};

/* initial state */

const initialState = {
  profile: null,
  profiles: [], //list of profiles
  repos: [],
  loading: true,
  error: {},
};

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // register
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case ERROR_PROFILE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
}
