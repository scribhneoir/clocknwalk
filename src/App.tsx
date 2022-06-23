import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider, useAtom, atom } from "jotai";
import * as Realm from "realm-web";

import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import EditStaff from "./pages/EditStaff";

export const appAtom = atom(new Realm.App({ id: "clocknwalk-xilyu" }));

function App() {
  const [closed, setClosed] = useState(true);
  const toggleClosed = () => {
    setClosed(!closed);
  };
  return (
    <Provider>
      <PageContainer closed={closed} toggleClosed={toggleClosed}>
        <Switch>
          <Route path={"/login"}>
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
