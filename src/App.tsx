import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "jotai";
import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
function App() {
  const [closed, setClosed] = React.useState(false);
  const toggleClosed = () => {
    setClosed(!closed);
  };
  return (
    <Provider>
      <PageContainer closed={closed} toggleClosed={toggleClosed}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </PageContainer>
    </Provider>
  );
}

export default App;
