/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Home.css';
import logo from '../../images/logokoinobori.png';
import { getUserTokenFixture, getUserFixture } from '../../service/API/users';

const listPerso = ['BDH', 'Hamza Oussaine', 'Baptiste Lalanne', 'Ludovic Guillemin'];

class Home extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    setCookie = (userJSON, token) => {
      const d = new Date();
      d.setTime(d.getTime() + (120 * 60 * 1000));

      const { cookies } = this.props;
      cookies.set(
        'userJSON', userJSON,
        'token', token,
        'fishtankId', undefined,
        { maxAge: 2 * 3600 },
      );
    };

    getUserInJSON = (userName, JSON) => {
      for (let i = 0; i < JSON.length; i += 1) {
        if (userName === JSON[i].name) {
          return JSON[i];
        }
      }
      return null;
    };

    // TODO : change this, logic for new fishtank
    todoConnection = () => { // TODO : change this shit
      const nameInput = document.getElementById('name').value;
      this.connect(nameInput);
    };

    todoConnection2 = () => { // TODO : change this shit
      const nameInput = document.getElementById('name2').value;
      this.connect(nameInput);
    };

    connect = async (nameInput) => {
      console.log(nameInput);
      const dataUser = await getUserFixture();
      const userJSON = this.getUserInJSON(nameInput, dataUser);
      const { history } = this.props;
      const repToken = await getUserTokenFixture(userJSON.id);
      userJSON.token = repToken.token;

      this.setCookie(userJSON);

      if (userJSON.shoalId === undefined) {
        history.push('/Dashboard');
      } else {
        history.push('/Fishtank');
      }
    };

    render() {
      return (
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-right">
              <div className="columns">
                <div className="column is-4 is-offset-3 ">

                  <h1 className="title">
                    <span className="tenu">Tenu</span>
                    <span className="GUI">GUI</span>
                  </h1>

                  <h2 className="title is-5 is-h2">
                      Pour rendre vos cours et vos séminaires super interactifs
                  </h2>

                </div>
                <div className="column is-2">
                  <figure className="image is-1by1">
                    <img src={logo} alt="logo1TenuGUI" />
                  </figure>
                </div>
                <div className="column is-4" />
              </div>
              <div className="columns">
                <div className="column" />
              </div>
              <div className="columns is-tablet is-multiline">
                <div className="column is-2 is-offset-4 is-center has-text-centered">
                  <p className="is-6">Intervenant</p>
                </div>
                <div className="column is-2 is-center has-text-centered">
                  <p className="is-6">Apprenant</p>
                </div>
              </div>
              <div className="columns is-multiline">
                <div className="column is-4 is-offset-4">
                  <div className="field">
                    <input className="input" id="name" type="text" name="" placeholder="Choisi ton ID" />
                  </div>
                </div>
                <div className="column is-2 is-offset-6">
                  <button
                    type="button"
                    className="button is-info is-focus is-fullwidth"
                    onClick={this.todoConnection}
                  >
                                  C'est parti !
                  </button>
                </div>
                <div className="column is-2 is-offset-6">
                  <select
                    className="select"
                    id="name2"
                  >
                    {listPerso.map(nb => (
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
                <div className="column is-2 is-offset-6">
                  <button
                    type="button"
                    className="button is-info is-focus is-fullwidth"
                    onClick={this.todoConnection2}
                  >
                    C'est parti !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

export default withCookies(Home);
