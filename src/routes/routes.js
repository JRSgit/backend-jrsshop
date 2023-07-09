/* eslint-disable no-undef */
const routes = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: './uploads' })

const UserCtrl = require('../controllers/User')
const ProductsCrtl = require('../controllers/Products')
const CategoryCtrl = require('../controllers/Category')

routes.get('/', UserCtrl.store)
routes.get('/categories', CategoryCtrl.index)
routes.get('/products', ProductsCrtl.indexAll)
routes.get('/product/:id', ProductsCrtl.indexOne)
routes.get('/indexProductCategory', ProductsCrtl.indexProductCategory)
routes.get('/indexBestSellProducts', ProductsCrtl.bestSellProduct)
routes.get('/indexProductRelation/:category', ProductsCrtl.indexProductRelation)

routes.post('/product', upload.single('file'), ProductsCrtl.store)

routes.post('/addProduct', ProductsCrtl.addProduct)
routes.post('/addCategory', CategoryCtrl.addCategory)

routes.put('/product/:id', ProductsCrtl.updateProduct)

routes.delete('/category/:id', CategoryCtrl.delete)


module.exports = routes
