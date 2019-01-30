import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';

import Layout from "../Layout/Layout";

import Test from '../../test.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Fishtanks from '../Fishtanks/Fishtanks.js';
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
                        path="/Fishtanks"
                        component={Fishtanks}
                    />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
  }
}

export default App;
