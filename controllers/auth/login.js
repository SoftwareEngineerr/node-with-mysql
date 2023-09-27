const jwt = require('jsonwebtoken');
 const con = require('../../db/db')

const login = async(req, res)=>{
    var stucture = {
        status: 0,
        message: ''
    };

    try{
        let {email , password } = req.body;
        if(email == '' || email == undefined){
            stucture.message = 'email is required';
            res.status(401).json(stucture)
        }
        else if(password == '' || password == undefined){
            stucture.message = 'password is required';
            res.status(401).json(stucture)
        }
        else{
            // res.status(200).json({data:'sami'})
            const qry = "SELECT * FROM `login` WHERE email='"+email+"' && password='"+password+"'";
            con.query(qry , (error , result)=>{
                if(error ) throw err;
                console.log(result.length )
                if(result.length >= 1){
                    stucture.message = result;
                    stucture.status = 1;
                    console.log(result[0].role)
                    const token = jwt.sign({id:1232133 , role: result[0].role} , 'ourvalues' , {expiresIn:'2 hours'})
                    res.status(200).json({token : token})
                }
                else{
                    stucture.message = 'password or email is incorrect';
                    res.status(401).json(stucture)
                }
            })
        }
    }
    catch(err){
        stucture.message = 'login error';
        res.status(401).json(stucture)
    }
}

module.exports = login