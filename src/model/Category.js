// eslint-disable-next-line no-undef
const mongoose = require('mongoose')


const schemaCategory = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }
)

// eslint-disable-next-line no-undef
module.exports = mongoose.model('Category', schemaCategory)