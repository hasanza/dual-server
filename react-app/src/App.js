import "./App.css";
import React from "react";
import { Nav, Home, Dash, Finance, Careers, Courses } from "./components";
//we use the Router to wrap routes; it uses HTML5 history API to keep track of route history in the React app.
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dash/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const NotFound = () => {
  return <h1>page not found...</h1>;
};

export default App;
