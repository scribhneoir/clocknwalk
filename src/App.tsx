import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider, useAtom, atom } from "jotai";
import * as Realm from "realm-web";

import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import EditStaff from "./pages/EditStaff";
import RealmApolloProvider from "./graphql/RealmApolloProvider";
export const appAtom = atom(new Realm.App({ id: "clocknwalk-xilyu" }));
export const userAtom = atom((get) => get(appAtom).currentUser);

function App() {
  const [closed, setClosed] = useState(true);
  const toggleClosed = () => {
    setClosed(!closed);
  };
  const [user] = useAtom(userAtom);
  return (
    <Provider>
      <RealmApolloProvider>
        <PageContainer closed={closed} toggleClosed={toggleClosed}>
          <Switch>
            {user ? (
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
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            )}
          </Switch>
        </PageContainer>
      </RealmApolloProvider>
    </Provider>
  );
}

export default App;
