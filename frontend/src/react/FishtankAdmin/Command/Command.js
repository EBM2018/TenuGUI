import React from 'react';

export default class Command extends React.PureComponent {

    render() {
        return (
            <d>
                <div id={'title'}> Mon fils rouge </div>

                <div id='ButtonLayoutContainer'>
                    <button id='Start'>
                        Ouverture
                    </button>

                    <button id='AskSummary'>
                        Faites un résumé
                    </button>

                    <button id='AskFeedback'>
                        Feedback
                    </button>
                </div>
            </d>
        );
    }
}