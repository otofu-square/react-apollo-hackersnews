import { gql, graphql } from "react-apollo";

import LinkList from "../components/LinkList";

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export default graphql(ALL_LINKS_QUERY, {
  name: "allLinksQuery",
})(LinkList);
