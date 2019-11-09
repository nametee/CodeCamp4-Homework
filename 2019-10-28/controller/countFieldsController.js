const countFields = (req,res) =>{ 
    res.send(String(Object.keys(req.body).length)) 
}

module.exports = {countFields}