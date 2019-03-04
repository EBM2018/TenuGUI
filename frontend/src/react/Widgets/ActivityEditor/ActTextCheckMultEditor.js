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
      list_reponse: PropTypes.array.isRequired,
      editQuestion: PropTypes.func.isRequired,
      editCheckBox: PropTypes.func.isRequired,
      deleteHim: PropTypes.func.isRequired,
      newCheckBox: PropTypes.func.isRequired,
      deleteCheckBox: PropTypes.func.isRequired,
    };

    changeText = (event) => {
      this.props.editQuestion(this.props.id, event.target.value);
    };

    clickDelete = () => {
      this.props.deleteHim(this.props.id);
    };

    editReponseLoc = (a, b, c) => { // juste to force update the component
      this.props.editCheckBox(a, b, c);
      this.forceUpdate();
    };

    newCheckBoxLoc = () => {
      this.props.newCheckBox(this.props.id);
      this.forceUpdate();
    };

    deleteCheckBoxLoc = () => {
      this.props.deleteCheckBox(this.props.id);
      this.forceUpdate();
    };

    render() {
      const inputs = [];
      for (let i = 0; i < this.props.list_reponse.length; i++) {
        inputs.push(this.props.list_reponse[i].rep);
      }

      return (
        <div id="container reponse" ref="checkContainer">
          <div>
            <textarea onChange={this.changeText} value={this.props.text} />
            <button onClick={this.clickDelete}> Delete </button>
          </div>
          {inputs.map((reponse, index) => (
            <CheckBoxEditor
              ref={`elementCheck${index}`}
              key={index}
              id={index}
              id_container={this.props.id}
              reponse={reponse}
              editReponse={this.editReponseLoc}
            />
          ))}
          <button onClick={this.newCheckBoxLoc}> New Checkbox </button>
          <button onClick={this.deleteCheckBoxLoc}> Delete last Checkbox </button>
        </div>
      );
    }
}
