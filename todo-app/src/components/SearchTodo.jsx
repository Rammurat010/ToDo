import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchTodo.css";

const SearchTodo = () => {
  const [todos, setTodos] = useState([]); // State to store all todos
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filteredTodos, setFilteredTodos] = useState([]); // State to store filtered todos

  // Fetch all todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todos");
        setTodos(response.data);
        setFilteredTodos(response.data); // Initialize filteredTodos with all todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter todos based on the search term
    const filtered = todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(term.toLowerCase()) ||
        todo.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div>
      <h1>Search Todos</h1>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTodo;
