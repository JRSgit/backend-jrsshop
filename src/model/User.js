/* eslint-disable no-undef */
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: String,
    required: true,
    default: false,
  },
},
  {
    timestamps: true,
  })

UserSchema.pre('save', async function () {

  const hash = await bcrypt.hash(this.password, 9)
  this.password = hash
})

module.exports = mongoose.model('User', UserSchema)
