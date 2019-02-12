import React from 'react';

import './MyActions.css';

import {fct_Open_Action_ask_understanding,fct_Open_Action_ask_attention,fct_Open_Action_ask_summary,fct_Open_Action_reboot,fct_Open_Action_ask_position} from '../../../service/Dashboard/Dashboard.js';

export default class MyActions extends React.PureComponent {

    render() {
        return (
            <>
                <div>Mes Actions</div>
                <div id={"actionsContainer"}>
                    <button onClick={fct_Open_Action_ask_understanding}>Vous avez Compris ?</button>
                    <button onClick={fct_Open_Action_ask_attention}>Votre attention svp !</button>
                    <button onClick={fct_Open_Action_ask_summary}>Faites un résumé</button>
                    <button onClick={fct_Open_Action_reboot}>Reboot</button>
                    <button onClick={fct_Open_Action_ask_position}>Vous en êtes où ?</button>
                </div>
            </>
        );
    }
}