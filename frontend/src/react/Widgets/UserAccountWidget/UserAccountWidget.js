import React from 'react';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class UserAccountWidget extends React.PureComponent {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired,
    }

    state = {
      name: '',
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON !== undefined) {
        this.setState({ name: userJSON.name });
      }
    }


    render() {
      const { name } = this.state;
      return (
        <figure className="image is-64x64">
          <img src="../../../images/PhotoProfil.png" alt="MonProfil" />
          <p>{name}</p>
        </figure>
      );
    }
}

export default withCookies(UserAccountWidget);
