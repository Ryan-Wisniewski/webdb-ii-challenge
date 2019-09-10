const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    //.select('*') noWork
    .select('VIN', 'make', 'model', 'mileage', 'transmission', 'title')
    .then(cars => res.status(200).json(cars))
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'oops something happened'})
    })
});

router.get('/:id', (req, res) => {
    
});

router.post('/:id', (req, res) => {
    
});
module.exports = router