
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0], 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onTaskFormSubmit(formData); 
    setFormData({ text: "", category: categories[0] }); 
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          aria-label="Details"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          aria-label="Category"
        >
          {categories
            .filter((category) => category !== "All") 
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
