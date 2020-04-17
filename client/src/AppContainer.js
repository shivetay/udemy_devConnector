import { connect } from 'react-redux';
import { loadUser } from '../../../redux/AuthReducer';

import App from './Register.js';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserProfile: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
