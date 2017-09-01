import * as React from "react";

import LinkList from "./components/LinkList";

const defaultProps = [
  {
    id: "1",
    description: "The Coolest GraphQL Backend 😎",
    url: "https://www.graph.cool",
  },
  {
    id: "2",
    description: "The Best GraphQL Client",
    url: "http://dev.apollodata.com/",
  },
];

const App = () => <LinkList links={defaultProps} />;

export default App;
