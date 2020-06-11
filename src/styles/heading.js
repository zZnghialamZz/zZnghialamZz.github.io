import styled from 'styled-components';
import Theme from './theme';
import Media from './media';

const { colors, fontSizes, fonts } = Theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${Media.tablet`font-size: 24px;`};

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${fonts.FiraCode};
    font-weight: normal;
    color: ${colors.green};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 0px;
    ${Media.tablet`font-size: ${fontSizes.lg};`};
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${colors.lightestNavy};
    position: relative;
    top: 0px;
    margin-left: 20px;
    ${Media.desktop`width: 200px`};
    ${Media.tablet`width: 100%;`};
    ${Media.thone`margin-left: 10px;`};
  }
`;

export default Heading;
