import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../../redux/ProfileReducer';

import Dashboard from './Dashboard.js';

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: () => dispatch(fetchCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
