import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.PureComponent {
    static propTypes = {
      id: PropTypes.PropTypes.number.isRequired,
      reponse: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      fctChecked: PropTypes.func.isRequired,
    };

    fctCheckedLoc = () => {
      if (this.refs.checkbox.checked) {
        this.props.fctChecked(this.props.id + 1, this.props.reponse);
      }
    }

    isChecked = () => {
      return this.refs.checkbox.checked;
    }

    unCheck = () => {
      this.refs.checkbox.checked = false;
    }

    render() {
      return (
        <>
          <input ref="checkbox" type="checkbox" onChange={this.fctCheckedLoc} />
          <label>
            {' '}
            {this.props.reponse}
            {' '}
          </label>
        </>
      );
    }
}
