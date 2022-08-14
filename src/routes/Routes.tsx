import { Redirect, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Calendar from "../pages/Calendar";
import EditStaff from "../pages/EditStaff";
import { useRealmApp } from "../components/RealmProvider/RealmProvider";

function Routes() {
  const app = useRealmApp();

  if (app.currentUser) {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/calendar" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/edit-staff">
          <EditStaff />
        </Route>
        <Route path="*">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
