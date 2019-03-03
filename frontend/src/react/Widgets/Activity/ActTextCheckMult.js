import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

export default class ActTextCheckMult extends React.PureComponent {
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
        if (checkrefered.isChecked) {
          new_reponse.push(i);
            console.log(i);
        }
          //checkrefered.unCheck();
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
          <div>
            {' '}
            {this.props.text}
            {' '}
            mult
          </div>
          {inputs.map((reponse, index) => (
            <CheckBox
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
