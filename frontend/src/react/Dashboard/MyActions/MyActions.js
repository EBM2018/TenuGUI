import React from 'react';

import './MyActions.css';

export default class MyActions extends React.PureComponent {

    render() {
        return (
            <>
                <div>Mes Activités</div>
                <div id={"actionsContainer"}>
                    <button>Vous avez Compris ?</button>
                    <button>Votre attention svp !</button>
                    <button>Faites un résumé</button>
                    <button>Reboot</button>
                    <button>Vous en êtes où ?</button>
                </div>
            </>
        );
    }
}