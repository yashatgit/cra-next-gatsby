import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import ThemeProvider from "./common/ThemeProvider";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider>
        <div>App built using CRA</div>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default App;
