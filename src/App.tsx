import React, { useEffect, useMemo } from "react";
import {
  Route,
  Switch,
  useHistory,
  matchPath,
  useLocation,
} from "react-router-dom";
import { Provider, useAtom, atom } from "jotai";
import * as Realm from "realm-web";

import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import EditStaff from "./pages/EditStaff";
import { useQuery } from "./hooks/query";

export const appAtom = atom(new Realm.App({ id: "clocknwalk-xilyu" }));

function App() {
  const [closed, setClosed] = React.useState(false);
  const toggleClosed = () => {
    setClosed(!closed);
  };
  const query = useQuery();
  const history = useHistory();
  const [app] = useAtom(appAtom);

  useEffect(() => {
    query.get("token") && query.get("tokenId") && emailAuth();
  }, [query]);

  const emailAuth = async () => {
    const token = query.get("token") || "";
    const tokenId = query.get("tokenId") || "";
    await app.emailPasswordAuth
      .confirmUser({ token, tokenId })
      .then(() => {
        history.push("/calendar");
      })
      .catch(() => {
        history.push("/login");
      });
  };

  return (
    <Provider>
      <PageContainer closed={closed} toggleClosed={toggleClosed}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/edit-staff">
            <EditStaff />
          </Route>
        </Switch>
      </PageContainer>
    </Provider>
  );
}

export default App;
