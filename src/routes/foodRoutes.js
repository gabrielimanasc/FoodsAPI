const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.getAllFoods);  // Rota para obter todos os alimentos
router.post('/', foodController.createFood);  // Rota para criar um alimento novo
router.get('/:id', foodController.getFoodById); // Rota para obter um alimento por ID
router.put('/:id', foodController.updateFood);  // Rota para editar um alimento por ID
router.delete('/:id', foodController.deleteFood); // Rota para excluir um alimento por ID

module.exports = router;
