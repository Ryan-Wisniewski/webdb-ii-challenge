const express = require('express')
const CarDealerRoute = require('../router/CarDealerRoute')

const server = express()

server.use(express.json())

server.use('/cars', CarDealerRoute)

server.get('/', (req, res) => {
    res.json({ sanity: 'check' })
});

module.exports = server