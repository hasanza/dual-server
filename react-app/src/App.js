import "./App.css";
import React from "react";
import {
  Nav,
  Home,
  Dash,
  Finance,
  StudentLife,
  Careers,
  Courses,
} from "./components";
//we use the Router to wrap routes; it uses HTML5 history API to keep track of route history in the React app.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(187,29,34,1)",
    },
    secondary: {
      main: "rgba(88,89,91,1)"
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

const NotFound = () => {
  return <h1>page not found...</h1>;
};

export default App;
