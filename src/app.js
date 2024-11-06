const express = require('express');
const foodRoutes = require('./routes/foodRoutes');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use('/foods', foodRoutes);

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida...'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = app;
