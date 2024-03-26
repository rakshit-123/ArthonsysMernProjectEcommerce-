import "./Footer.css";
import Google from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import  original from '../assets/original.png';
import number14 from '../assets/number14.png';
const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <div class="col-8">
            <div>
              <div class="container text-center">
                <div class="row">
                  <div class="col-3">
                    <p className="py2 text-dark">ONLINE SHOPPING</p>
                    <p className="zy2 l505">Mens</p>
                    <p className="zy2">Womens</p>
                    <p className="zy2 l505">Kids</p>
                    <p className="zy2 l505">Blog</p>
                    <p className="zy2 l505">Beauty</p>
                    <p className="zy2 ">Gift Cards</p>
                  </div>
                  <div class="col-3">
                    <p className="py2 dark">Customer Policies</p>
                    <p className="zy2">Contact us</p>
                    <p className="zy2 ">FAQ</p>
                    <p className="zy2">T&C</p>
                    <p className="zy2">Terms Of Use</p>
                    <p className="zy2">Shipping</p>
                    <p className="zy2">Cancellation</p>
                    <p className="zy2">Returns</p>
                    <p className="zy2">Privacy Policy</p>
                    <p className="zy2">Grievance Officer</p>
                    <p className="zy2">Returns</p>
                  </div>
                  <div class="col-5">
                    <p className="py2 text-dark">
                      EXPERIENCE MYNTRA App On MOBILE
                    </p>

                    <div className="row">
                      <div className="col-6 jio">
                        <img src={Google} />
                      </div>
                      <div className="col-6 jio">
                        <img src={appStore} />
                      </div>
                    </div>
                    {/* <p className='zy2'>Shoes</p>
          <p className='zy2'>Dress</p> */}

                    <p className="py8 text-dark">KEEP IN TOUCH</p>
                    <div className="row g001">
                      <div className="col lo">
                        {/* <p>Watch</p>  */}
                        <FaFacebook />
                      </div>
                      <div className="col lo">
                        {/* <p>Bag</p> */}
                        <FaInstagram />
                      </div>
                      <div className="col lo">
                        {/* <p>Shoes</p> */}
                        <FaLinkedin />
                      </div>
                      <div className="col lo">
                        {/* <p>Shoes</p> */}
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="g888">
              {/* <div className="g111"> */}
                {/* logo */}
                {/* <span className="inLine"> */}
                <img src = {original} className = "inLine l999"/>
               
                  <h6 className="inLine">100% ORIGINAL</h6> &nbsp;
                {/* </span> */}
                   
                  {/* <span className="inLine">  */}
                  <p className="inLine z222">guarantee for</p>
                 {/* </span>  */}
                  {/* <br /> */}
                  <p className="z222">all products at myntra.com</p>

                
              {/* </div> */}
            </div>
            <div className="g333">
              {/* <div className="g111"> */}
                {/* logo */}
                {/* <span className="inLine"> */}
                <img src = {number14} className = "inLine l999"/> 
               
                  <h6 className="inLine">Return within 14 days</h6>&nbsp;
                {/* </span> */}
                   
                  {/* <span className="inLine">  */}
                  <p className="inLine z222">of</p>
                 {/* </span>  */}
                  {/* <br /> */}
                  <p className="z222">receiving your order</p>

                
              {/* </div> */}
            </div>
          </div>
         </div> 
          {/* row end */}
        </div>
        {/* main end */}
      
    </>
  );
};
export default Footer;
