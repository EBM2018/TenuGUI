import React from 'react';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import ActivityContainer from './ActivityContainer/ActivityContainer';

const Fishtank = () => (
  <>
    <FishtankHeader
      subject="EBM example"
      date="some date"
    />
    <ButtonLayout />
    <ActivityContainer />
  </>
);

export default Fishtank;
