import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.PropTypes.number.isRequired,
      reponse: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      fctChecked: PropTypes.func.isRequired,
    };

    render() {
      return (
        <>
          <input ref="checkbox" type="checkbox" onChange={this.fctCheckedLoc} />
          <textarea>
            {this.props.reponse}
          </textarea>
        </>
      );
    }
}
