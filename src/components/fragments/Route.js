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
  username: p.string.isRequired,
  children: p.node.isRequired
};

export { RouteUser };

const RouteBook = ({ id, slug, children }) => {
  return (
    <Link href={`/book?id=${id}`} as={`/b/${id}/`}>
      {children}
    </Link>
  );
};

RouteBook.propTypes = {
  id: p.string.isRequired,
  slug: p.string,
  children: p.node.isRequired
};

export { RouteBook };
