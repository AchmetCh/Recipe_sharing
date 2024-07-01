// RecipeList.js

import React, { useEffect, useId, useState } from "react";
import axios from "axios";
import ShowMoreText from "react-show-more-text";
import { Container } from "react-bootstrap";
import "./styles.css";

const DeleteRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const apiUrl = "http://localhost:8000";

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;
    
    if (userId) {
      axios
        .get(`${apiUrl}/allRecipes/${userId}`)
        .then((response) => setRecipes(response.data))
        .catch((error) => console.error("Error fetching recipes:", error));
    } else {
      console.log("No user found");
    }
  }, [recipes]);

  const deleteRecipe = (id) => {
    axios
      .delete(`${apiUrl}/delete/${id}`)
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => console.log("Error deleting recipe:", error));
  };

  return (
    <div>
      <h2 className="mt-4">Recipes</h2>
      <Container className="d-flex gap-5">
        {recipes.map((recipe) => (
          <div
            className="card mt-4 d-flex justify-content-center "
            key={recipe._id}
          >
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="recipe-description"
              anchorClass="show-more-link"
              expanded={false}
              width={400}
            >
              {recipe.description}
            </ShowMoreText>
            <button
              variant="danger"
              className="mt-2 btn btn-danger"
              onClick={() => deleteRecipe(recipe._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default DeleteRecipe;
