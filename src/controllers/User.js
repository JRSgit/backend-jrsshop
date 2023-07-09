/* eslint-disable no-undef */
const UserModel = require('../model/User')


class UserCtrl {
  async store(req, res) {

    //const { name, email, password } = req.body
    const name = 'José Ronaldo'
    const email = 'jrs@hotmail.com'
    const password = '123456'

    try {
      const user = await UserModel.create({ name, email, password })
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }


  }

  async update(req, res) {
    const id = req.params
    const user = req.body

    try {
      const userUp = await UserModel.updateOne(id, user, { new: true })

      res.status(200).json(userUp)

    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

module.exports = new UserCtrl()
