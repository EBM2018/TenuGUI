import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { CookiesProvider, withCookies } from 'react-cookie';

import Layout from '../Layout/Layout';

import Dashboard from '../Dashboard/Dashboard';
import Fishtank from '../Fishtank/Fishtank';
import FishtankAdmin from '../FishtankAdmin/FishtankAdmin';
import FishtankEditor from '../FishtankEditor/FishtankEditor';
import Home from '../Home/Home';

import '../../service/Websockets';
import '../bulma.min.css';
import './App.css';


const App = () => (
  <div className="bg-img">
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
              path="/FishtankAdmin"
              component={FishtankAdmin}
            />
            <Route
              exact
              path="/FishtankEditor"
              component={FishtankEditor}
            />
          </Switch>
        </BrowserRouter>
      </Layout>

    </CookiesProvider>
  </div>


);

export default withCookies(App);
/*

                <Route
                  exact
                  path="/FishtankEditor"
                  render={props => (
                    <FishtankEditor
                      {...props}
                    />
                  )}
                />
 */
