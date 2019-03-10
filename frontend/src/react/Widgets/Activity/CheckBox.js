import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.PureComponent {
    static propTypes = {
      id: PropTypes.PropTypes.number.isRequired,
      response: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      check: PropTypes.bool.isRequired,
      fctChecked: PropTypes.func.isRequired,
    };

    fctCheckedLoc = () => {
      const { id, fctChecked } = this.props;
      fctChecked(id);
    };

    render() {
      const { response, check } = this.props;
      return (
        <>
          <input type="checkbox" onChange={this.fctCheckedLoc} checked={check} />
          {response}
        </>
      );
    }
}
