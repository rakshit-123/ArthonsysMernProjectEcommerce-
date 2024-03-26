import './Contact.css';

const Contact = ()=>{
       return (
          <>
          <div className='topUpr'>
              <div className='top'>
                   <div className='topComp'>
                    <p>Phone</p>
                     <p>+91 11234567890</p>
                   </div>
                   <div className='topComp'>
                     <p>Email</p>
                     <p>jainrakshit389@gmail.com</p>
                   </div>
                   <div className='topComp'>
                    <p>Address</p>
                    <p>Gandhi chowk</p>
                   </div>
              </div>
              <div className='complete2'>
                         <h3>Get in touch</h3>  
                       <div className = "box">
                      
                         <form className = "formValue4">
                         <div className='top'>
                   <div className='topComp7'>
                    <input type = "text" placeholder = "your Name" className='in'/>
                     
                   </div>
                   <div className='topComp7'>
                   <input type = "email" placeholder = "your Email" className='in' />
                   
                   </div>
                   <div className='topComp7'>
                    <input type = "password" placeholder = "your Password" className='in' />
                   
                   </div>
                   
              </div>  
              <input type = "text" placeholder='message' className = "message " />     
                               
                           <button type="button"  className="btn btn-primary sendMessage">Send Your Message</button>

                               
                         </form>
                         
                        
                     
                         </div> 
                    </div>
              </div>
            
          </>
       )
}
export default Contact;