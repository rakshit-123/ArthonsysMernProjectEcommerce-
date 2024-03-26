import './Home.css';
import HomeImage from '../assets/HomeImage.avif';
import Information from './Information';
const Home = ()=>{
     return(
           <>
           <div className='mero'>
           <div className="card bg-dark text-white">
             <img className="card-img" src = {HomeImage} alt="Card image cap" height = "635px" />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
   <div className='container'>
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDZ</p>
    
  </div>
</div>
</div>  
   <Information />
           </div>



           </>
     )  
}
export default Home;