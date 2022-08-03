import { useState } from "react";
import { Provider, useAtom, atom } from "jotai";

import PageContainer from "./components/PageContainer";
import RealmApolloProvider from "./graphql/RealmApolloProvider";
import RealmAppProvider from "./components/RealmProvider";
import Routes from "./components/Routes";

function App() {
  const [closed, setClosed] = useState(true);
  const toggleClosed = () => {
    setClosed(!closed);
  };

  return (
    <Provider>
      <RealmAppProvider appId="clocknwalk-xilyu">
        <RealmApolloProvider>
          <PageContainer closed={closed} toggleClosed={toggleClosed}>
            <Routes />
          </PageContainer>
        </RealmApolloProvider>
      </RealmAppProvider>
    </Provider>
  );
}

export default App;
