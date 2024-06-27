// RecipeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const apiUrl = 'http://localhost:8000';

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, image, description };
    axios.post(`${apiUrl}/new`, newRecipe)
      .then(response => console.log('Recipe added:', response.data))
      .catch(error => console.error('Error adding recipe:', error));
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
