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
    contact: Number,
    escription: String,
    forms_of_donation: [
      {
        value: Number
      },
      {
        donations: String
      }
    ]
  }, {timestamps: true})


const Model = mongoose.model('abrigo', abrigoSchema)

module.exports = Model