import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.PropTypes.number.isRequired,
      id_container: PropTypes.PropTypes.number.isRequired,
      reponse: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editReponse: PropTypes.func.isRequired,
    };

    changeText = (event) => {
      this.props.editReponse(this.props.id_container, this.props.id, event.target.value);
    };

    render() {
      return (
        <>
          <input ref="checkbox" type="checkbox" />
          <textarea onChange={this.changeText} value={this.props.reponse} />
        </>
      );
    }
}
