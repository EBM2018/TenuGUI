import React from 'react';
// import { withRouter } from 'react-router-dom';

export default class Home extends React.PureComponent {
    connectionFixture = () => {
      console.log(document.getElementById('name').value);

      const { history } = this.props;
      if (document.getElementById('name').value === 'BDH') {
        history.push('/Dashboard');
      }
      if (document.getElementById('name').value === 'Batou') {
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
            <button type="submit" onClick={this.connectionFixture}> Connexion </button>
          </div>
        </>
      );
    }
}
