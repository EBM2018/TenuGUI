import React from 'react';

import './ButtonLayout.css';
import {
  fct_Student_not_understand,
  fct_Student_question,
  fct_Student_speed_down,
  fct_Student_speed_up,
  fct_Student_stop,
} from '../../../service/Fishtank/Fishtank';
// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

export default class ButtonLayout extends React.PureComponent {
    speedUp = () => {
      console.log(1);
    };

    speedDown = () => {
      console.log(2);
    };

    dontUnderstand = () => {
      console.log(3);
    };

    plsStop = () => {
      console.log(4);
    };

    render() {
      return (
        <a>
          <div id="ButtonLayoutContainer">
            <button id="AskQuestion" onClick={fct_Student_question}>
                        Posez votre question
            </button>


            <b className="dropdown">
              <button className="dropbtn"> Changement de Rythme</button>
              <b className="dropdown-content">
                <b href="#" onClick={fct_Student_speed_up}>Demander d'aller plus vite</b>
                <b href="#" onClick={fct_Student_speed_down}>Demander d'aller moins vite</b>
                <b href="#" onClick={fct_Student_not_understand}>Je ne comprends plus rien</b>
                <b href="#" onClick={fct_Student_stop}>Demander une pause</b>
              </b>
            </b>


            <b className="dropdown">
              <button className="dropbtn">
                {' '}
Précision
              </button>
              <b className="dropdown-content">
                <b href="#" onClick={this.speedUp}>Demander d'aller plus vite 2</b>
                <b href="#" onClick={this.speedDown}>Demander d'aller moins vite 2</b>
                <b href="#" onClick={this.dontUnderstand}>Je ne comprends plus rien 2</b>
                <b href="#" onClick={this.plsStop}>Demander une pause 2</b>
              </b>
            </b>

          </div>
          <div id="clean" />
        </a>
      );
    }
}
