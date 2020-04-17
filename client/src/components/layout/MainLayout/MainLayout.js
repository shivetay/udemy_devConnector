import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/HeaderContainer';

import '../../../styles/global.scss';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
