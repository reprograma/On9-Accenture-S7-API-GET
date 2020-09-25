//importanto o express.
const express = require('express');

//armazenando a função express() para utilizar os métodos e inicializar o servidor.
const app = express();

//armazenando a porta que o servidor inicializará. 
const porta = 3000;

//importando o listaTarefas
const tarefas = require('./listaTarefas.json');

//@router GET tarefas
//@desc Listar todas as tarefas
//@access Public
app.get('/tarefas', (req, res) =>{
  res.json(tarefas)
})

//Criando o servidor a partir da função listen. 
app.listen(porta, () =>(
 console.log(`Rodando no http://localhost:${porta}`)
))