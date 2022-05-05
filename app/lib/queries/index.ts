import { gql, graphQLClient } from "~/lib/client";

const fetchSomeData = async () => {
  const query = gql`
    {
      country(code: "GB") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data;
};

export default fetchSomeData;
