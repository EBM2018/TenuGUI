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
      listTextResponse: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editResponse: PropTypes.func.isRequired,
    };

    state = {
      checkState: [],
    }

    constructor() {
      super();
      this.activityContainer = React.createRef();
    }

    componentWillMount() {
      const newCheckState = [];
      const { listTextResponse } = this.props;
      for (let i = 0; i < listTextResponse.length; i += 1) {
        newCheckState.push(false);
      }
      this.setState({ checkState: newCheckState });
    }

    fctChecked = (index) => {
      const { checkState } = this.state;
      const { editResponse, id } = this.props;
      if (checkState[index] === true) {
        checkState[index] = false;
      } else {
        checkState[index] = true;
        for (let i = 0; i < checkState.length; i += 1) {
          if (i !== index) {
            checkState[i] = false;
          }
        }
      }
      this.setState({ checkState });
      editResponse(id, this.findResponseUnique());
      this.forceUpdate();
    };

    findResponseUnique = () => {
      const { checkState } = this.state;
      const { listTextResponse } = this.props;
      for (let i = 0; i < checkState.length; i += 1) {
        if (checkState[i] === true) {
          return listTextResponse[i].rep;
        }
      }
      return '';
    }

    render() {
      const inputs = [];
      const { listTextResponse, text } = this.props;
      for (let i = 0; i < listTextResponse.length; i += 1) {
        inputs.push(listTextResponse[i].rep);
      }

      const { checkState } = this.state;
      return (
        <div>
          <h1 className="title is-6">
            {text}
          </h1>
          {inputs.map((response, index) => (
            <CheckBox
              id={index}
              response={response}
              check={checkState[index]}
              fctChecked={this.fctChecked}
            />
          ))}
        </div>
      );
    }
}
