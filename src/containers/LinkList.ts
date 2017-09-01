import { gql, graphql } from "react-apollo";

import LinkList, { IProps } from "../components/LinkList";
import { ILink } from "../models/Link";

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
})(LinkList as any);
