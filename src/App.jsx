import React from "react";
import { Wrapper } from "./components/wrapper";
import { APIContextProvider } from "./context/useApi";

const App = () => {
  return (
    <APIContextProvider>
      <Wrapper />;
    </APIContextProvider>
  );
};

export default App;
