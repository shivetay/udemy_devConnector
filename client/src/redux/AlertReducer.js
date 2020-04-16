/* action name creator */
const reducerName = 'alerts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

export const SET_ALERT = createActionName('SET_ALERT');
export const REMOVE_ALERT = createActionName('REMOVE_ALERT');

/* action creators */

export const setAlertAction = (payload) => ({ payload, type: SET_ALERT });
export const removeAlertAction = (payload) => ({ payload, type: REMOVE_ALERT });

/* THUNK */

/* initial state */
const initialState = [];

/* reducer */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
