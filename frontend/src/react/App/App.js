import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

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
              render={props => (
                <Home
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/Dashboard"
              render={props => (
                <Dashboard
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/Fishtank"
              render={props => (
                <Fishtank
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/FishtankAdmin"
              render={props => (
                <FishtankAdmin
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/FishtankEditor"
              render={props => (
                <FishtankEditor
                  {...props}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Layout>

    </CookiesProvider>
  </div>


);
export default App;

// export default withCookies(App);
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
