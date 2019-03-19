import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { getUserFixture, getUserTokenFixture } from '../../service/API/requests';

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

    // TODO : change this, logic for new fishtank
    todoConnection = async () => { // TODO : change this shit
      const dataUser = await getUserFixture();
      const nameInput = document.getElementById('name').value;
      const userJSON = this.getUserInJSON(nameInput, dataUser);
      const { history } = this.props;
      // const token =
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
      // .eyJ0b2tlbiI6InByb2YifQ
      // .DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc';

      const repToken = await getUserTokenFixture(userJSON.id);
      console.log(repToken);
      console.log(repToken.token);
      userJSON.token = repToken.token;

      this.setCookie(userJSON);

      if (userJSON.shoalId === undefined) {
        // this.setCookie(userJSON, repToken.token);
        history.push('/Dashboard');
      } else {
        // this.setCookie(userJSON, repToken.token);
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
