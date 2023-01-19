const {Router} = require("express");
const { Bugdata } = require("../module/Bugdata.module");



const bugdataRouter = Router()

bugdataRouter.get('/',async(req,res)=>{
    let data = await Bugdata.findOne()
    res.send(data)
})



bugdataRouter.post('/post',async(req,res)=>{
    try{
        let data = await Bugdata.insertMany(req.body)
        res.send({msg: "sucessfully added", data: data}) 
    }catch(e){
        res.send({msg: "failed"}) 
    } 
})

bugdataRouter.delete('/delite',async(req,res)=>{
    try{
        let data = await Bugdata.deleteOne({_id: id})
        res.send({msg: "delete successful",}) 
    }catch(e){
        res.send({msg: "failed"}) 
    }
})

module.exports = {bugdataRouter}