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

  constructor() {
    super();
    this.checkBox = React.createRef();
  }

  fctCheckedLoc = () => {
    if (this.checkBox.current.checked) {
      const { id, response, fctChecked } = this.props;
      fctChecked(id + 1, response);
    }
  };

  isChecked = () => this.checkBox.current.checked;

  unCheck = () => {
    this.checkBox.current.checked = false;
  };

  render() {
    const { response } = this.props;
    return (
      <>
        <input ref={this.checkBox} type="checkbox" onChange={this.fctCheckedLoc} />
        {response}
      </>
    );
  }
}
