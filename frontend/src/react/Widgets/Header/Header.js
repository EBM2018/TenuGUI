import React from 'react';
import UserAccountWidget from '../UserAccountWidget/UserAccountWidget';

import logoAndName from '../../../images/LogoTenuGUI.png';

const Header = () => (
  <header>
    <div className="columns add-margin">
      <div className="column" />
    </div>
    <div className="columns add-margin">

      <div className="column is-2">
        <figure className="image">
          <img src={logoAndName} alt="TenuGUI" />
        </figure>
      </div>


      <div className="column is-8" />
      <div className="column">
        <UserAccountWidget />
      </div>
    </div>
  </header>
);

export default Header;
