import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { userState, userEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@config';
import { Theme, Mixins, Media, Section } from '@styles';

const { colors, fontSizes, fonts, navDelay, loaderDelay } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${Media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

const Intro = ({ data }) => {
    return null;
};

Intro.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Intro;