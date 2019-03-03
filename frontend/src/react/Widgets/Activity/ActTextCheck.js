import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

export default class ActTextCheck extends React.PureComponent {
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
    };

    state = {
      user_reponse: [],
    };

    fctChecked = (index_checked, reponse_checked) => {
      const object = this.refs.checkContainer;
      for (let i = 0; i < (object.childElementCount - 1) / 2; i++) {
        if (i == index_checked - 1) {
          this.setState({ user_reponse: reponse_checked });
        } else {
          const checkrefered = this.refs[`elementCheck${i}`];
          checkrefered.unCheck();
        }
      }
    };

    render() {
      const inputs = [];
      for (let i = 0; i < this.props.list_reponse.length; i++) {
        inputs.push(this.props.list_reponse[i].rep);
      }

      return (
        <div id="container reponse" ref="checkContainer">
          <div>
            {this.props.text}
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
