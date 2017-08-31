import * as React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from "react-apollo";
import * as ReactDOM from "react-dom";

import App from "./App";

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHCOOL_ENDPOINT,
});

const client = new ApolloClient({
  networkInterface,
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
