import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowMoreText from "react-show-more-text";
import { Container } from "react-bootstrap";
import "./styles.css";
import {jwtDecode} from "jwt-decode";

const DeleteRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const apiUrl = "http://localhost:8000";

  useEffect(() => {
    const fetchRecipes = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
          console.log('decodeToken ' + userId);
          const response = await axios.get(`${apiUrl}/allRecipes/${userId}`);
          console.log(response.data);
          setRecipes(response.data);
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      } else {
        console.log("No token found");
      }
    };
    
    fetchRecipes();
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    // This effect runs every time the `recipes` array is updated
    console.log("Recipes updated", recipes);
  }, [recipes]);

  const deleteRecipe = (id) => {
    axios
      .delete(`${apiUrl}/delete/${id}`)
      .then(() => {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
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
