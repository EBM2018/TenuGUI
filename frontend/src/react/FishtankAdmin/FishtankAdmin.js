import React from 'react';

import './FishtankAdmin.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Command from './Command/Command';
import Preview from './Preview/Preview';
import Notification from './Notification/Notification';

export default class FishtankAdmin extends React.PureComponent {
  render() {
    return (
      <>
        <FishtankHeader
          subject="EBM example"
          date="some date"
          my="Mon"
        />
        <ButtonLayout />
        <div id="container">
          <Command id="firstColumn" />

          <Preview id="secondColumn" />

          <Notification />
        </div>
      </>
    );
  }
}
