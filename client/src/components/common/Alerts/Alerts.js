import React from 'react';
import PropTypes from 'prop-types';

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array,
};

export default Alerts;
