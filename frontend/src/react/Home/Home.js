import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { getUserFixture } from '../../service/API/requests';

const ButtonChange = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => {
      if (document.getElementById('name').value === 'BDH') {
        history.push('/Dashboard');
      }
      if (document.getElementById('name').value === 'Batou') {
        history.push('/Fishtank');
      }
    }}
  >
        Connexion
  </button>
));

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

    userIsTeacher = (userJSON) => {
      if (userJSON.shoalId === undefined) {
        return true;
      }
      return false;
    };

    // TODO : change this, logic for new fishtank
    todoConnection = async () => { // TODO : change this shit
      const dataUser = await getUserFixture();
      const nameInput = document.getElementById('name').value;
      const userJSON = this.getUserInJSON(nameInput, dataUser);
      const { history } = this.props;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc';

      console.log(userJSON);

      if (userJSON.shoalId === undefined) {
        this.setCookie(userJSON, token);
        history.push('/Dashboard');
      } else {
        this.setCookie(userJSON, token);
        history.push('/Fishtank');
      }
    };

    render() {
      return (
        <>
          wwww Home
          <a href="/"> lien </a>
          <div>
            Se connecter en tant que :
            <input id="name" type="text" />
            <button type="button" onClick={this.todoConnection}>
                Connexion
            </button>
          </div>
        </>
      );
    }
}


export default withCookies(Home);
