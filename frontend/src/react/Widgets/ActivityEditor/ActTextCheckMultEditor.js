import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxEditor from './CheckBoxEditor';

export default class ActTextCheckMultEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      list_reponse: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editQuestion: PropTypes.func.isRequired,
      editReponse: PropTypes.func.isRequired,
    };

    state = {
      text: this.props.text,
    };

    changeText = (event) => {
      this.setState({ text: event.target.value });
      this.props.editQuestion(this.props.id, event.target.value);
    };

    render() {
      const inputs = [];
      for (let i = 0; i < this.props.list_reponse.length; i++) {
        inputs.push(this.props.list_reponse[i].rep);
      }

      return (
        <div id="container reponse" ref="checkContainer">
          <div>
            <textarea onChange={this.changeText} value={this.state.text} />
          </div>
          {inputs.map((reponse, index) => (
            <CheckBoxEditor
              ref={`elementCheck${index}`}
              key={index}
              id={index}
              id_container={this.props.id}
              reponse={reponse}
              editReponse={this.props.editReponse}
            />
          ))}
        </div>
      );
    }
}
