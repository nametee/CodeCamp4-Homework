const dataModel = require('../model/boatrentalModel')
const controller = {
    getAll : (req,res) =>{
        dataModel.reserves.getAll(res)  
    }, 
    add : (req,res) =>{ 
        dataModel.reserves.add(req.body.sailorID,req.body.boatID,req.body.day,res)
    },
    update : (req,res) =>{ 
        dataModel.reserves.update(req.params.sid,req.params.bid,req.body.day,res)
    },
    replace : (req,res) =>{ 
        dataModel.reserves.replace(req.params.sid,req.params.bid,req.body.day,res)
    },
    remove : (req,res) =>{ 
        dataModel.reserves.remove(req.params.sid,req.params.bid,res)
    }
} 
module.exports = controller