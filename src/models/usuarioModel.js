const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },

    name: {type: String, required: true,  unique: true},
    email: String,
    password: String,
    type: {type: String, required: true},

    favorite_pets: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pets'
    },

    favorite_ongs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'abrigo'
    }
   
  
  }, {timestamps: true})


const Model = mongoose.model('usuario', usuarioSchema)

module.exports = Model