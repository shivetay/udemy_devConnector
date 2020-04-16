import { connect } from 'react-redux';
import { setAlert } from '../../../redux/AlertReducer';

import Register from './Register.js';

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
