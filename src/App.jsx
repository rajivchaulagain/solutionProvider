import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home1 } from "./components/Home1";
import { List } from "./components/List";
import { Blog } from "./components/Blog";
import { SignUpForm } from "./components/SignUpForm";

function App() {
  // const [count, setCount] = useState(0)h

  return (
    <div className="app">
      <Router>
        <NavBar />
   
        <Routes>
          <Route exact path="/Home1" Component={Home1} />
          <Route exact path="/List"  Component={List} />
          <Route exact path="/Blog"  Component={Blog} />
          <Route exact path="/SignUp"  Component={SignUpForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
