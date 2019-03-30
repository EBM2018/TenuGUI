import React from 'react';
import PropTypes from 'prop-types';


class ActivityObserver extends React.PureComponent {
    static propTypes = {
      nameActivity: PropTypes.string.isRequired,
      nbFinished: PropTypes.number.isRequired,
      nbStudent: PropTypes.number.isRequired,
      disableActivityObserver: PropTypes.func.isRequired,
    }

    render() {
      const {
        nameActivity,
        nbFinished,
        nbStudent,
        disableActivityObserver,
      } = this.props;
      return (
        <>
          <h2 className="is-h2 add15-margin-top">
            Progression sur l'activité :
            {nameActivity}
          </h2>
          <progress value={nbFinished} max={nbStudent} />
          <div>
            <button
              type="button"
              className="button"
              onClick={disableActivityObserver}
            >
            Arrêter d'observer
            </button>
          </div>
        </>
      );
    }
}

export default ActivityObserver;
