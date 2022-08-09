const VisitorIp = require('../models/visitorIp.model')

exports.createIp = async (req,res)=>{
    const {IPv4,country_name,latitude,longitude} =req.body;
    console.log('body',IPv4)
    try {
        const result = await VisitorIp.create({
            IPv4,country_name,latitude,longitude
        });
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({msg:"something went wrong"}) 
        console.log(error)
    }
}


