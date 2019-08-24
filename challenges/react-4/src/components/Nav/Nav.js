import React from 'react';
import styles from 'styled-components';
import Logo from '../../img/images';

const Nav = () => (
  <ContainerNav>
    <img src={Logo.MarvelLogo} height="100%" alt="Marvel logo" />
  </ContainerNav>
);

const ContainerNav = styles.div`
    height: 100px;
    background-color: black;
    width: 100%
`;

export default Nav;
