import * as React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from "react-apollo";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHCOOL_ENDPOINT,
});

const client = new ApolloClient({
  networkInterface,
});

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
