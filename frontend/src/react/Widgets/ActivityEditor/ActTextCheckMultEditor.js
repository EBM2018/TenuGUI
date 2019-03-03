import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxEditor from './CheckBoxEditor';

export default class ActTextCheckMultEditor extends React.PureComponent {
    static propTypes = {
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      list_reponse: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    };

    state = {
      user_reponse: '',
    }

    fctChecked = (index_checked, reponse_checked) => {
      const object = this.refs.checkContainer;
      const new_reponse = [];
      for (let i = 0; i < (object.childElementCount - 1) / 2; i++) {
        const checkrefered = this.refs[`elementCheck${i}`];
        if (checkrefered.isChecked()) {
          new_reponse.push(i);
        }
      }
      this.setState({ user_reponse: new_reponse });
      console.log(new_reponse);
    }

    render() {
      const inputs = [];
      for (let i = 0; i < this.props.list_reponse.length; i++) {
        inputs.push(this.props.list_reponse[i].rep);
      }

      return (
        <div id="container reponse" ref="checkContainer">
          <textarea>
            {this.props.text}
          </textarea>
          {inputs.map((reponse, index) => (
            <CheckBoxEditor
              ref={`elementCheck${index}`}
              key={index}
              id={index}
              reponse={reponse}
              fctChecked={this.fctChecked}
            />
          ))}
        </div>
      );
    }
}
