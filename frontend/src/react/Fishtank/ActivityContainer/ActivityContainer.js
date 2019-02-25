import React from 'react';

import PropTypes from 'prop-types';

import Activity from '../../Widgets/Activity/Activity.js';

export default class ActivityContainer extends React.PureComponent {


    render() {
        return (
            <div>

                ActivityContainer
                <Activity/>
                End

            </div>
        );
    }
}