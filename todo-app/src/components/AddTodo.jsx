import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

// Reusable Input Component
const InputField = ({ type, placeholder, value, onChange, required }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

// Reusable Button Component
const SubmitButton = ({ label }) => <button type="submit">{label}</button>;

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract plain text from the description (remove HTML tags)
    const plainTextDescription = description.replace(/<[^>]*>/g, "");

    const newTodo = { title, description: plainTextDescription };

    try {
      await axios.post("http://localhost:5000/api/todos", newTodo);
      navigate("/todoList"); // Redirect to the todo list page
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Define the formats for the rich text editor
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  // Define the modules for the rich text editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          formats={formats}
          placeholder="Description"
        />
        <SubmitButton label="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
