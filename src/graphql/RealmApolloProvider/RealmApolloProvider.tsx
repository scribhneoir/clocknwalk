import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useRealmApp } from "../../components/RealmProvider/RealmProvider";
// Create an ApolloClient that connects to the provided Realm.App's GraphQL API
const createRealmApolloClient = (app: Realm.App, user: Realm.User | null) => {
  const link = new HttpLink({
    // Realm apps use a standard GraphQL endpoint, identified by their App ID
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app?.id}/graphql`,
    // A custom fetch handler adds the logged in user's access token to GraphQL requests
    fetch: async (uri, options) => {
      if (!user) {
        throw new Error(`Must be logged in to use the GraphQL API`);
      }
      const headers = options?.headers
        ? new Headers(options.headers)
        : new Headers();
      // Refreshing a user's custom data also refreshes their access token
      await user.refreshCustomData();
      // The handler adds a bearer token Authorization header to the otherwise unchanged request
      if (headers.has("Authorization")) {
        headers.set("Authorization", `Bearer ${user.accessToken}`);
      }
      return fetch(uri, options);
    },
  });

  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
};

export default function RealmApolloProvider(props: { children: JSX.Element }) {
  const { app, currentUser } = useRealmApp();
  const [client, setClient] = useState(
    createRealmApolloClient(app, currentUser)
  );
  useEffect(() => {
    return setClient(createRealmApolloClient(app, currentUser));
  }, [app]);
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
