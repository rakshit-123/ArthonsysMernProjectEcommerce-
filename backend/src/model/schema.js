const mongoose = require('mongoose');
// creating schema(fields)
const validate = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SetSchema = new  mongoose.Schema({
        name:{
            type: String ,
            minLength : 3,
            required:true

        } ,
        contact:{
            type:Number,
           required:true,
             minLength:10,
            maxlength:10

         },
        email:{
              type: String,
              required:true,
              unique:[true,"email already exist"],
              validate(value){
                  if(!validate.isEmail(value)){
                         throw new Error("you ned to provide valid email"); 
                  }
              }
            
        },
        // password:{
        //       type:String,
        //       minLength:3,
        //       required:true,
        //       match: /^[a-zA-Z0-9]{6,12}$/
        //     //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        // },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,  // Minimum password length
            maxlength: 64, // Maximum password length
            validate: {
              validator: function(v) {
                // Custom validation logic can be implemented here
                // For example, check if the password contains a mix of alphanumeric characters and special characters
                return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(v);
              },
              message: props => `${props.value} is not a valid password. Password must contain at least one letter, one number, and one special character.`
            }
          },
          imageUrl: {
            
            type: String
            //  required:true
            
          },
        // tokens ek array isliye liya hai kyuki ek id se multiple token generarte ho skta hai 
        tokens:[
            {
            token: {
                  type:String,
                  required:true
            }
        }
        ]
               
        

})
// collection name will be student we will create a model means we give collection name that follow that schema model(collectionName,schema)



   // bcrypt or hashing password in which a pre method used  so before save in database so first parameter is save and then in callback we pass hash to password
   SetSchema.pre('save',async function(next){
    console.log("bcrypt method called")
    try{
         if(this.isModified('password')){
            // 12 is hashcode
               this.password = await bcrypt.hash(this.password,12);
                 //  agar yh ho jaye to next ko call kr lo next se
         }
         next();
       
        }
        catch(error){
            next(error);
            
        }
      
   })
//    yh genrateAuthToken method schema ke andar ek method hota h uska ek function hai  
   SetSchema.methods.generateAuthToken = async function(){
         try{
            // yh first wali _id mongodb ne jo unique id di ek document ko usko this._id mtlab ek id gernerate ki hai 
           
            // process.env.SECRET_KEY yh uss id ko secret rakh rha h  isse token genrate ho gya hai
            // yh secret key config.env me present hai
            let tokenNew = jwt.sign({_id:this._id},process.env.SECRET_KEY); 
            //in above setSchema tokens field ke andar jo token hai usme new genarated token concat krwa rhe hai  
           this.tokens = this.tokens.concat({token:tokenNew}); 
        //    now we have to save this token in setSchema 
       await this.save();
        console.log(tokenNew);
       return tokenNew;

         }
         catch(error){
              console.log(error);
         }
   }
     

   let student =  new mongoose.model('student',SetSchema);
module.exports = student;   
