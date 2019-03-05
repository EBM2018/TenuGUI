import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

import Header from '../Widgets/Header/Header';
import UserAccountWidget from '../Widgets/UserAccountWidget/UserAccountWidget';

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div id="header">
          <Header />
          <UserAccountWidget />
        </div>
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}
