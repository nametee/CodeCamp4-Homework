const numbersModel = require('../models/numbersModel')

const getNumbers = (req,res) => {
    res.send(numbersModel.getNumbers())
}

const addNumber = (req,res) => {
    let num = parseFloat(req.body.number)
    numbersModel.addNumber(num) 
    getNumbers(req,res)
}

const updateNumber = (req,res) => {   
    let num = parseFloat(req.body.number)
    let newNum = parseFloat(req.body.newNumber)
    numbersModel.updateNumber(num,newNum) 
    getNumbers(req,res)
}

const deleteNumber = (req,res) => {
    let num =  parseFloat(req.body.number)
    numbersModel.deleteNumber(num) 
    getNumbers(req,res)
}

module.exports = {
    getNumbers,
    addNumber,
    updateNumber,
    deleteNumber
}