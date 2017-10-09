import { compose, gql, graphql } from "react-apollo";

import Login from "../components/Login";

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $passowrd: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

export default compose(
  graphql(CREATE_USER_MUTATION, { name: "createUserMutation" }),
  graphql(SIGNIN_USER_MUTATION, { name: "signinUserMutation" }),
)(Login);
