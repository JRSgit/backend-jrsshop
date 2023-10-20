/* eslint-disable no-undef */
const ProductsModel = require('../model/Products')
// const CategoryModel = require('../model/Category')
const { ref, uploadBytesResumable, getDownloadURL } = require('firebase/storage')
const storage = require('../config/firebase')


class ProductsCtrl {
  async store(req, res) {
    // const product = req.body
    const file = req.file


    const storageRef = ref(storage, `imagens/${file.filename}`)

    const upTask = uploadBytesResumable(storageRef, file)

    let imgUrl

    upTask.on('state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress)
      },
      error => {
        console.log(error)
      },
      () => {
        getDownloadURL(upTask.snapshot.ref).then(url => {
          imgUrl = url
        })
      }
    )

    res.send(imgUrl)
  }
  // =============================================================

  async addProduct(req, res) {

    const {
      title,
      tamanho: size,
      cor: color,
      price,
      off,
      descricao: content,
      u: url,
      nameCategory: category
    } = req.body.data

    try {
      const addProduct = await ProductsModel.create({
        title,
        size,
        color,
        price,
        off,
        content,
        url,
        category
      })

      // const Product = await CategoryModel.findById(category)

      // const idProduct = Product
      res.json(addProduct)


    } catch (error) {
      res.status(400).json({ error: error.message })
      console.log(error.message)
    }

  }

  // index All Products
  async indexAll(req, res) {
    try {
      const products = await ProductsModel.find().sort('-1')

      return res.status(200).json(products)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
  // index One Product
  async indexOne(req, res) {
    try {
      const { id } = req.params
      const product = await ProductsModel.findById(id).populate('category')

      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
  // IndexProductCategory
  async indexProductCategory(req, res) {
    const { id } = req.body
    try {
      const products = await ProductsModel.find({ category: id })
      return res.status(200).json(products)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
  // Best Sell Product
  async bestSellProduct(req, res) {
    try {
      const bestSell = await ProductsModel.find({ bestSell: true }).limit(10).sort('dec')
      return res.status(200).json(bestSell)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  // indexProductRelation ===================
  async indexProductRelation(req, res) {
    // const nameCategory = req.params

    try {
      const productRelation = await ProductsModel.find({ category: "Sport" })


      return res.status(200).json(productRelation)

    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  //  update Product
  async updateProduct(req, res) {
    const { id } = req.params
    const { title, price, color, size, content, bestSell } = req.body.data

    try {
      if (color.length > 0) {
        const colorAr = color.split(',')
        const productF = await ProductsModel.findById(id)
        const colorUp = productF.color
        colorAr.map((c) => colorUp.push(c))
        await ProductsModel.findByIdAndUpdate(id, { $set: { color: colorUp } }, { new: true })
      }
      if (size.length > 0) {
        const sizeAr = size.split(',')
        const productF = await ProductsModel.findById(id)
        const sizeUp = productF.size
        sizeAr.map((s) => sizeUp.push(s))
        await ProductsModel.findByIdAndUpdate(id, { $set: { size: sizeUp } }, { new: true })
      }
      setTimeout(async () => {
        const data = { title, price, content, bestSell }
        const product = await ProductsModel.findByIdAndUpdate(id, data, { new: true })
        return res.status(200).json(product)
      }, 1000)

    } catch (error) {
      res.status(400).json({ error: error.message })
      console.log(error)
    }
  }

}

module.exports = new ProductsCtrl()
