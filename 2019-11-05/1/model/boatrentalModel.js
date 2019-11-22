const mysql = require('mysql')
const config = {
    host:'localhost',
    user:'root',
    password:'P@ssword#1',
    database:'boatrental'
} 
const db = mysql.createConnection(config)  
db.connect() 

const boats = {
    getAll : (res) =>{
        db.query("SELECT * FROM BOATS ORDER BY BID,BNAME,COLOR",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    res.send(err)
                }
        })
    },
    getByID : (id,res) =>{
        db.query(`SELECT * FROM BOATS WHERE BID='${id}' ORDER BY BID,BNAME,COLOR`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    res.send(err)
                }
        })
    },
    getByName : (name,res) =>{
        db.query(`SELECT * FROM BOATS WHERE BNAME='${name}' ORDER BY BID,BNAME,COLOR`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    res.send(err)
                }
        })
    },
    getByColor : (color,res) =>{
        db.query(`SELECT * FROM BOATS WHERE COLOR='${color}' ORDER BY BID,BNAME,COLOR`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    res.send(err)
                }
        })
    },
    getByParams : (name,color,res) =>{
        db.query(`SELECT * FROM BOATS WHERE BNAME='${name}' AND COLOR='${color}' ORDER BY BID,BNAME,COLOR`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    res.send(err)
                }
        })
    },
    add : (id,name,color,res) =>{   
        db.query(`INSERT INTO BOATS(BID,BNAME,COLOR)VALUES('${id}','${name}','${color}')`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Add new data complete")
                }else{
                    res.send(err)
                }
        })
    },
    update : (id,name,color,res) =>{ 
        db.query("UPDATE BOATS SET BID='"+ id +"'" + (name ? ",BNAME='"+ name +"'" : "") + (color ? ",COLOR='"+ color +"'" : "") + " WHERE BID='"+ id +"'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Update data complete")
                }else{
                    res.send(err)
                }
        })
    },
    replace : (id,name,color,res) =>{
        db.query("UPDATE BOATS SET BID='"+ id +"',BNAME='" + (name ? name : "") + "',COLOR='" + (color ? color : "") + "' WHERE BID='"+ id +"'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Replace data complete")
                }else{
                    res.send(err)
                }
        }) 
    },
    remove : (id,res) =>{ 
        db.query(`DELETE FROM BOATS WHERE BID='${id}'`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Remove data complete")
                }else{
                    res.send(err)
                }
        })
    }
}

const sailors = {
    getAll : (res) =>{
        db.query("SELECT * FROM SAILORS ORDER BY SID,SNAME,RATING,AGE",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    console.log(err)
                    res.send(err)
                }
        })
    }, 
    add : (id,name,rating,age,res) =>{    
        db.query(`INSERT INTO SAILORS(SID,SNAME,RATING,AGE)VALUES('${id}','${name}',` + ((rating) ? rating : "NULL") +',' + ((age) ? age : "NULL") + ')',
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Add new data complete")
                }else{
                    res.send(err)
                }
        })
    },
    update : (id,name,rating,age,res) =>{ 
        db.query("UPDATE SAILORS SET SID='"+ id +"'" + (name ? ",SNAME='"+ name +"'" : "") + (rating ? ",RATING="+ rating  : "")+ (age ? ",AGE="+ age  : "")  + " WHERE SID='"+ id +"'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Update data complete")
                }else{
                    res.send(err)
                }
        })
    },
    replace : (id,name,rating,age,res) =>{
        db.query("UPDATE SAILORS SET SID='"+ id +"',SNAME='" + (name ? name : "") + "',RATING=" + (rating ? rating : "NULL") + ",AGE="+ (age ? age : "NULL") +" WHERE SID='"+ id +"'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Replace data complete")
                }else{
                    res.send(err)
                }
        }) 
    },
    remove : (id,res) =>{ 
        db.query(`DELETE FROM SAILORS WHERE SID='${id}'`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Remove data complete")
                }else{
                    res.send(err)
                }
        })
    }
}

const reserves = {
    getAll : (res) =>{
        db.query("SELECT * FROM RESERVES ORDER BY SID,BID,DAY ",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).json(result)
                }else{
                    console.log(err)
                    res.send(err)
                }
        })
    }, 
    add : (sid,bid,day,res) =>{    
        db.query(`INSERT INTO RESERVES(SID,BID,DAY)VALUES('${sid}','${bid}',` + ((day) ? "'" + day + "'" : "NULL")  + ')',
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Add new data complete")
                }else{
                    res.send(err)
                }
        })
    },
    update : (sid,bid,day,res) =>{ 
        db.query("UPDATE RESERVES SET SID='"+ sid +"',BID='" + bid + "'" + (day ? ",DAY='" + day + "'": "") +" WHERE SID='"+ sid +"' AND BID='" + bid + "'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Update data complete")
                }else{
                    res.send(err)
                }
        })
    },
    replace : (sid,bid,day,res) =>{
        db.query("UPDATE RESERVES SET "+ " DAY='"+ day +"',SID='"+ sid +"',BID='" + bid + "' WHERE SID='"+ sid +"' AND BID='" + bid + "'",
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Replace data complete")
                }else{
                    res.send(err)
                }
        }) 
    },
    remove : (sid,bid,res) =>{ 
        db.query(`DELETE FROM RESERVES WHERE SID= '${sid}' AND BID='${bid}'`,
            (err,result)=>{ 
                if (!err) { 
                    res.status(200).send("Remove data complete")
                }else{
                    res.send(err)
                }
        })
    }
}

module.exports = {
    boats,sailors,reserves
}