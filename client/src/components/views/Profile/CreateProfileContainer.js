import { connect } from 'react-redux';
import { createUserProfile } from '../../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';

import CreateProfile from './CreateProfile.js';

// const mapStateToProps = (state) => ({
//   profile: state.profile,
//   auth: state.auth,
// });

const mapDispatchToProps = (dispatch) => ({
  createProfile: (formData, history) =>
    dispatch(createUserProfile(formData, history)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(CreateProfile));
