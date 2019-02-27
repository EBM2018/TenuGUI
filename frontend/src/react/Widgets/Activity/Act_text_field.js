import React from 'react';
import PropTypes from 'prop-types';

export default class Act_text_field extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      user_reponse: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      fct: PropTypes.func,
    };

    state = {
      user_reponse: 'ini',
    }

    updateInputValue = (evt) => {
      this.setState({
        user_reponse: evt.target.value,
      });
    }

    getResponse = () => this.state.user_reponse

    /*
    useImperativeHandle(ref, () => ({

        getResponse = () => {
            return this.state.user_reponse
        }

    }));
    */
    render() {
      return (
        <div ref="inside">
          <a>
            {' '}
            {this.props.text}
            {' '}
          </a>
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
