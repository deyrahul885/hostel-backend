const Visitor = require('../models/visitor.model')

exports.register = async (req,res)=>{
    const {name, email, mobile, city} =req.body;
    try {
        const result = await Visitor.create({
            name,
            email,
            mobile,
            city
        });
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({msg:"something went wrong"}) 
        console.log(error)
    }
}

exports.findAll = function(req,res){
    Visitor.find(function(err,doc){
        if(err)res.status(400).send(err);
        res.status(200).json(doc)
    })
}
