import React from 'react';

import './ButtonLayout.css';
import { StudentFishtank } from '../../../service/Fishtank/Fishtank';
// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

export default class ButtonLayout extends React.PureComponent {
    speedUp = () => {
      // console.log(1);
    };

    speedDown = () => {
      // console.log(2);
    };

    dontUnderstand = () => {
      // console.log(3);
    };

    plsStop = () => {
      // console.log(4);
    };

    render() {
      return (
        <div>
          <div id="ButtonLayoutContainer">
            <button type="button" id="AskQuestion" onClick={StudentFishtank.askQuestion}>
              Posez votre question
            </button>

            <div className="dropdown">
              <button type="button" className="dropbtn"> Changement de Rythme</button>
              <div className="dropdown-content">
                <button type="button" id="buttonList" onClick={StudentFishtank.askSpeedUp}>Demander d aller plus vite</button>
                <button type="button" id="buttonList" onClick={StudentFishtank.askSpeedDown}>Demander d aller moins vite</button>
                <button type="button" id="buttonList" onClick={StudentFishtank.notUnderstand}>Je ne comprends plus rien</button>
                <button type="button" id="buttonList" onClick={StudentFishtank.askStop}>Demander une pause</button>
              </div>
            </div>


            <div className="dropdown">
              <button type="button" className="dropbtn">
                Précision
              </button>
              <div className="dropdown-content">
                <button type="button" id="buttonList" onClick={this.speedUp}>Demander d aller plus vite 2</button>
                <button type="button" id="buttonList" onClick={this.speedDown}>Demander d aller moins vite 2</button>
                <button type="button" id="buttonList" onClick={this.dontUnderstand}>Je ne comprends plus rien 2</button>
                <button type="button" id="buttonList" onClick={this.plsStop}>Demander une pause 2</button>
              </div>
            </div>

          </div>
          <div id="clean" />
        </div>
      );
    }
}
