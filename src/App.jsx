import { useState } from "react";
import "./App.css";
import { NavBar } from "./navbar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home1 } from "./components/Home1";
import { List } from "./list/List";
import { Blog } from "./blog/Blog";
import { SignUpForm } from "./signup/SignUpForm";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <NavBar />
   
        <Routes>
          <Route exact path="/" Component={Home1} />
          <Route exact path="/List"  Component={List} />
          <Route exact path="/Blog"  Component={Blog} />
          <Route exact path="/SignUp"  Component={SignUpForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
