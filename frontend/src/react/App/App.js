import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { CookiesProvider, withCookies } from 'react-cookie';

import Layout from '../Layout/Layout';

import Machin from '../../machin';
import Dashboard from '../Dashboard/Dashboard';
import Fishtank from '../Fishtank/Fishtank';
import FishtankAdmin from '../FishtankAdmin/FishtankAdmin';
import FishtankEditor from '../FishtankEditor/FishtankEditor';
import Home from '../Home/Home';

import '../../service/Websockets';
import '../bulma.min.css';


class App extends React.PureComponent {
  state = {
    infoFishtank: undefined,
  }

  /*
  constuctor(props) {
    this.state = {
      infoFishtank: undefined,
    };
  }

  componentWillMount() {
    // pseudo code
    const infoFishtank = localStorage.getItem('infoFishtank');
    if(infoFishtank != null) {
        this.setState({
            infoFishtank: undefined,
        });
    }else{
        this.setState({
            infoFishtank: JSON.parse(infoFishtank),
        });
    }
      console.log(1)
      console.log('retrievedObject: ', this.state.infoFishtank);
      console.log(2)
  }
    */
  /*
  componentDidMount() {
    const persistState = localStorage.getItem('rootState');

    if (persistState) {
      try {
        this.setState({ infoFishtank: JSON.parse(persistState) });
      } catch (e) {
        // is not json
      }
    }
    console.log(1);
    console.log(this.state.infoFishtank);
    console.log(1);
  }

  componentWillUnmount() {
    // localStorage.setItem('rootState', JSON.stringify(this.state));
  }
*/
  changeInfoFishtank = (res) => {
    this.setState({ infoFishtank: res });
    // localStorage.setItem('rootState', JSON.stringify(res));
    console.log(res);
    // console.log(JSON.parse(localStorage.getItem('rootState')));
    /*
    this.setState({ infoFishtank: res });
    const { infoFishtank } = this.state;
    console.log(infoFishtank);
    this.forceUpdate();
    */
  };

  render() {
    const { infoFishtank } = this.state;
    return (
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
                path="/Dashboard"
                render={props => (
                  <Dashboard
                    changeInfo={this.changeInfoFishtank}
                    {...props}
                  />
                )}
              />
              <Route
                path="/Fishtank"
                render={props => (
                  <Fishtank
                    changeInfo={this.changeInfoFishtank}
                    infoFishtank={infoFishtank}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/Test"
                component={Machin}
              />
              <Route
                exact
                path="/FishtankAdmin"

                render={props => (
                  <FishtankAdmin
                    infoFishtank={infoFishtank}
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
    );
  }
}

export default withCookies(App);
