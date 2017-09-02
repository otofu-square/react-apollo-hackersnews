import { gql, graphql, QueryProps } from "react-apollo";

import LinkList from "../components/LinkList";
import { ILink } from "../models/Link";

interface IResponse {
  allLinks: ILink[];
}

interface IInputProps {}

interface IProps {
  allLinksQuery: IResponse & QueryProps;
}

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export default graphql<IResponse, IInputProps, IProps>(ALL_LINKS_QUERY, {
  name: "allLinksQuery",
})(LinkList);
