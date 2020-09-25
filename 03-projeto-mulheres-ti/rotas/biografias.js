const express = require('express');
const router = express.Router()
const biografias = require('../biografias.json');

//@route GET /biografias
//@desc Biografias 
//@access Public
router.get('/biografias', (req, res) =>{
  res.json(biografias)
})

//@route GET /biografias/:id
//@desc Retorna uma biografia
//@access Public
router.get('/biografias/:id', (req, res) => {
  const { id } = req.params;
  const  biografia =  biografias.find(bio => bio.id == id)

  if(!biografia) return res.status(204).json();

  res.json(biografia)
});

//@route GET /biografias?nome=
//@desc Retorna uma biografia pelo nome escrito, 
//exemplo: http://localhost:3000/biografias?nome=Edith Clarke
//@access Public
router.get('/biografias',  (req, res) =>{
  const { nome } = req.query;
 
  if(!nome) return res.status(204).json();
  try{
    const biografia = biografias.find(bio => bio.nome == nome);
      res.json(biografia)
  } catch(error){
      res.status(404).json({ error: "Nome não encontrado"})
  }
  
})

module.exports = router;