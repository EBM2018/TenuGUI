import React from 'react';

import {fct_Start_Activity,fct_Ask_Summary,fct_Ask_Feedback} from '../../../service/FishtankAdmin/FishtankAdmin.js';

export default class Command extends React.PureComponent {

    render() {
        return (
            <div>
                <div id={'title'}> Mon fils rouge </div>

                <div id='ButtonLayoutContainer'>
                    <button id='Start' onClick={fct_Start_Activity}>
                        Ouverture
                    </button>

                    <button id='AskSummary' onClick={fct_Ask_Summary}>
                        Faites un résumé
                    </button>

                    <button id='AskFeedback' onClick={fct_Ask_Feedback}>
                        Feedback
                    </button>
                </div>
            </div>
        );
    }
}