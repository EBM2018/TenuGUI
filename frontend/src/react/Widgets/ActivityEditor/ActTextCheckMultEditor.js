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
    listResponse: PropTypes.arrayOf([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    editQuestion: PropTypes.func.isRequired,
    editCheckBox: PropTypes.func.isRequired,
    deleteHim: PropTypes.func.isRequired,
    newCheckBox: PropTypes.func.isRequired,
    deleteCheckBox: PropTypes.func.isRequired,
  };

  changeText = (event) => {
    const { editQuestion, id } = this.props;
    editQuestion(id, event.target.value);
  };

  clickDelete = () => {
    const { deleteHim, id } = this.props;
    deleteHim(id);
  };

  editResponseLoc = (a, b, c) => { // juste to force update the component
    const { editCheckBox } = this.props;
    editCheckBox(a, b, c);
    this.forceUpdate();
  };

  newCheckBoxLoc = () => {
    const { newCheckBox, id } = this.props;
    newCheckBox(id);
    this.forceUpdate();
  };

  deleteCheckBoxLoc = () => {
    const { deleteCheckBox, id } = this.props;
    deleteCheckBox(id);
    this.forceUpdate();
  };

  render() {
    const inputs = [];
    const { listResponse, text, id } = this.props;
    for (let i = 0; i < listResponse.length; i += 1) {
      inputs.push(listResponse[i].rep);
    }

    return (
      <div id="container reponse">
        <div>
          <textarea onChange={this.changeText} value={text} />
          <button type="button" onClick={this.clickDelete}> Delete </button>
        </div>
        {inputs.map((response, index) => (
          <CheckBoxEditor
            id={index}
            idContainer={id}
            response={response}
            editResponse={this.editResponseLoc}
          />
        ))}
        <button type="button" onClick={this.newCheckBoxLoc}> New Checkbox </button>
        <button type="button" onClick={this.deleteCheckBoxLoc}> Delete last Checkbox </button>
      </div>
    );
  }
}
