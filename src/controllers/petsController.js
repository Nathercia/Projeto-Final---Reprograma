const Pet = require('../models/petsModel')
const Abrigo = require('../models/abrigosModel')

const createPet = async(req, res) => {
  try{
    const {species, name, age, sex, description, ONG} = req.body

    const findONG = await Abrigo.findById(ONG)

    const newPet = new Pet({species, name, age, sex, description, ONG: findONG})
    
    const savedPet = await newPet.save()

    res.status(200).json(savedPet)

  } catch(err) {
    res.status(500).send({message: err.message})
  }
}

const findAllPets = async(req, res) => {
  try {
    const allPets = await Pet.find().populate('ONG')    
    res.status(200).json(allPets)
      
  } catch(err) {
     res.status(500).send({message: err.message})  
  }
}

const findById = async(req, res) => {
  try {
    const findPet = await Pet.findById(req.params.id).populate('ONG')

    res.status(200).send(findPet)
    
  } catch(err) {
    res.status(500).send({message: err.message})
  }
}

const updatePet = async(req, res) => {
  try{
    const {species, name, age, sex, description, ONG} = req.body
    
    const findONG = await Abrigo.findById(ONG)
    const update = await Pet.findByIdAndUpdate(req.params.id, {species, name, age, sex, description, ONG: findONG })

    res.status(200).send(update)
  } catch(err) {
    res.status(500).send({message: err.message})
  }
}

const deletePet = async(req, res) => {
  try{
    const {id} = req.params

    await Pet.findByIdAndDelete(id)
    const message = `O pet com id-${id} foi deletado com sucesso`
    res.status(200).send({message})

  } catch(err) {
    res.status(500).send({message: err.message})
  }
}





module.exports = {
  createPet,
  findAllPets,
  findById,
  updatePet,
  deletePet
}
