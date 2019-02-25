import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

import Header from '../Widgets/Header/Header.js';
import UserAccountWidget from '../Widgets/UserAccountWidget/UserAccountWidget.js';

export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };


    render() {
        return (
            <div>
                <div id="header">
                    <Header />
                    <UserAccountWidget />
                </div>
                <main>
                    {this.props.children}
                </main>
                <footer>footer</footer>
            </div>
        );
    }
}