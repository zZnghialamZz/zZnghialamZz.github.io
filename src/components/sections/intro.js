import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
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

const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.JetBrainsMono};
  font-weight: normal;
  ${Media.desktop`font-size: ${fontSizes.sm};`};
  ${Media.tablet`font-size: ${fontSizes.smish};`};
`;

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${Media.desktop`font-size: 70px;`};
  ${Media.tablet`font-size: 60px;`};
  ${Media.phablet`font-size: 50px;`};
  ${Media.phone`font-size: 40px;`};
`;

const StyledSubtitle = styled.h3`
  font-size: 60px;
  line-height: 1.1;
  color: ${colors.slate};
  ${Media.desktop`font-size: 50px;`};
  ${Media.tablet`font-size: 40px;`};
  ${Media.phablet`font-size: 30px;`};
  ${Media.phone`font-size: 20px;`};
`;

const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${Mixins.inlineLink};
  }
`;

const StyledEmailLink = styled.a`
  ${Mixins.bigButton};
  margin-top: 50px;
`;

const Intro = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );

  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );

  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );

  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Intro.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Intro;
