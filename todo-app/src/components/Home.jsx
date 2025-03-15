import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "25%", borderRight: "1px solid #ddd", padding: "20px" }}
      >
        <h2>Todo App</h2>
        <nav>
          <ul>
            <li>
              <Link to="/search">Search Todos</Link>
            </li>
            <li>
              <Link to="/addTodo">Add Todo</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div style={{ width: "75%", padding: "20px" }}>
        <h2>Welcome to the Todo App</h2>
        <p>Select a page from the left to get started.</p>
      </div>
    </div>
  );
};

export default Home;
