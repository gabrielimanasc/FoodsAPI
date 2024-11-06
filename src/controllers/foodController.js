const Food = require('../models/food');

//Retorna todos os alimentos;
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Cria um alimento
exports.createFood = async (req, res) => {
  try {
    const { name, protein, carb, fat, calories } = req.body;
    const food = await Food.create({ name, protein, carb, fat, calories });
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Selecionar um alimento por ID
exports.getFoodById = async (req, res) => {
    try {
      const { id } = req.params;
      const food = await Food.findByPk(id);
      if (food) {
        res.json(food);
      } else {
        res.status(404).json({ message: 'Food not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Editar um alimento por ID
  exports.updateFood = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, protein, carb, fat, calories } = req.body;
      const food = await Food.findByPk(id);
      if (food) {
        await food.update({ name, protein, carb, fat, calories });
        res.json(food);
      } else {
        res.status(404).json({ message: 'Food not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Excluir um alimento por ID
  exports.deleteFood = async (req, res) => {
    try {
      const { id } = req.params;
      const food = await Food.findByPk(id);
      if (food) {
        await food.destroy();
        res.status(204).send(); // No content
      } else {
        res.status(404).json({ message: 'Food not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
