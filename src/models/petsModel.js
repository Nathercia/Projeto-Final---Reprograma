const mongoose = require('mongoose')

const petsSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  species: {type: String, required: true},
  name: String,
  age: Number,
  sex: String,
  description: String,

  ONG : {
    type: mongoose.Schema.Types.ObjectId,
    required: true,    
    ref: 'abrigo'
  }

}, {timestamps: true})

const Model = mongoose.model('pets', petsSchema)

module.exports = Model