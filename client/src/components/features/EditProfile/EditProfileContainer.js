import { connect } from 'react-redux';
import {
  createUserProfile,
  fetchCurrentUser,
} from '../../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';

import EditProfile from './EditProfile.js';

const mapStateToProps = (state) => ({
  profile: state.profile,
  // auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (formData, history) =>
    dispatch(createUserProfile(formData, history)),
  getCurrentProfileData: () => dispatch(fetchCurrentUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));
