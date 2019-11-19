const dataModel = require('../model/dataModel')

const get = (req,res) =>{ 
    const {id} = req.params
    dataModel.get(id).then((response)=> {
        res.status(response.status).send(response.data)
    }) 
}

const add = (req,res) =>{ 
    const {name,job} = req.body
    dataModel.add(name,job).then((response) =>{ 
        res.status(response.status).send(response.statusText)
    })
}

const update = (req,res) =>{ 
    const {id} = req.params
    const {name,job} = req.body
    dataModel.update(id,name,job).then(response => {
        res.status(response.status).send(response.statusText)
    }) 
}

const remove = (req,res) =>{
    const {id} = req.params
    dataModel.remove(id).then(response => {
        res.status(response.status).send(response.statusText)
    }) 
}

module.exports = {
    get,add,update,remove
}