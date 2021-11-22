const http = require('http')


const server = http.createServer((req, res) => {
})

const PORT = process.env.PORT || 5000


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))