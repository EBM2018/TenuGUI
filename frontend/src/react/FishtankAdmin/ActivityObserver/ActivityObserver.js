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
      const progressString = "Progression sur l'activité :";
      const stopString = "Arrêter d'observer";
      return (
        <>
          <h2 className="is-h2 add15-margin-top">
            {progressString}
            {nameActivity}
          </h2>
          <progress value={nbFinished} max={nbStudent} />
          <div>
            <button
              type="button"
              className="button"
              onClick={disableActivityObserver}
            >
              {stopString}
            </button>
          </div>
        </>
      );
    }
}

export default ActivityObserver;
