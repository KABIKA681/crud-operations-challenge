const products = require('../data/products')
const { v4: uuidv4 } = require('uuid')



function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

function createProduct(product) {
    return new Promise((resolve, reject) => {
        const newProduct = { id: uuidv4(), ...product }
        products.push(newProduct)

    })
}



module.exports = {
    findAll,
    findById
}