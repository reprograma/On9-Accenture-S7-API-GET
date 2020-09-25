const express = require('express');
const app = express();
const porta = 3000;

const biografias = require('./rotas/biografias')

app.use('/api/',biografias)

app.use(express.json())

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`)
})