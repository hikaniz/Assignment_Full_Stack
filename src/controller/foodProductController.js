const foodModel = require("../model/foodModel")

exports.createFood=(req,res)=>{
    const reqBody = req.body

    foodModel.create(reqBody).then((result)=>{
        res.status(200).json({status:'success', data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}
exports.readFood=(req,res)=>{
    let reqBody = req.body
    foodModel.find(reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}
exports.readFoodOne=(req,res)=>{
    let reqBody = req.body
    let {id} = req.params
    foodModel.findOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.updateFood=(req,res)=>{
    let reqBody = req.body
    let {id} = req.params
    foodModel.updateOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
    console.log(id)
}

exports.deleteFood=(req,res)=>{
    let reqBody = req.body
    let {id} = req.params
    foodModel.deleteOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success', message:'successfully delete complete'})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}