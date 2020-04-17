import { connect } from 'react-redux';
import { setAlert } from '../../../redux/AlertReducer';
import { registerUser } from '../../../redux/AuthReducer';

import Register from './Register.js';

const mapStateToProps = (state) => ({
  alerts: state.alerts,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
  regUser: (name, email, password) =>
    dispatch(registerUser(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
