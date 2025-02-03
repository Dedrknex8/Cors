const express = require('express');
const {ayncHandler, asyncHandler, APIError} = require('../middleware/errorHandler');
const router = express.Router();

const item = [
    {
    id : 1,
    item : 'item 1'
    },
    {
    id : 2,
    item : 'item 2'
    },
    {
    id : 3,
    item : 'item 3'
    },
    {
    id : 4,
    item : 'item 4'
    },
];

router.get('/items',asyncHandler(async (req,res) =>{
    res.json(item);
})
);

router.post('/items',asyncHandler((async (req,res)=>{
    if(!req.body.item){
        throw new APIError('Item name is required');
    }
    const newItem = {
        id : item.length + 1,
        item : req.body.itme
    }

    item.push(newItem);
    res.status(200).json({
        message : "Item created sucesfully"
    });
})))

module.exports = router;