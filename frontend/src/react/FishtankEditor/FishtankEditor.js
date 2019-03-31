import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import ActivityEditor from '../Widgets/ActivityEditor/ActivityEditor';

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      console.log(userJSON);
      if (userJSON === undefined) {
        const { history } = this.props;
        console.log('retour');
        history.push('/');
      }
    }

    close = () => {
      const { history } = this.props;
      history.push('./Dashboard');
    }

    render() {
      return (
        <div className="bg-img bg-color">
          <ActivityEditor
            close={this.close}
          />
        </div>
      );
    }
}
/*
<>
          <FishtankHeader
            subject="EBM example"
            date="some date"
          />
          <ButtonLayout
            fishtankId={fishtankId}
          />
          <button
            type="button"
            onClick={this.tryConnexion}
            hidden={connected}
          >
              Chercher un Fishtank
          </button>
          <ActivityContainer
            fishtankId={fishtankId}
          />
        </>
 */
export default withCookies(Fishtank);
