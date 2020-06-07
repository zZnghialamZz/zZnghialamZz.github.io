import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  return null;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
