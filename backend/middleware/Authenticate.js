const jwt = require('jsonwebtoken');
const student = require("../src/model/schema");
const Authenticate = async(req,res,next)=>{
         
       try{
        const token = req.body.token;
        // 
        console.log(token);
        // THIS token will be match from secret key in config.env file
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        // if token is vetified then we want to access his data here this verifyToken will give person data 
        // tokens:token means kyuki schema me tokens ke andar token hai   usko is token se match kr rhe h ki exist krta hai ya nhi 
        const rootUser = await student.findOne({_id:verifyToken._id,"tokens.token":token})
        
          if(!rootUser){
              throw new Error('user not found');
          }
          //we are assigning  user token,id,and complete data (rootUser) so this will be accessible in frontend  
          req.token = token;
          req.rootUser = rootUser;
          req._userId = rootUser._id;
          next();
       }
       catch(err){
        res.status(401).send('unauthorised :no token provided ');
        console.log(err);
       }
}
module.exports = Authenticate;
