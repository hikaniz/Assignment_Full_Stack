const express= require('express')
const { createFood, readFood, updateFood, deleteFood, readFoodOne } = require('../controller/foodProductController')

const router = express.Router()
router.post('/create' , createFood)
router.get('/read', readFood)
router.get('/read/:id', readFoodOne)
router.post('/update/:id', updateFood)
router.get('/delete/:id' , deleteFood)


module.exports=router