import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Layout } from '@components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="MainContents"></StyledMainContainer>
  </Layout>
);

// export default function Home() {
//   return (
//     <div>
//       <h1>This website is still under contruction !!</h1>
//       <p>Please wait or contact Nghia Lam directly at: nghialam12795@gmail.com</p>
//     </div>
//   );
// }

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;
