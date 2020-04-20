import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  static propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
  }
  render() {
    const { auth, profile } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
