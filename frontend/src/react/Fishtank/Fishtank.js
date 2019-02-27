import React from 'react';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import ActivityContainer from './ActivityContainer/ActivityContainer';

export default class Fishtank extends React.PureComponent {
  render() {
    return (
      <>
        <FishtankHeader
          subject="EBM example"
          date="some date"
        />
        <ButtonLayout />
        <ActivityContainer />
      </>
    );
  }
}
