import {useState} from 'react';
import './SignUp.css';
import profiles from '../assets/profile.png';
import emails from '../assets/email.png';
import locks from '../assets/lock.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {storage} from '../firebase';

const SignUp = ()=>{
 const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[contact,setContact] = useState("");
const[image,setImage] = useState(null);
const[progress,setProgress] = useState(0);
const [downloadURL, setDownloadURL] = useState(""); // State to store the download url
const[imageUrl,setImageUrl] = useState("");

// const uploadChanger = ()=>{
//       console.log('upload button is clicked');
//       if(image!=null){
//           console.log(image.name);
//       //     this uuidv4 is random id we attch with  file so if same name of file is inserred then it will accept it by diffrerent id 
//           const imageRef = ref(storage,`img/${image.name + uuidv4()}`);

//       //     this images will upload on this imagref
//           const uploadFile = uploadBytesResumable(imageRef,image);
          

//       //     progressbar logic
//       uploadFile.on('state_changed',(snapshot)=>{
//             // so on progress me no of bytes tranferred show krega total bytes me se
//             const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes*100);
//             setProgress(progress);
//       })
//       console.log(uploadFile);
//       }
//       else{
//             console.log('image is null');

//       }
// }

// const SubmitHandler =async(e)=>{
//       e.preventDefault();
//          console.log('before data ',name,email,contact,password)
//           // post data to database
//           try{
//           console.log(name,email,contact,password);
//           if(!name || !email || !contact || !password){
//             //    res.status(422).json({error:"please fill all fields"});
//                 throw new Error('please fill all fields')
//           }
//         let data = {name,email,contact,password};
//  let res = await axios.post('http://localhost:9000/students',data);
//            console.log(res.data);
//       alert('you have successfully registered');
//    }
//    catch(error){
//       if (error.response) {
//             // Server responded with an error
//             console.log('Server error:', error.response.data);
//         } else if (error.request) {
//             // Request made but no response received
//             console.log('No response from server');
//         } else {
//             // Something else went wrong
//             console.log('Error:', error.message);
//         }
//       }
          
//    }


const uploadChanger = () => {
    console.log('upload button is clicked');
    if (image != null) {
        console.log(image.name);
        const imageRef = ref(storage, `img/${image.name + uuidv4()}`);
        const uploadFile = uploadBytesResumable(imageRef, image);

        uploadFile.on('state_changed', (snapshot) => {
            const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setProgress(progress);

            if (progress === 100) {
                // When progress reaches 100%, get the download URL
                getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                    setDownloadURL(downloadURL);
                    setImageUrl(downloadURL);
                    console.log("Download URL:", downloadURL);
                }).catch((error) => {
                    console.error("Error getting download URL:", error);
                });
            }
        });
    } else {
        console.log('image is null');
    }
}

const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log('before data ', name, email, contact, password)
    // post data to database
    try {
        console.log(name, email, contact, password);
        if (!name || !email || !contact || !password || !imageUrl) {
            throw new Error('please fill all fields')
        }
        let data = { name, email, contact, password, imageUrl }; // Include download URL in the data
        let res = await axios.post('http://localhost:9000/students', data);
        console.log(res.data);
        alert('you have successfully registered');
    } catch (error) {
        // Error handling
        console.error('Error:', error.message);
    }
}

        
       
      
        
  
       return (
          <>
          
            <div className = "mall ">
              <div className = "ain "></div>
                    <div className='complete container '>
                   
                         <h1>Sign up</h1>  
                         
                       <div className = "box">
                      
                         <form className = "formValue" onSubmit = {SubmitHandler}>
                           <div className='input'>
                                 <img src = {profiles} className='pic' />
                                 <input type = "text" className = "ans" placeholder = "Your Name" value = {name} onChange = {(e)=>{setName(e.target.value)}}
                                    />
                                 <hr className='line'/>
                           </div>
                           <div className='input'>
                                 <img src = {emails} className='pic'   alt = ""/>
                                 <input type = "email" className = "ans" placeholder = "Your email" value = {email}onChange = {(e)=>{setEmail(e.target.value)}} />
                                 <hr className='line' />
                           </div>
                           <div className='input'>
                                 <img src = "" />
                                 <input type = "number" placeholder = "Your contact" className = "ans" value = {contact} onChange = {(e)=>{setContact(e.target.value)}} />
                                 <hr className='line' />
                           </div>
                           <div className='input'>
                                 <img src = {locks} className='pic'/>
                                 <input type = "password" placeholder = "Your password" autoComplete='off' className = "ans" value = {password} onChange = {(e)=>{setPassword(e.target.value)} }/>
                                 <hr className='line' />
                           </div>
                           <div className = "input d-flex">
                                <input 
                               type = "file" 
                              accept = "image/*" 
                                onChange = {(event)=>{setImage(event.target.files[0])}}    />
                           <button type="button" className="btn btn-secondary mt-1 " id = "image" onClick = {uploadChanger}>upload</button>     
                           </div>
                           {/* progress bar og image  */}
                         {progress!==0?(
                         <div className='progress my-1.5'>
                              <div className='progress-bar' style = {{width:`${progress}%`}}>

                              </div>
                         </div>) :null}
                           <button type="submit" className="btn btn-primary mt-1 ">Register</button>
                          
                               
                         </form>
                         
                         {/* image */}
                         <div className='neo'>
                            <img src = {logo} className='logo3'/>
                            <Link to = "/login"><p className='content'>I am already registered</p></Link>
                         </div>
                         </div> 
                    </div>
                </div>    
                
          </>
       )
}
export default SignUp;