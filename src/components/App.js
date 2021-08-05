import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import BadgeHome from '../pages/BadgeHome';
import BadgeRickMorty from '../pages/BadgeRickMorty';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/rickandmorty" component={BadgeRickMorty} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
