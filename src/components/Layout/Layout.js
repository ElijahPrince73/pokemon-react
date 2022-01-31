import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Filter from '../Filters/Filter';

function Layout({ children, hideFilters = false }) {
  return (
    <>
      <Header />
      {!hideFilters && <Filter />}
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  hideFilters: PropTypes.bool
};

export default Layout;
