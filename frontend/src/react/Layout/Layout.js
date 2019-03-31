import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Widgets/Header/Header';

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
        </div>
        <main>
          {children}
        </main>

      </div>
    );
  }
}
