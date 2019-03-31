import React from 'react';
import PropTypes from 'prop-types';

export default class ActTextFieldEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editResponse: PropTypes.func.isRequired,
    };

    updateInputValue = (event) => {
      const { editResponse, id } = this.props;
      editResponse(id, event.target.value);
    };

    render() {
      const { text } = this.props;
      return (
        <div>
          <h1 className="title is-6">
            {text}
          </h1>
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
