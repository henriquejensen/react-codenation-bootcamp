import React from 'react';

// styled-components
import GlobalStyle from '../styles/GlobalStyle';

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    {props.children}
  </React.Fragment>
);

export default Layout;
