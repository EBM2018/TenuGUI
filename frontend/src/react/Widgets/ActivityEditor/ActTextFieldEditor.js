import React from 'react';
import PropTypes from 'prop-types';

export default class ActTextFieldEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editQuestion: PropTypes.func.isRequired,
      deleteHim: PropTypes.func.isRequired,
    };

    clickDelete = () => {
      const { deleteHim, id } = this.props;
      deleteHim(id);
    };

    changeText = (event) => {
      const { editQuestion, id } = this.props;
      editQuestion(id, event.target.value);
    };

    render() {
      const { text } = this.props;
      return (
        <div ref="inside">
          <textarea onChange={this.changeText} value={text} />
          <button type="button" onClick={this.clickDelete}> Delete </button>
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
