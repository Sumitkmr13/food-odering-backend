const mongoose = require('mongoose');
const foodItemsSchema = new mongoose.Schema({
    'name': String,
    'image': String,
    'subItemsData': {
        'name': String,
        'subItems': [
            {
                'name': String,
                'image': String,
                'price': String,
                'description': String
            }
        ]
    }
},{collection: 'foodlist'});

const model= mongoose.model('foodItemsModel',foodItemsSchema);
module.exports= model;