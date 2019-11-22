const dataModel = require('../model/boatrentalModel')
const controller = {
    getAll : (req,res) =>{
        dataModel.sailors.getAll(res)  
    }, 
    add : (req,res) =>{ 
        dataModel.sailors.add(req.body.id,req.body.name,req.body.rating,req.body.age,res)
    },
    update : (req,res) =>{ 
        dataModel.sailors.update(req.params.id,req.body.name,req.body.rating,req.body.age,res)
    },
    replace : (req,res) =>{ 
        dataModel.sailors.replace(req.params.id,req.body.name,req.body.rating,req.body.age,res)
    },
    remove : (req,res) =>{ 
        dataModel.sailors.remove(req.params.id,res)
    }
} 
module.exports = controller