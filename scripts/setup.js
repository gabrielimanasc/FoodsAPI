const sequelize = require('../src/config/database');
const Food = require('../src/models/food');

(async () => {
  try {
    // Sincronizar todos os modelos com o banco de dados
    await sequelize.sync({ force: true }); // Use { force: true } para recriar as tabelas
    console.log('Tabelas criadas com sucesso.');

    // Populando com dois alimentos iniciais, incluindo calorias
    await Food.bulkCreate([
      { name: 'Frango', protein: 31, carb: 0, fat: 3, calories: 165 },
      { name: 'Arroz', protein: 2, carb: 28, fat: 0, calories: 130 }
    ]);
    console.log('Dados populados com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar e popular o banco de dados:', error);
  } finally {
    // Fechar a conexão com o banco
    await sequelize.close();
  }
})();


//Código para criação e população de tabelas.
//Para rodar basta digitar no terminal: node scripts/setup.js

