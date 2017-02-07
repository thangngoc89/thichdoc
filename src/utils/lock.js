import { setSecret } from "./auth";
import Auth0Lock from "auth0-lock";
import config from "../config.json";

import uuid from "uuid";

const getLock = options => {
  return new Auth0Lock(
    config.AUTH0_CLIENT_ID,
    config.AUTH0_CLIENT_DOMAIN,
    options
  );
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = container => {
  const secret = uuid.v4();
  setSecret(secret);
  return {
    closable: true,
    auth: {
      responseType: "token",
      redirectUrl: `${getBaseUrl()}/auth/signed-in`,
      params: {
        scope: "openid profile email",
        state: secret
      }
    },
    language: "vi"
  };
};

export const show = container => getLock(getOptions(container)).show();
export const logout = () => getLock().logout({ returnTo: getBaseUrl() });
