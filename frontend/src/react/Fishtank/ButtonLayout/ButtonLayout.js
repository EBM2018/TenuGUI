/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

import './ButtonLayout.css';

import StudentFishtank from '../../../service/Fishtank/Fishtank';

class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }

    sendQuestion = (event) => {
      if (event.keyCode === 13) {
        const { fishtankId } = this.props;
        StudentFishtank.askQuestion(fishtankId, event.target.value);
      }
    }

    render() {
      const { fishtankId } = this.props;
      return (
        <div className="bg-color">
          <div className="columns add-margin ">
            <div className="column is-3">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Posez votre question"
                    onKeyUp={this.sendQuestion}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-hand-point-up" />
                  </span>
                </p>
              </div>
            </div>

            <div className="column is-3 has-text-left dropdown">
              <p className="control has-icons-left has-icons-right">
                <button className="button is-info is-inverted is-fullwidth" type="button" name="button">
                        Changement de rythme
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-question-circle" />
                </span>
              </p>
              <div className="dropdown-content">
                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askSpeedUp(fishtankId); }}
                  >
                        Demander d aller plus vite
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>
                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askSpeedDown(fishtankId); }}
                  >
                        Demander d aller moins vite
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>
                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.notUnderstand(fishtankId); }}
                  >
                        Je ne comprends plus rien
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>
                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askPause(fishtankId); }}
                  >
                        Demander une pause
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-3 dropdown">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted  is-fullwidth"
                  type="button"
                  name="button"
                >
                    Précision
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-plus-circle" />
                </span>
              </p>
              <div className="dropdown-content">

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askReexplain(fishtankId); }}
                  >
                          Demander de réexpliquer
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askDetails(fishtankId); }}
                  >
                          Demander de détailler
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askExample(fishtankId); }}
                  >
                          Demander un exemple
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askAnecdote(fishtankId); }}
                  >
                          Demander une anecdote
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askReference(fishtankId); }}
                  >
                          Demander une référence
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>

                <p className="control has-icons-left has-icons-right">
                  <button
                    type="button"
                    className="button is-info is-inverted  is-fullwidth buttonList"
                    onClick={() => { StudentFishtank.askExercice(fishtankId); }}
                  >
                          Demander un exercice
                  </button>
                  <span className="icon is-small is-left">
                    <i className="fas fa-question-circle" />
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-2">
              <p className="control has-icons-left has-icons-right">
                <button
                  type="button"
                  className="button is-danger is-fullwidth"
                  onClick={() => { StudentFishtank.askStop(fishtankId); }}
                >
                    Arrêt d'urgence
                </button>
                <span className="icon is-small is-left">
                  <i className="far fa-stop-circle" />
                </span>
              </p>
            </div>


            <div id="clean" />
          </div>
        </div>
      );
    }
}

export default ButtonLayout;
/*
<span className="icon is-small is-left">
                      <i className="fas fa-hand-point-up"></i>
                  </span>
 */
