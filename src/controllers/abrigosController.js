const Abrigo = require('../models/abrigosModel')

const createAbrigo = async(req, res) => {
  try {
    
    const {name, address, contact, description, forms_of_donation} = req.body

    const newAbrigo = new Abrigo({name, address, contact, description, forms_of_donation})

    const savedAbrigo = await newAbrigo.save()

    res.status(200).json(savedAbrigo)
    
  } catch(error) {    
    res.status(500).json({message: error.message})
  }
}

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

    res.status(200).send(findAbrigo)
  } catch (err) {
    res.status(500).send({message: err.message})
  }
}

const updateAbrigo = async(req, res) => {
  try {
    const {name, address, contact, description, forms_of_donation} = req.body      
    
    const update = await Abrigo
      .findByIdAndUpdate(req.params.id, {name, address, contact, description, forms_of_donation})      

      res.status(200).send(update)

  } catch(err) {
    res.status(500).send({message: err.message})
  }
}

const deleteAbrigo = async(req, res) => {
  try {
    const {id} = req.params    

    await Abrigo.findByIdAndDelete(id)
    const message = `O Abrigo com o Id - ${id} foi deletado com sucesso`    
    res.status(200).send({message})

  } catch(err) {
    res.status(500).send({message: err.message})
  }
}



module.exports = {
  createAbrigo,
  findAllAbrigos,
  findByName,
  findById,
  updateAbrigo,
  deleteAbrigo
}



