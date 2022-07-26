require("dotenv").config();
const Abrigo = require('../models/abrigosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const { auth } = require("./autenticacao");

const createAbrigo = async(req, res) => {
  try {    
    let {name, address, contact, description, forms_of_donation, email, password, type} = req.body

    if (!email || !password || !name) {
      res.status(422).send({message: 'Cadastro inválido: alguns campos obrigatórios não foram preenchidos'});
    }
    
    const senhaComHash = bcrypt.hashSync(req.body.password, 10)
    password = senhaComHash

    const newAbrigo = new Abrigo({name, address, contact, description, forms_of_donation, email, password, type})
    const savedAbrigo = await newAbrigo.save()

    res.status(201).json(savedAbrigo)
    
  } catch(error) {    
    res.status(500).json({message: error.message})
  }
}

const loginAbrigo = (req, res) => {
  Abrigo.findOne({ email: req.body.email }, (err, abrigo) => {
  if (err) {
    return res.status(500).send({ message: err.message });
  };
  if (!abrigo) {
    return res.status(404).send('Não existe abrigo cadastrado com esse email');
  };

  const password = bcrypt.compareSync(req.body.password, abrigo.password);
  if (!password) {
    return res.status(403).send('Acesso negado: senha incorreta');
  };

  const token = jwt.sign({ email: abrigo.email, type: abrigo.type }, SECRET);
  return res.status(201).send({token});
});
};

const findAllAbrigos = async(req, res) => {  
  Abrigo.find((err, abrigo) => {
    if(err) {
      res.status(424).send({message: err.message})
    }
    res.status(200).send(abrigo)
  })  
}

const findByName = async(req, res) => {  

  const {name} = req.query  

  Abrigo.find({ name: name}, (err, abrigo) => {
    if(err){      
      res.status(424).send({message: err.message})
    }
    res.status(200).send(abrigo)    
  })  
}

const findById = async(req, res) => {
  try {    
    const findAbrigo = await Abrigo.findById(req.params.id)    

    if(!findAbrigo) {
      res.status(404).send('Id não encontrado')
    }

    res.status(200).send(findAbrigo)

  } catch (err) {
    res.status(500).send({message: err.message})
  } 

}

const updateAbrigo = async (req, res) => {

  const token = auth(req, res);
  jwt.verify(token, SECRET, async (err, user) => {
    console.log('user: ', user)
    if (err) {
      return res.status(403).send("Token inválido!");      
    } else if(user.type !== 'abrigo') {
      return res.status(401).send("Falied! Voce precisa ser um abrigo para cadastrar pet");
    }

    try {    
        const {name, address, contact, description, forms_of_donation} = req.body            
      
        const update = await Abrigo
        .findByIdAndUpdate(req.params.id, {name, address, contact, description, forms_of_donation}) 
        
        if(!update) {
          res.status(404).send('Id não encontrado')
        }        
        
        res.status(201).send({update})

      } catch(err) {
        res.status(500).send({message: err.message})    
    }
  })
}


const deleteAbrigo = async(req, res) => {

  const token = auth(req, res);
  jwt.verify(token, SECRET, async (err, user) => {
    console.log('user: ', user)
    if (err) {
      return res.status(403).send("Token inválido!");      
    } else if(user.type !== 'abrigo') {
      return res.status(401).send("Falied! Voce precisa ser um abrigo para cadastrar pet");
    }

    try {
      const {id} = req.params  
      const deletedAbrigo = await Abrigo.findByIdAndDelete(id)     
      
      if(!deletedAbrigo) {
        res.status(404).send('Id não encontrado')
      }
      const message = `O Abrigo com o Id - ${id} foi deletado com sucesso` 
      res.status(200).send({message})

    } catch(err) {
      res.status(500).send({message: err.message})
    }
  })
}



module.exports = {
  createAbrigo,
  findAllAbrigos,
  findByName,
  findById,
  updateAbrigo,
  deleteAbrigo,
  loginAbrigo
}



