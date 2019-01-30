import React from 'react';
import PropTypes from 'prop-types';

export default class Layout extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };


    render() {
        return (
            <div>
                <header>My Overkill Morpion</header>
                <main>
                    {this.props.children}
                </main>
                <footer>© 2019</footer>
            </div>
        );
    }
}