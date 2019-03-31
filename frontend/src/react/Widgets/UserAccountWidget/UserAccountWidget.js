import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

import Popup from 'reactjs-popup';
import photoProfil from '../../../images/PhotoProfil.png';

class UserAccountWidget extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    state = {
      infoDisplayed: false,
    }

    handleClose = () => {
      this.setState({ infoDisplayed: false });
    }

    handleOpen = () => {
      this.setState({ infoDisplayed: true });
    }

    deconnection = () => {
      const { history, cookies } = this.props;
      cookies.remove('userJSON');
      history.push('/');
    }

    render() {
      const { infoDisplayed } = this.state;
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON !== undefined) {
        return (
          <figure className="image is-64x64">
            <div
              onClick={this.handleOpen}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
            >
              <img
                src={photoProfil}
                alt="MonProfil"
              />
            </div>
            <shan>{userJSON.name}</shan>
            <Popup
              open={infoDisplayed}
              onClose={this.handleClose}
            >
              {Object.keys(userJSON).map((key) => {
                if (key !== 'token' && key !== 'id') {
                  let nameKey = '';
                  if (key === 'name') {
                    nameKey = 'Nom';
                  }
                  if (key === 'shoalId') {
                    nameKey = 'Groupe';
                  }
                  return (
                    <p>
                      {nameKey}
                      {' : '}
                      {userJSON[key]}
                    </p>
                  );
                }
                return <></>;
              })}

              <button
                type="button"
                className="button"
                onClick={this.deconnection}
              >
                    Deconnection
              </button>


            </Popup>
          </figure>
        );
      }
      return <></>;
    }
}

export default withCookies(withRouter(UserAccountWidget));
/*

              {Object.keys(userJSON).map((key) => {
                if (key !== 'token' && key !== 'id') {
                  return (
                    <p>
                      {key}
                      {' : '}
                      {userJSON[key]}
                    </p>
                  );
                }
                return <></>;
              })}
 */
