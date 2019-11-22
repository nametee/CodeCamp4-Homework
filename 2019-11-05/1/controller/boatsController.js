const dataModel = require('../model/boatrentalModel')
const controller = {
    getAll : (req,res) =>{
        dataModel.boats.getAll(res)  
    },
    getByID : (req,res) =>{
        dataModel.boats.getByID(req.params.id, res)  
    },
    getByName : (req,res) =>{
        dataModel.boats.getByName(req.params.name, res)  
    },
    getByColor :  (req,res) =>{
        dataModel.boats.getByColor(req.params.color,res)  
    },
    getByParams : (req,res) =>{
        dataModel.boats.getByParams(req.params.name,req.params.color,res)  
    },
    add : (req,res) =>{ 
        dataModel.boats.add(req.body.id,req.body.name,req.body.color,res)
    },
    update : (req,res) =>{ 
        dataModel.boats.update(req.params.id,req.body.name,req.body.color,res)
    },
    replace : (req,res) =>{ 
        dataModel.boats.replace(req.params.id,req.body.name,req.body.color,res)
    },
    remove : (req,res) =>{ 
        dataModel.boats.remove(req.params.id,res)
    }
} 
module.exports = controller