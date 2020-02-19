import React from "react";

import { LightTheme, BaseProvider, styled, useStyletron } from "baseui";
import { StatefulInput } from "baseui/input";
import { Button } from "baseui/button";

const App = styled("div", { textAlign: "center" });

const AppHeader = styled("header", {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
});

export default function ThemeProvider({ children }) {
  const [css] = useStyletron();
  return (
    <BaseProvider theme={LightTheme}>
      <App>
        <AppHeader>
          {children}
          <a
            className={css({ color: "#61dafb" })}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className={css({ width: "300px", margin: "16px 0" })}>
            <StatefulInput />
          </div>
          <Button>Hello World?</Button>
        </AppHeader>
      </App>
    </BaseProvider>
  );
}
