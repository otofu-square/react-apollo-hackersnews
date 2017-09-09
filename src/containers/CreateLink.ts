import { gql, graphql } from "react-apollo";
import { MutationFunc } from "react-apollo";

import CreateLink from "../components/CreateLink";
import { ILink } from "../models/Link";

interface IResponse extends ILink {}

interface IInputProps {}

interface IProps {
  createLinkMutation: MutationFunc<ILink>;
}

export const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export default graphql<IResponse, IInputProps, IProps>(CREATE_LINK_MUTATION, {
  name: "createLinkMutation",
})(CreateLink);
