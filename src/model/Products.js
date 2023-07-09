/* eslint-disable no-undef */
const mongoose = require('mongoose')

// const reviewSchema = mongoose.Schema({
//   name:{type: String, reqquired: true},
//   rating: {type: Number, required: true},
//   comment: {type: String, required: true},
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref:'User'
//   },
// },{
//   timestamps: true,
// })

const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  size: [
    { type: String, required: true }
  ],
  color: [
    { type: String, required: true }
  ],
  countInStock: {
    type: Number,
    required: true,
    default: 50,
  },
  bestSell: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  off: {
    type: Number
  },
  url: [
    {
      type: String,
      required: true
    }
  ],
  category:
  {
    type: String,
    required: true
  },

},
  {
    timestamps: true
  }
)


module.exports = mongoose.model('Products', ProductsSchema)
