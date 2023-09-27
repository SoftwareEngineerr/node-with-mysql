const con = require("../../db/db")



const show = (req , res , next)=>{
    try{
        // let { role } = req.user;
        const { role } = req.user;
        const qry = 'SELECT * FROM `car`';
        con.query(qry , (err , result)=>{
            if(err) throw err;

           
            res.status(200).json({
                data:role
            })
        })
    }
    catch(err){
        res.status(401).json({
            data:err
        })
    }
    }

module.exports = show;