import { connect } from 'react-redux';
import { loginUser } from '../../../redux/AuthReducer';

import Login from './Login.js';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logUser: (name, email, password) =>
    dispatch(loginUser(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
