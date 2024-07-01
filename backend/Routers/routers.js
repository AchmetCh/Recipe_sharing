const express = require('express');
const router = express.Router();
const {getRecipes, CreateRecipe, deleteRecipe, getUserRecipes} = require('../controllers/controller');

// Routes for menus
router.get('/allRecipes', getRecipes)
router.post('/new', CreateRecipe);
router.delete('/delete/:id', deleteRecipe)
router.get('/allRecipes/:userId', getUserRecipes)


module.exports = router;







