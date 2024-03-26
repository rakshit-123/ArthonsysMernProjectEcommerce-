// // Product.js
import React from 'react';
import './Product.css';

import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import{useContext} from 'react';

import ProductDisplay from './ProductDisplay/ProductDisplay';
import DescriptionBox from './DescriptionBox/DescriptionBox';


const Product = () => {
     
  const { All_product } = React.useContext(ShopContext);
   console.log('All product is ',All_product);
    
   
  const { productId } = useParams();
  
   console.log('productId:', productId);
  const product = All_product.find((e) => e.productId === Number(productId));
   console.log('product is',product);
  return (
    <>
    
  {/* <BreadCrum product={product} />   */}
    <ProductDisplay product = {product} /> 
    <DescriptionBox />
  </>
  )
  ;
};

export default Product;
