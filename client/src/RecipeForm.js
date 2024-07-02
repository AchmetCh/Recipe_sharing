// RecipeForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {jwtDecode} from "jwt-decode"; // Correct import for jwtDecode

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const apiUrl = "http://localhost:8000";
  const navigate = useNavigate(); // Correct usage of useNavigate
  const userNotFind = () => toast("User Not found");
  const recipePost = () => toast("Recipe posted successfully!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        const newRecipe = { title, image, description, user: userId };
        axios.post(`${apiUrl}/new`, newRecipe).then((response) => {
          console.log(response.data);
          recipePost();
          setTimeout(() => navigate("/"), 2000);
        });
      } catch (error) {
        userNotFind();
        console.error("Error decoding token:", error);
      }
    } else {
      userNotFind();
      console.log("No token found");
    }
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
