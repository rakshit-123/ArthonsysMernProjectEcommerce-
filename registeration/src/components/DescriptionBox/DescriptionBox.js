import './DescriptionBox.css';
const DescriptionBox = ()=>{
    return (
        <div className="descriptionbox">
               <div className='descriptionbox-navigator'>
               <div className='descriptionbox-nav-box'>Description</div>
               <div className='descriptionbox-nav-box fade'>Reviews {122}</div>
               </div>
           <div className='descriptionbox-description'>
              <p>An ecommerce website serves as a virtual marketplace where businesses showcase their products or services and customers browse, compare, and purchase items online. Featuring a user-friendly interface, secure payment gateways, and comprehensive product catalogs, these platforms provide convenience and accessibility to customers worldwide. With features like personalized accounts, responsive design, and efficient order management, ecommerce websites offer a seamless shopping experience while fostering trust and loyalty through reviews, promotions, and dedicated customer support.</p>
              <p>Ecommerce websites leverage digital technology to facilitate seamless transactions between buyers and sellers, enabling businesses to reach a global audience and customers to access a wide array of products from the comfort of their homes. Through intuitive interfaces and robust backend systems, these platforms streamline the entire shopping process, from browsing to checkout, enhancing convenience and efficiency for both parties.</p>
           </div>    
        </div>

    )

}
export default DescriptionBox;