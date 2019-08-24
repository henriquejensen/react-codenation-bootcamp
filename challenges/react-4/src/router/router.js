/* Modules */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Layout from './Layout';
import Nav from '../components/Nav/Nav';
/* Containers */
import App from '../containers/App/App';
import DetailsPage from '../containers/DetailsPage/DetailsPage';

//TODO Adjust routes

const MyRouter = () => (
  <React.Fragment>
    <Nav />
    <Layout>
      <Container>
        <Route exact path="/" component={App} />
        <Route exact path="/details" component={DetailsPage} />
      </Container>
    </Layout>
  </React.Fragment>
);

const Container = styled.div`
  margin: 20px;
`;

export default withRouter(connect()(MyRouter));
