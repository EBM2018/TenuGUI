import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './App.css';

import Layout from '../Layout/Layout';

import Machin from '../../machin';
import Dashboard from '../Dashboard/Dashboard';
import Fishtank from '../Fishtank/Fishtank';
import FishtankAdmin from '../FishtankAdmin/FishtankAdmin';
import Home from '../Home/Home';

import '../../service/Websockets';


const App = () => (
  <CookiesProvider>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/Dashboard"
            component={Dashboard}
          />
          <Route
            exact
            path="/Fishtank"
            component={Fishtank}
          />
          <Route
            exact
            path="/Test"
            component={Machin}
          />
          <Route
            exact
            path="/FishtankAdmin"
            component={FishtankAdmin}
          />
        </Switch>
      </BrowserRouter>
    </Layout>

  </CookiesProvider>
);

export default App;
