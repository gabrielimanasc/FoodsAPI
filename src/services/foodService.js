const Food = require('../models/food');

exports.findFoodById = async (id) => {
  return Food.findByPk(id);
};

exports.createNewFood = async (data) => {
  return Food.create(data);
};
