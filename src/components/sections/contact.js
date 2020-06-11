import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { Theme, Mixins, Media, Section, Heading } from '@styles';

const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${Mixins.inlineLink};
  }
`;

const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${Media.desktop`font-size: ${fontSizes.sm};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    ${Media.desktop`font-size: ${fontSizes.smish};`};
  }
  &:after {
    display: none;
  }
`;

const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${Media.desktop`font-size: 50px;`};
  ${Media.tablet`font-size: 40px;`};
`;

const StyledEmailLink = styled.a`
  ${Mixins.bigButton};
  margin-top: 50px;
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, buttonText } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>What&apos;s Next?</StyledHeading>

      <StyledTitle>{title}</StyledTitle>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        {buttonText}
      </StyledEmailLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
