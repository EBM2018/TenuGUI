import React from 'react';
import PropTypes from 'prop-types';

import './ButtonLayout.css';
import { StudentFishtank } from '../../../service/Fishtank/Fishtank';
// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

import { sendNewInteractionEmission } from '../../../service/API/requests';

class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
    }

    speedUp = () => {
      // console.log(1);
      // const { fishtankId } = this.props;
      // sendNewInteractionEmission(fishtankId, 2, 'speedUp');
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
      const { fishtankId } = this.props;
      return (
        <div>
          <div id="ButtonLayoutContainer">
            <button type="button" id="AskQuestion" onClick={StudentFishtank.askQuestion}>
              Posez votre question
            </button>

            <div className="dropdown">
              <button type="button" className="dropbtn"> Changement de Rythme</button>
              <div className="dropdown-content">
                <button
                  type="button"
                  className="buttonList"
                  onClick={() => { StudentFishtank.askSpeedUp(fishtankId); }}
                >
                    Demander d aller plus vite
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={() => { StudentFishtank.askSpeedDown(fishtankId); }}
                >
                    Demander d aller moins vite
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={() => { StudentFishtank.notUnderstand(fishtankId); }}
                >
                    Je ne comprends plus rien
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={() => { StudentFishtank.askStop(fishtankId); }}
                >
                    Demander une pause
                </button>
              </div>
            </div>


            <div className="dropdown">
              <button type="button" className="dropbtn">
                Précision
              </button>
              <div className="dropdown-content">
                <button
                  type="button"
                  className="buttonList"
                  onClick={this.speedUp}
                >
                    Demander d aller plus vite 2
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={this.speedDown}
                >
                    Demander d aller moins vite 2
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={this.dontUnderstand}
                >
                    Je ne comprends plus rien 2
                </button>
                <button
                  type="button"
                  className="buttonList"
                  onClick={this.plsStop}
                >
                    Demander une pause 2
                </button>
              </div>
            </div>

          </div>
          <div id="clean" />
        </div>
      );
    }
}

export default ButtonLayout;
