import AllRoutes from "./route";
import Layout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light") {
      setTheme("dark");
    }
  };

  // set theme mode
  useEffect(() => {
    localStorage.setItem("data-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider value={{ theme, themeToggler }}>
        <Router>
          <Layout>
            <AllRoutes />
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
