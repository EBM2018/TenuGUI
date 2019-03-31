import React from 'react';

import PropTypes from 'prop-types';

export default class FishtankHeader extends React.PureComponent {
    static propTypes = {
      subject: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      my: PropTypes.string,
      chapitre: PropTypes.string.isRequired,
    };

    static defaultProps = {
      my: '',
    };

    render() {
      const {
        my, subject, date, chapitre,
      } = this.props;
      return (
        <div className="columns add-margin">
          <div className="column is-6">
            <h1 className="title is-2">
              {my}
              {' '}
                    Aquarium :
              {subject}
            </h1>
            <p className="is-4">
                  Séance ouverte le
              {' '}
              {date}
            </p>
            <p className="is-4">
                  Chapitre
              {': '}
              {chapitre}
            </p>
          </div>
        </div>
      );
    }
}
