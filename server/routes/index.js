const route = require('express').Router();

route.get('/', (req,res) => {
    res.json({
        message: "Home page"
    })
})

const ItemRoutes = require('./item');
route.use('/items', ItemRoutes);

module.exports = route;