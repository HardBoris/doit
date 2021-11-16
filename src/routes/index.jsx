import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default Routes;
