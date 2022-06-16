import React from "react";
import { Route } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
function App() {
  const [closed, setClosed] = React.useState(false);
  const toggleClosed = () => {
    setClosed(!closed);
  };
  return (
    <>
      <PageContainer closed={closed} toggleClosed={toggleClosed}>
        <Route path="*">
          <Login />
        </Route>
      </PageContainer>
    </>
  );
}

export default App;
