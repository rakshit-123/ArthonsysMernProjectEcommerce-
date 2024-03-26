import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate directly
import { FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa';
import emails from '../assets/email.png';
import locks from '../assets/lock.png';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const handleLogin = () => {
    // Perform login logic...
    setIsLoggedIn(true);
  };

  const LoginHandler = async (e) => {
    // console.log('loginhandler run');
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Please fill in both email and password fields");
        return; // Exit early if fields are empty
      }

      const data = { email, password };
      const res = await axios.post('http://localhost:9000/login', data);
      console.log(res);

      if (res && res.data.token) {
        localStorage.setItem('jwttoken', res.data.token);

        if (res.data.user) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          
          if (res.data.user.imageUrl) {
            localStorage.setItem('imageUrl', res.data.user.imageUrl);
          } 
          else {
            console.error("Image URL not provided");
          }
        } else {
          console.error("User data not provided");
        }
       // Navigate to '/about' on successful login
        setIsLoggedIn(true);
        // navigate('/About');
         navigate('/Items');
         
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="mall">
        <div className="ain"></div>
        <div className='complete'>
          <h1 className='sign'>Sign in</h1>
          <div>{error}</div>
          <div className="box">
            <div>
              <img src={logo} className='logo2' alt="Logo" />
              <Link to="/signUp"><p className='content2 pix'>create an account</p></Link>
            </div>
            <form className="formValue2" method="POST" onSubmit={LoginHandler}>
              <div className='input'>
                <img src={emails} className='pic' alt="Email icon" />
                <input type="email" name="email" className="ans" placeholder="Your email" onChange={(e) => { setEmail(e.target.value) }} autoComplete="email" />
                <hr className='line' />
              </div>
              <div className='input'>
                <img src={locks} className='pic' alt="Lock icon" />
                <input type="password" name="password" placeholder="Your password" className="ans" autoComplete="current-password" onChange={(e) => { setPassword(e.target.value) }} />
                <hr className='line' />
              </div>
 <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log in</button>
              <p className="mt-3 pix">or Login with</p>&nbsp;<span className = "d-flex">
                <FaGoogle  style = {{fontSize:"24px"}} /> &nbsp;&nbsp;&nbsp;
                <FaTwitter style = {{fontSize:"24px"}} /> &nbsp;&nbsp;&nbsp;
                <FaFacebook  style = {{fontSize:"24px"}}/> &nbsp;&nbsp;&nbsp;
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
