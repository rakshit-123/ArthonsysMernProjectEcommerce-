const express = require('express');
const router = new express.Router();
const student = require('../model/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require('../../middleware/Authenticate');
const product = require('../model/ProductSchema');
// const { storage } = require('../../../registeration/src/firebase');
// const { ref, uploadBytesResumable, getDownloadURL } = require('firebase/storage');
// const multer = require('multer');
// const upload = multer({ dest: 'img/' }); // Configure multer to save files to a specific directory


const cookieParser = require('cookie-parser');
// const { default: All_product } = require('../../../registeration/src/components/All_product');
router.get("/students",(req,res)=>{
      console.log(req.query);
      
      const name = req.query.name;
      const contact = req.query.contact;
      const email = req.query.email;
      const address = req.query.address
      if(!contact){
          res.send('contact is not defined') 
      }
      if(!name){
          res.send('name is not defined') 
      }
      res.send(`name=${name} | email=${email} | contact = ${contact} | address = ${address}`);
})
//  to save it on database and save will return promise

   router.use(cookieParser());
router.post("/students", (req, res) => {
    console.log(req.query.value);
   console.log(req.body);
   console.log("post done");
   
   const data = req.body;
//    // Check if an image file is included in the request
//    // for image
//    // if (req.file) {
//    //    // Get the file from the request
//    //    const image = req.file;

//    //    // Upload the image to Firebase Storage
//    //    const imageRef = ref(storage, `img/${image.name}`);
//    //    const uploadTask = uploadBytesResumable(imageRef, image.buffer);

//    //    // Wait for the upload to complete
//    //    await uploadTask;

//    //    // Get the download URL of the uploaded image
//    //    const imageUrl = await getDownloadURL(imageRef);

//    //    // Add the Firebase image URL to the data
//    //    data.imgUrl = imageUrl;
//    // }
//       // Check if an image file was uploaded
//       if (req.file) {
//          const image = req.file;

//          // Upload the image to Firebase Storage
//          const imageRef = ref(storage, `img/${image.originalname}`);
//          const uploadTask = uploadBytesResumable(imageRef, image.buffer);
//          await uploadTask;

//          // Get the download URL of the uploaded image
//          const imageUrl = await getDownloadURL(imageRef);

//          // Add the Firebase image URL to the data
//          data.imgUrl = imageUrl;
//      }
//    // initialising data in collection constructor and user will become document here
//    // so we create middleware because it works after data intialising and before save and create in schema.js where we create our schema 
   const user = new student(data);
   
    user.save().then(() => {
      res.status(201).send(user);
   })
   
    
    .catch((e) => {
      console.error('Error saving user to database:', e);
      res.status(400).send(e);
   });
   
   
})


//    // compare when login then userpassword is equal to database stored password
//    // const isMatch = bcrypt.compare(data.password,user.password);
//    // if(!isMatch){
//    //       res.status(400).json({error:"invalid credentials"});
//    // }
//    // else{
//    //    res.json({message:"user login successfully"});
//    // }
// }
// catch (error) {
//    console.error('Error saving user and uploading image:', error);
//    res.status(500).send(error);
// }

// })
// login router
// router.post("/login",async(req,res)=>{
//    try{
//       let token;
//      const {email,password} = req.body;
//    //   current user email matches with email that exist in db
//    // this userLogin will give document of collection
      
//    const userLogin =  await    student.findOne({email:email});
  
      
//     const passwordValid = await  bcrypt.compare(password,userLogin.password);
//    //  this generateAuthToken function is called here but this is defined at schemafile and wherev token is geneated there  
//    if(!userLogin){
//       return  res.status(400).json({error:"invalid credentials"});
//   }
//   if(!passwordValid){
//    return res.status(400).json({  error:"invalid credentials"})
// }
      
   
//     token = await userLogin.generateAuthToken();
//     console.log(token);
//     res.status(200).json({message:"login successfull",token:token});
//    //  cookie(cookieName,value,expiresTime)
//     res.cookie("jwtoken",token,{

//          // this token will delete from cookie after 30days because data.now() will be in miliseconds and numbers is also in miliseconds 
//          expires: new Date(Date.now() + 25963257412000),
//          // where we can access on http only, not in https
//          httpOnly:true,
//          path:'/'
//     }, (error) => {
//       if (error) {
//           console.error('Error setting cookie:', error);
//           return res.status(500).json({ error: 'Failed to set cookie' });
//       }
//       console.log('Cookie set successfully');
//       // If there are no errors, continue with the response
//       res.status(200).json({ message: "login successfull", token: token });
//   }
//     );
//     console.log(token);
//    //  localStorage.setItem('jwtoken',token);

  
   
    

//    }
//    catch(error){
//       console.log('server error ',error);
//         res.status(500).send(error);
//    }
        



// }
// )
// router.post("/login", async (req, res) => {
//    try {
//        const { email, password } = req.body;
//        const user = await student.findOne({ email: email });
//        console.log(user);

//        if (!user || !(await bcrypt.compare(password, user.password))) {
//            return res.status(400).json({ error: "Invalid credentials" });
//        }

//        const token = await user.generateAuthToken();
//       //  res.cookie("jwtoken", token, {
//       //      expires: new Date(Date.now() + 2592000000), // 30 days
//       //      httpOnly: true,
//       //      path: '/'
//       //  });
//       const imageUrl = user.imageUrl;
      
//        res.status(200).json({ message: "Login successful", token: token, 
       
//        _id: user._id,
//        name: user.name,
//        email: user.email,
//        contact: user.contact,
//        imageUrl: imageUrl
           
       
//       }
//        );
//    } catch (error) {
//        console.log('Server error:', error);
//        res.status(500).send(error);
//    }
// });

router.post("/login", async (req, res) => {
   try {
       const { email, password } = req.body;
       const user = await student.findOne({ email: email });
      //  console.log(user);

       if (!user || !(await bcrypt.compare(password, user.password))) {
           return res.status(400).json({ error: "Invalid credentials" });
       }

       const token = await user.generateAuthToken();
      //  const imageUrl = user.imageUrl; // Assuming imageUrl is stored in the user document

       res.status(200).json({ 
           message: "Login successful", 
           token: token,
        
         user:user
          
       });
   } catch (error) {
       console.log('Server error:', error);
       res.status(500).send(error);
   }
});

router.post("/add-to-cart", Authenticate, async (req, res) => {
   try {
     // Get the user ID from the authenticated user
     const userId = req.userId;
     
     console.log('userid',userId );
 
     // Extract item details from the request body
     const { id, price } = req.body;
     console.log(id,price);
     // Find the product by its ID
     const product = await Product.findById(id);
 
     // Check if the product exists
     if (!product) {
       return res.status(404).json({ error: 'Product not found' });
     }
 
     // Create a new cart item document
     const cartItem = new Cart({
       user: userId,
       product: productId, // Reference to the product
       title: product.title,
       price: price,
       imageUrl: product.pmgsrc,
       
     });
 
     // Save the cart item to the database
     await cartItem.save();
 
     res.status(201).send(cartItem);
   } catch (error) {
     console.error('Error adding item to cart:', error);
     res.status(400).send(error);
   }
 });

   //
   // post request using async await
//     try{
//     router.post("/students",async(req,res))=>{
//            const data = req.body;
//            const user = new student(data);
//      const createUser =   await  user.save();
//      res.status(201).send(createUser);
//     }
//     catch(e){
//          res.send(e);
//     }
// });
// show database data to client side when user write /students on browser
// dashboard page
//   here Authenticate is a middleware that verifies that person has proper token then access data 
 router.get('/about',Authenticate,(req,res)=>{
     console.log('dashboard page');
     
   //   complete data of user will sent and that rootUser will be define ata authenticate in middleware 
     res.send(req.rootUser);
 })
//  router.get('/home',Authenticate,(req,res)=>{
//    console.log('dashboard page');
   
//  //   complete data of user will sent and that rootUser will be define ata authenticate in middleware 
//    res.send(req.rootUser);
// })

router.get("/students",async(req,res)=>{
   try{
      const studentsData =  await student.find();
      res.status(200).send(studentsData);
   }
   catch(e){
       res.status(404).send(e);
   }
        
})
router.get("/students/:id",async(req,res)=>{
   try{
        const stid =  req.params.id;
        console.log(stid);
    const studentData = await student.findById(stid);
    
           res.status(200).send(studentData);
        
   }
   catch(e){
         res.status(200).send(e);
   }
})
// update email or data in database 

router.patch("/students/:id",async(req,res)=>{
   try{
     const upid = req.params.id;
     const upemail = req.body.email;
     
   //   here we get data by its id and update it by data that we will pass on request body
     const updateData = await   student.findByIdAndUpdate(upid,req.body);
     res.send(updateData);
   }
   catch(e){
        res.status(404).send(e); 
   }
})
// delete document by find its id
router.delete("/students/:id",async(req,res)=>{
   try{
         const newid = req.params.id;
      const newData =   await     student.findByIdAndDelete(newid);

       res.send(newData);
   }
   catch(e){
       res.send(e);
   }
}
)
router.post("All_products",async(req,res)=>{
        try{
           console.log(req.body); 
               const { productId , pmgsrc,title,head} = req.body;
               const newProduct  = new product({
                  productId , 
                  pmgsrc,
                  title,
                  head
                   
               });
               await newProduct.save();
               res.status(201).json(newProduct);
        }
        catch (error) {
         console.error('Error creating product:', error);
         res.status(500).json({ error: 'Internal server error' });
     }
})













module.exports = router;