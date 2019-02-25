import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';

import Layout from "../Layout/Layout";

import Machin from '../../machin.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Fishtank from '../Fishtank/Fishtank.js';
import FishtankAdmin from '../FishtankAdmin/FishtankAdmin.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
