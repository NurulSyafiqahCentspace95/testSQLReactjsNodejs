import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import ListDonor from '../ListDonor';
import DonorRegistration from '../DonorRegistration';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/register" component={DonorRegistration} />
    <Route path="/listDonor" component={ListDonor} />
  </Router>
);

export default Routes;
