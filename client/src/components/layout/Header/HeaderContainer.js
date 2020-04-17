import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/AuthReducer';

import Header from './Header.js';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
