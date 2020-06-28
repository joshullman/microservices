import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: createHttpLink({
    credentials: "include",
    uri: process.env.SERVICES_URI + "/graphql",
  }),
});

export default client;
