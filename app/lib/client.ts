import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://countries.trevorblades.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: "Bearer MY_TOKEN",
  },
});

export { gql, graphQLClient };
