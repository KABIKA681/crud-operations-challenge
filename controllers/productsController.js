const Product = require('../models/productsModel')


//GET ALL PRODUCTS
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

//GET SINGLE PRODUCT 
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))

        }
    } catch (error) {
        console.log(error)
    }
}

//CREATE A POST 
//POST REQUEST 
async function createProduct(req, res) {
    try {
        const product = {
            title: 'Test Product',
            description: 'This is my product',
            price: 100
        }
        
        const newProduct = Product.create(product)
        res.writeHead(201, { 'Content-Type' : 'Application/json '})
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}




module.exports = { getProducts, getProduct }