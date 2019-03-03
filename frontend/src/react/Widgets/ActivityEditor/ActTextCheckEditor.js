import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxEditor from './CheckBoxEditor';

export default class ActTextCheckEditor extends React.PureComponent {
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

    render() {
      const inputs = [];
      for (let i = 0; i < this.props.list_reponse.length; i++) {
        inputs.push(this.props.list_reponse[i].rep);
      }

      return (
        <div id="container reponse" ref="checkContainer">
            <div>
              <textarea>
                {this.props.text}
              </textarea>
            </div>
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
