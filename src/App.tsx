import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Header from "./components/Header";
import CreateLink from "./containers/CreateLink";
import LinkList from "./containers/LinkList";
import Login from "./containers/Login";

const App = () => (
  <div className="center w85">
    // Avoid typing error on TS
    <Header {...{} as RouteComponentProps<{}>} />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/create" component={CreateLink} />
        <Route exact path="/" component={LinkList} />
      </Switch>
    </div>
  </div>
);

export default App;
