import React from "react";

const ThemeContext = React.createContext();

const { Provider } = ThemeContext;

export { Provider as ThemeProvider };

export default ThemeContext;
