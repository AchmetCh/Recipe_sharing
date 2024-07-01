// RecipeList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import { Container } from 'react-bootstrap'; 
import './styles.css';

const apiUrl = 'http://localhost:8000';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/allRecipes`)
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, [recipes]);

  return (
    <div >
       <h2 className="mt-4">Recipes</h2>
      <Container className='d-flex flex-wrap gap-2'>
       
        {recipes.map(recipe => (
          <div className="myCard card mt-2 d-flex justify-content-center " key={recipe._id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3 className='fs-3'>{recipe.title}</h3>
            <ShowMoreText
              lines={1}
              more="Show more"
              less="Show less"
              className="recipe-description fs-4 wrapper-class-2 showMore"
              anchorClass="show-more-link"
             
              expanded={false}
              width={800}
            >
              {recipe.description}
            </ShowMoreText>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default RecipeList;
