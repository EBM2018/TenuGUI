import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBoxEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.PropTypes.number.isRequired,
      idContainer: PropTypes.PropTypes.number.isRequired,
      response: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editResponse: PropTypes.func.isRequired,
    };

    changeText = (event) => {
      const { editResponse, idContainer, id } = this.props;
      editResponse(idContainer, id, event.target.value);
    };

    render() {
      const { response } = this.props;
      return (
        <>
          <input ref="checkbox" type="checkbox" />
          <textarea onChange={this.changeText} value={response} />
        </>
      );
    }
}
