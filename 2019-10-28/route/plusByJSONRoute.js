const express = require('express')
const router = express.Router()

const plus = (req,res) => {
    let d = JSON.parse(req.query.jsonText)  
    res.send('sum of '+ d.a +' + '+ d.b +' = ' + String(parseFloat(d.a)+parseFloat(d.b)))
}
 
router.get('/',plus)  

module.exports = router