const express = require('express');
const router = express.Router();
const {getRecipes, CreateRecipe, deleteRecipe} = require('../controllers/controller');

// Routes for menus
router.get('/allRecipes', getRecipes)
router.post('/new', CreateRecipe);
router.delete('/delete/:id', deleteRecipe)


module.exports = router;







