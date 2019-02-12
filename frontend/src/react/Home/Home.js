import React from 'react';
import { withRouter } from 'react-router-dom'

export default class Home extends React.PureComponent {
    connectionFixture = () => {
        console.log(document.getElementById('name').value)

        if(document.getElementById('name').value === 'BDH'){
            this.props.history.push('/Dashboard');
        }
        if(document.getElementById('name').value === 'Batou'){
            this.props.history.push('/Fishtank');
        }

    };
    render() {
        return (
            <>
                wwww Home
                <a href={"/"}> lien </a>
                <div>
                    Se connecter en tant que :
                    <input id="name" type="text"/>
                    <button onClick={this.connectionFixture}> Connexion </button>
                </div>
            </>
        );
    }
}