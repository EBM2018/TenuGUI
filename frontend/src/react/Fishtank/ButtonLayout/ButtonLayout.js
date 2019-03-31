/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

import './ButtonLayout.css';

import { sendNewInteractionEmission } from '../../../service/API/requests';

class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }

    sendQuestion = (event) => {
      const { fishtankId, idInteractions } = this.props;
      if (event.keyCode === 13) {
        sendNewInteractionEmission(
          fishtankId,
          idInteractions.PARTICIPANT.QUESTION_ASK,
          event.target.value,
        );
      }
    }

    render() {
      const { fishtankId, idInteractions } = this.props;
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
            <div className="column is-3">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => {
                    sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.COOL_PRESS, '');
                  }}
                >
                Liker
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-thumbs-up" />
                </span>
              </p>
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.FASTER_RHYTHM_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.SLOWER_RHYTHM_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.LOW_UNDERSTANDING_NOTIFY, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.PAUSE_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.EXPLANATIONS_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.DETAILS_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.EXAMPLES_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.TRIVIA_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.REFERENCE_ASK, '');
                    }}
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
                    onClick={() => {
                      sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.EXERCISE_ASK, '');
                    }}
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
                  onClick={() => {
                    sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.EMERGENCY_PRESS, '');
                  }}
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
