import { connect } from 'react-redux';
import { setAlert } from '../../../redux/AlertReducer';
import { registerUser } from '../../../redux/AuthReducer';

import Register from './Register.js';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
  regUser: (name, email, password) =>
    dispatch(registerUser(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
