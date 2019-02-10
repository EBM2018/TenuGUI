import React from 'react';

import './MyActivity.css';

export default class MyActivity extends React.PureComponent {

    render() {
        return (
            <>
                <div>Mes Activités</div>
                <div id={"activityContainer"}>
                    <button>Ouverture</button>
                    <button>FeedBack</button>
                </div>
            </>
        );
    }
}