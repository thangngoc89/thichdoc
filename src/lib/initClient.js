import ApolloClient, { createNetworkInterface } from "apollo-client";

let apolloClient = null;

function createClient(headers) {
  let uri;
  if (process.env.NODE_ENV === "production") {
    uri = "https://thichdoc.com/graphql";
  } else {
    uri = "http://localhost:4000/graphql";
  }

  return new ApolloClient({
    ssrMode: !process.browser,
    dataIdFromObject: result => {
      if (result.id && result.__typename) {
        return result.__typename + result.id;
      }

      // Make sure to return null if this object doesn't have an ID
      return null;
    },
    networkInterface: createNetworkInterface({
      uri,
      opts: {
        credentials: "same-origin"
        // Pass headers here if your graphql server requires them
      }
    })
  });
}

export const initClient = headers => {
  if (!process.browser) {
    return createClient(headers);
  }
  if (!apolloClient) {
    apolloClient = createClient(headers);
  }
  return apolloClient;
};
