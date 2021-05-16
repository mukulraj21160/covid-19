import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Covid19Tracker from "./Components/Covid19Tracker";
import Theme from "./Theme/theme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Covid19Tracker />
      </ThemeProvider>
    </div>
  );
};

export default App;
