import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.PureComponent {
  static propTypes = {
    id: PropTypes.PropTypes.number.isRequired,
    response: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    fctChecked: PropTypes.func.isRequired,
  };

  fctCheckedLoc = () => {
    if (this.refs.checkbox.checked) {
      const { id, response, fctChecked } = this.props;
      fctChecked(id + 1, response);
    }
  };

  isChecked = () => this.refs.checkbox.checked;

  unCheck = () => {
    this.refs.checkbox.checked = false;
  };

  render() {
    const { response } = this.props;
    return (
      <>
        <input ref="checkbox" type="checkbox" onChange={this.fctCheckedLoc} />
        <label>
          {response}
        </label>
      </>
    );
  }
}
