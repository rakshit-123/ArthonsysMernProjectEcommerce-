import './RelatedProducts.css';
import AllProduct from '../data/products'; // Assuming the data file is named products.js
import Catalogue from './Catalogue'; // Assuming the Catalogue component is in the same directory

const RelatedProducts = () => {
  return (
    <>
      <div className="relatedproducts">
        <h1>Related products</h1>
        <hr />
        <div className="relatedproducts-item">
          {AllProduct.map((item, i) => {
            return (
              <Catalogue
                key={i}
                id={item.productId}
                title={item.title}
                imgsrc={item.pmgsrc} // Assuming the property name is pmgsrc
                price={item.price}
                head={item.head}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
