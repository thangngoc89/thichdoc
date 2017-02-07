import React, { PropTypes as p } from "react";

import { setToken, checkSecret, extractInfoFromHash } from "../../utils/auth";

export default class SignedIn extends React.Component {
  static propTypes = {
    url: p.object.isRequired
  };

  componentDidMount() {
    const { token, secret } = extractInfoFromHash();
    if (!checkSecret(secret) || !token) {
      console.error("Something happened with the Sign In request");
    }
    setToken(token);
    this.props.url.push("/");
  }
  render() {
    return null;
  }
}
