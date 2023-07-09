/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const CategoryModel = require('../model/Category')


class CategoryCtrl {
  async addCategory(req, res) {
    const { data } = req.body

    console.log(data)
    try {
      const category = await CategoryModel.create(data)

      return res.status(200).json(category)

    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async index(req, res) {
    try {
      const data = await CategoryModel.find()

      return res.status(200).json(data)

    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async indexProductsCategory(req, res) {
    const { id } = req.params
    try {
      const products = await CategoryModel.findById(id)

      res.status(200).json(products)

    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }


  async delete(req, res) {
    const { id } = req.params
    try {
      await CategoryModel.findByIdAndRemove(id)
      res.send()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

}

module.exports = new CategoryCtrl()
