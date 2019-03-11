import React from 'react';
import { withRouter } from 'react-router-dom';

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

export default class Home extends React.PureComponent {
    uselessFct = () => {} // TODO : change this, logic for new connection

    render() {
      return (
        <>
          wwww Home
          <a href="/"> lien </a>
          <div>
            Se connecter en tant que :
            <input id="name" type="text" />
            <ButtonChange />
          </div>
        </>
      );
    }
}
