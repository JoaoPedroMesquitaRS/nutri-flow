import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

// ROTAS
import dietaRoutes from './routes/dietaRoutes.js';

//MODELOS
import Dieta from './models/Dieta.js';

const app = express(); 
const PORT = process.env.PORT || 3001; app.use(cors()); 

app.use(express.json()); 

app.get('/', (req, res) => { res.send('API está rodando!'); }); 

//
app.use('/dietas', dietaRoutes);

// Associações
const models = { Dieta };
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sincroniza o banco (gera tabelas se ainda não existem)
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado.');
});

app.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`); });