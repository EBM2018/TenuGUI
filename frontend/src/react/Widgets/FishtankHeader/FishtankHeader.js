import React from 'react';

import './FishtankHeader.css';

import PropTypes from 'prop-types';

export default class FishtankHeader extends React.PureComponent {
    static propTypes = {
      subject: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      my: PropTypes.string,
    };

    static defaultProps = {
      my: '',
    };

    render() {
      const { my, subject, date } = this.props;
      return (
        <div id="NameHeader">
          <div>
            {my}
            {' '}
Aquarium :
            {subject}
          </div>
          <div>
                    Séance ouverte le
            {' '}
            {date}
          </div>
        </div>
      );
    }
}
