import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Dashboard,
  PrivateRoute,
  Login,
  PageNotFound,
  AuthWrapper,
} from "./pages";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {/* Switch => render the first child*/}
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <PageNotFound />
            {/*this is always match, without Switch login and dashboard will be showned too*/}
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
