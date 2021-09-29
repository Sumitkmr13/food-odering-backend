const express = require('express');
const router = express.Router();
const foodItemsModel = require('../models/foodItemsModel');

router.post('/add', async function (request, response) {
    try {
        const additionResponse = await foodItemsModel.create(request.body);
        console.log('additionResponse', additionResponse);
        response.send({ result: 'item added successfully' });
    } catch (err) {
        console.log('error occored in adding item', err);
    }
});
router.get('/list', async function (request, response) {
    try {
        const foodList = await foodItemsModel.find({},{__v:0});
        response.send({ result: foodList });
    }catch(err){
         console.log('error occored in listing item', err);
    }
    
});
router.delete('/delete', async function (request, response) {
    try {
        await foodItemsModel.deleteOne({
            _id:request.body._id
        });
        response.send({ result: 'item deleted' });
    }catch(err){
         console.log('error occored in listing item', err);
    }
    
})
module.exports = router;