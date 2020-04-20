import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute.js';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
