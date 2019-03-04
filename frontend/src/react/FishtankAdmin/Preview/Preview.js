import React from 'react';

export default class Preview extends React.PureComponent {
  render() {
    return (
      <d>
        <div id="title">
          Prévisulasation de l'activité
        </div>

        <div id="subtitle">
          Description
        </div>
        <div id={'paragraphe', 'description'}>
          blabla
        </div>

        <div id="subtitle">
          Effet
        </div>
        <div id={'paragraphe', 'effect'}>
          blabla
        </div>

        <div id="subtitle">
          Affichage
        </div>
        <div id={'paragraphe', 'display'}>
          blabla
        </div>
      </d>
    );
  }
}
