import React from 'react';
import { instanceOf } from 'prop-types';
import {Cookies, withCookies} from 'react-cookie';
import UserAccountWidget from '../UserAccountWidget/UserAccountWidget';

import logoAndName from '../../../images/LogoTenuGUI.png';

class Header extends React.PureComponent {
        static propTypes = {
          cookies: instanceOf(Cookies).isRequired,
        }

        render() {
          const { cookies } = this.props;
          const userJSON = cookies.get('userJSON');
          if (userJSON !== undefined) {
            return (
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
          }
          return <></>;
        }
}

export default withCookies(Header);
