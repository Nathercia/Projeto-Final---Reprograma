require("dotenv").config();
const Usuario = require('../models/usuarioModel')
const Pets = require('../models/petsModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const { auth } = require("./autenticacao");

const registerUsuario = async(req, res) => {
  try {
    let {name, email, password, type} = req.body
    
    if (!email || !password || !name) {
      res.status(422).send({message: 'Cadastro inválido: alguns campos obrigatórios não foram preenchidos'});      
    }

    const senhaComHash = bcrypt.hashSync(req.body.password, 10)
    password = senhaComHash    

    const newUsuario = new Usuario({name, email, password, type})
    const savedUsuario = await newUsuario.save()    

    res.status(201).json(savedUsuario)

  } catch(error) {    
    res.status(500).json({message: error.message})
  }
}

const loginUsuario = (req, res) => {
  Usuario.findOne({ email: req.body.email }, (err, usuario) => {
  if (err) {
    return res.status(500).send({ message: err.message });
  };
  if (!usuario) {
    return res.status(404).send('Não existe usuário cadastrado com esse email');
  };

  const password = bcrypt.compareSync(req.body.password, usuario.password);
  if (!password) {
    return res.status(403).send('Acesso negado: senha incorreta');
  };

  const token = jwt.sign({ email: usuario.email, type: usuario.type }, SECRET);
  return res.status(201).send({token});
});
};

const findAllUsuarios = async(req, res) => {  
  Usuario.find((err, usuario) => {
    if(err) {
      res.status(424).send({message: err.message})
    }
    res.status(200).send(usuario)
  })  
}

const updateUsuario = async (req, res) => {

  const token = auth(req, res);
  jwt.verify(token, SECRET, async (err, user) => {
    console.log('user: ', user)
    if (err) {
      return res.status(403).send("Token inválido!");      
    } else if(user.type !== 'usuario') {
      return res.status(401).send("Falied! Voce precisa ser um usuário para alterar o seu perfil");
    }

    try {    
        const {name, email, password, type, favorite_pets, favorite_ongs} = req.body            
      
        const update = await Usuario
        .findByIdAndUpdate(req.params.id, {name, email, password, type, favorite_pets, favorite_ongs})
        if(!update) {
          res.status(404).send('Id não encontrado')
        }        
        
        res.status(201).send({update})

      } catch(err) {
        res.status(500).send({message: err.message})    
    }
  })
}

const deleteUsuario = async(req, res) => {

  const token = auth(req, res);
  jwt.verify(token, SECRET, async (err, user) => {
    console.log('user: ', user)
    if (err) {
      return res.status(403).send("Token inválido!");      
    } else if(user.type !== 'usuario') {
      return res.status(401).send("Falied! Voce precisa ser um usuário para alterar o seu perfil");
    }

    try {
      const {id} = req.params  
      const deletedUsuario = await Usuario.findByIdAndDelete(id)     
      
      if(!deletedUsuario) {
        res.status(404).send('Id não encontrado')
      }
      const message = `O Usuário com o Id - ${id} foi deletado com sucesso` 
      res.status(200).send({message})

    } catch(err) {
      res.status(500).send({message: err.message})
    }
  })
}



module.exports = {
  registerUsuario,
  loginUsuario,
  findAllUsuarios,
  updateUsuario,
  deleteUsuario
}