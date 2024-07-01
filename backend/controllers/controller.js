const Model = require('../models/recipe');

const getRecipes = async (req,res) => {
try {
  let recipes = await Model.find()
  res.json(recipes)
} catch (error) {
  res.status(500).send(error)
}
}

const CreateRecipe = async (req, res) => {
  try {
    const {title, image, description, user} = req.body
    let newRecipe = new Model({title, image, description, user})
  await Model.create(newRecipe)
  res.send('Recipe is create successfully')
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteRecipe = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Model.deleteOne({ _id: id })
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Recipe  not found' })
    }
    res.json({ msg: 'Recipe deleted successfully' })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getUserRecipes = async(req,res) => {
  try {
    const userId = req.params.userId
    const recipes = await Model.find({user: userId})
    res.status(200).send(recipes)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.status(500).send(error)
  }
}




module.exports = {getRecipes, CreateRecipe, deleteRecipe, getUserRecipes}
