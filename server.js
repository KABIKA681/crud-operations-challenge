const http = require('http')
const { getProducts } = require('./controllers/productsController')


const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if {
        
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Page not found' }))
    }

})

const PORT = process.env.PORT || 5000


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))