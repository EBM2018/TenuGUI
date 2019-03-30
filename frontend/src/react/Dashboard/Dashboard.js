import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withCookies, Cookies } from 'react-cookie';

import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { createFishtank } from '../../service/API/requests';


const listGroupeTest = [0, 1, 5, 999];

class Dashboard extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: PropTypes.instanceOf(Cookies).isRequired,
    };

    state = {
      listGroupe: listGroupeTest,
      isOpen: false,
      groupSelected: '',
    };

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined || userJSON.shoalId !== undefined) {
        const { history } = this.props;
        history.push('/');
      }
    }

    // TODO : change this, logic for new fishtank
    todoStartFishtank = async () => {
      const { history, cookies } = this.props;
      await createFishtank(1).then((res) => {
        cookies.set('fishtankId', res.body.fishtankId);
        console.log(cookies.get('fishtankId'));
        history.push('/FishtankAdmin');
      });
    };

    goToNewFishtank = async () => {
      const { groupSelected } = this.state;
      console.log(groupSelected);
      const { history, cookies } = this.props;
      await createFishtank(groupSelected).then((res) => {
        cookies.set('fishtankId', res.body.fishtankId);
        console.log(cookies.get('fishtankId'));
        history.push('/FishtankAdmin');
      });
    };

    handleClose = () => {
      this.setState({ isOpen: false });
    }

    handleOpen = () => {
      this.setState({ isOpen: true });
    }

    updateInputValue = (event) => {
      this.setState({
        groupSelected: event.target.value,
      });
    }

    render() {
      const { listGroupe, isOpen, groupSelected } = this.state;

      return (
        <div className="bg-color">
          <div className="columns">
            <div className="column is-3">
              <h1 className="title is-h1 add-margin-left">Ma bibliothèque</h1>
            </div>
            <div className="column is-full">

              <Popup
                open={isOpen}
                onClose={this.handleClose}
              >
                <span> Choix du groupe </span>
                <div className="columns">
                  <div className="column">
                    <select
                      className="select"
                      value={groupSelected}
                      onChange={evt => this.updateInputValue(evt)}
                    >
                      {listGroupe.map(nb => (
                        <option
                          className="buttonList"
                          value={nb}
                        >
                          {nb}
                        </option>
                      ))
                      }
                    </select>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      className="button is-link"
                      onClick={this.goToNewFishtank}
                    >
                        Accept
                    </button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      className="button is-link"
                      onClick={this.handleClose}
                    >
                        Quit
                    </button>
                  </div>
                </div>


              </Popup>
              <button
                className="button is-link"
                type="button"
                name="button"
                onClick={this.handleOpen}
              >
                    Démarrer une séance
              </button>
              <button
                className="button is-link"
                type="button"
                name="button"
                onClick={this.todoStartFishtank}
              >
                    Démarrer une séance (old)
              </button>
            </div>
          </div>
          <div className="columns">
            <div className="column add-margin-left add15-margin-top is-5">
              <MyActivity />
              <MyActions />
            </div>
            <div id="secondColumn">
              <MyDescription id="flex" />
            </div>
          </div>
        </div>
      );
    }
}

export default withCookies(Dashboard);
/*
<Popup
                trigger={(
                  <button
                    className="button is-link"
                    type="button"
                    name="button"
                  >
                        Démarrer une séance
                  </button>
                    )
                    }
                modal
                closeOnDocumentClick
                open={this.state.isOpen}
              >
                <span> Choix du groupe </span>
                <div className="columns">
                  <div className="column">
                    <select value="">
                      {listGroupe.map(nb => (
                        <option value={nb}>{nb}</option>
                      ))
                      }
                    </select>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      className="button is-link"
                    >
                        Accept
                    </button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      className="button is-link"
                      onClick={this.handleClose}
                    >
                        Quit
                    </button>
                  </div>
                </div>


              </Popup>
 */
/*

              <button
                className="button is-link"
                type="button"
                name="button"
                onClick={this.togglePopup}
              >
                      Démarrer une séance
              </button>
 */
/*
<div className="bg-color">
          <div>
            <h2 className="is-h2">Ma Bibliothèque</h2>
            <button
              type="button"
              onClick={this.todoStartFishtank}
            >
                Start Fishtank
            </button>
          </div>
          <div id="dashboardContainer">
            <p id="firstColumn">
              <MyActivity />
              <MyActions />
            </p>
            <p id="secondColumn">
              <MyDescription id="flex" />
            </p>
          </div>
        </div>
 */
