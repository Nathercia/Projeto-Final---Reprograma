const mongoose = require('mongoose')

const abrigoSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },

    name: {type: String, required: true,  unique: true},
    address: {
      city: String, 
      district: String, 
      street: String
    },
    contact: String,
    description: String,
    forms_of_donation: {
        pix: String,
        donations: String
      },
    
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {type:String, required: true}

  
  }, {timestamps: true})


const Model = mongoose.model('abrigo', abrigoSchema)

module.exports = Model