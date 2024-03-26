import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.webp';
import offer4 from '../assets/offer4.jpg';
import offer5 from '../assets/offer5.png';

import './Carousel.css';
const Carousel = ()=>{
    return (
       <>
        
        <div className = "xy">

{/* <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner l10">
    <div className="carousel-item active">
      <img src={offer1} className="d-block w-100  car" alt="..." />
    </div>
    <div className="carousel-item">

      <img src={offer2} className="d-block w-100 car" alt="..." />
    </div>
    <div className="carousel-item">
      <img src= {offer3} className="d-block w-100 car" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner l10">
    <div className="carousel-item active" data-bs-interval="500">
      <img src= {offer4} className="d-block w-100 car" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src= {offer2} className="d-block w- car" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src= {offer3} className="d-block w-100 car" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src= {offer4} className="d-block w- car" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src= {offer1} className="d-block w- car" alt="..." />
    </div>    

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
     </>  
    )
}
export default Carousel;