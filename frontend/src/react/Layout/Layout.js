import React from 'react';
import PropTypes from 'prop-types';

export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };


    render() {
        return (
            <div>
                <head>
                    <title> TenuGUI </title>
                </head>
                <header>
                    header
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>footer</footer>
            </div>
        );
    }
}