import './About.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const callAboutPage = async() => {
    
    const token = localStorage.getItem('jwttoken');
    const userString = localStorage.getItem('user');
    // const storedImageUrl = localStorage.getItem('imageUrl');
     console.log(token);
    if (!token || !userString) {
      navigate('/Login');
      return;
  
    }
  
    try {
      const user = JSON.parse(userString);
      setUser(user);
      // const imageUrl = JSON.parse(user.imageUrl);
      setImageUrl(user.imageUrl);
    } catch (error) {
      console.error('Error parsing user data:', error);
      // navigate('/Login');
      return;
    }
  
   
  };
  

  useEffect(() => {
    callAboutPage();
    
  });

  return (
    <div className="boxUpper">
      <h1 className="about-title">Welcome {user.name} again!!!</h1>
      <div className="boxInner">
        <div className="about-container">
          <div className="card" style={{ width: '15rem', height: '15rem' }}>
            <img className="card-img-top" src={imageUrl} alt="User" />
          </div>
          <ul className="about-ul">
            <li>
              <span className="about-label">User ID:</span> {user._id}
            </li>
            <li>
              <span className="about-label">Name:</span> {user.name}
            </li>
            <li>
              <span className="about-label">Email:</span> {user.email}
            </li>
            <li>
              <span className="about-label">Phone:</span> {user.contact}
            </li>
            <li>
              <span className="about-label">Profession:</span> Web Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
