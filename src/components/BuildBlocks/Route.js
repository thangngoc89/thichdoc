import React, { PropTypes as p } from "react";
import Link from "next/link";

const RouteUser = ({ username, children }) => {
  return (
    <Link href={`/profile?username=${username}`} as={`/u/${username}`}>
      {children}
    </Link>
  );
};

RouteUser.propTypes = {
  username: p.string.isRequired
};

export { RouteUser };
