// RecipeForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const apiUrl = "http://localhost:8000";
  const navigate = useNavigate;
  const userNotFind = () => toast("user Not find");
  const recipePost = () => toast("Recipe posted successfully!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;
    console.log("userId" + userId);

    if (!userId) {
      userNotFind();
      return;
    }
    const newRecipe = { title, image, description, user: userId };
    axios
      .post(`${apiUrl}/new`, newRecipe)
      .then((response) => {
        console.log(response.data);
        recipePost();
        setTimeout(() => navigate("/"), 2000);
      })
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Recipe
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RecipeForm;
