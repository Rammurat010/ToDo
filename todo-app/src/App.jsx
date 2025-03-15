import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import "./app.css";

import "./components/AddTodo.css";
import "./components/SearchTodo.css";
const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="todo-box">
          <SearchTodo />
        </div>

        <div className="todo-box">
          <AddTodo />
        </div>
      </div>
    </Router>
  );
};

export default App;
