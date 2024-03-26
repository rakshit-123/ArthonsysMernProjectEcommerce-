
 import pic32 from '../assets/pic32.jpg';
import pic14 from '../assets/pic14.jpg';
import pic16 from '../assets/pic16.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic11 from '../assets/pic11.jpg';
import pic2 from '../assets/pic2.png';
import pic4 from '../assets/pic4.jpeg';
// import {useEffect } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


let All_product = [
    { productId :1,
        pmgsrc:"https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg",
    
    title:"laproductId-Back Picks",
    head:"Flat 60% Off",
    price:2500

    },
    {productId : 2,
    pmgsrc:pic2,
    title:"vibrant chic lingerie",
    head:"40-70 Off",
    price : 3500,

    },
    { productId : 3,
    pmgsrc:"https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/195508s.jpg",
    title:"Gant Next",
    head:"Min 60% Off",
    price : 800,

    },
    { productId : 4,
    pmgsrc:pic4,
    title:"Allen Solly shoes",
    head:"Min 50% Off",
    price : 700,

    },
    {  productId : 5,
    pmgsrc : pic5,
     title:"Sturdy Kicks ",
     head:"Min 70% Off",
     price : 2500,

    },
    {productId : 6,
    pmgsrc:pic6,
    title:" Elegant Ethnic Styles",
    head:" FLAT.50% OFF",
     price : 100

    },
    {
        productId:7,
      pmgsrc:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_21/1998804/220626-summer-sandals-bd-2x1.jpg",
    title:"Hottest Pairs",
    head:"Flat 60% Off",
    price : 300

    },
    {
        productId:8,
        pmgsrc:"https://i.pinimg.com/564x/c5/db/51/c5db5166712b004d2439f6da80b8d33d.jpg",
              title:"Stunning Footwear",
              head:"40-70 Off",
              price : 200

    },
    {     productId:9,
        pmgsrc:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg",
        title:"Sneakers & More",
        head:"Min 60% Off",
        price : 400

    },
    {   productId:10,
        pmgsrc:"https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg",
              title:"Must Have Collection",
              head:"Min 50% Off",
              price : 700

    },
    {    productId : 11,
        pmgsrc:pic11,
        title:"Popular Styles",
        head:"Min 70% Off",
        price : 100

    },
    {     productId : 12,
        pmgsrc:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16641820/2021/12/29/fe425551-624e-43be-b559-77876ea488ef1640793574915Sunglasses1.jpg",
              title:"Trendiest Fits ",
              head:"Min.30% OFF ",
              price : 350
    },
    { 
        productId :13,
        pmgsrc:"https://5.imimg.com/data5/SELLER/Default/2023/7/323164902/OR/VL/VP/15389059/whatsapp-image-2023-07-07-at-10-24-58-500x500.jpeg ",
        title:"Ethnic wear",
        head:"Flat 60% Off",
        down:"Shop Now",
        price :800

    },
    {
        productId : 14,
        pmgsrc:pic14,
        title:"Wfh Casual Wear",
        head:"40-70 Off",
        down:"Shop Now"
        ,price :800

    },
    {
        productId : 15,
        pmgsrc:"https://m.media-amazon.com/images/I/61zsldI1SRL._AC_UY1100_.jpg",
        title:"ActiveWear",
        head:"Min 60% Off",
        down:"Shop Now"  ,price :800

    },
    
    {productId : 16,
      pmgsrc:pic16,
      title:"ActiveWear",
      head:"Min 50% Off",
      down:"Shop Now"  ,price :800
        

    },
    {
        productId : 17,
        pmgsrc:"https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcRKibo1GEwVc-ZbC6cnOZC28Ty3XxZBPyP_QOWczDJ78RJTFP_dq-ajqpRWPUz4Srfkqyk&usqp:CAU",
        title:"WesternWear",
        head:"Min 70% Off",
        down:"Shop Now"  ,price :800
    },
    {

        productId : 18,
        pmgsrc:"https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto:compress&cs:tinysrgb&dpr:1&w:500 ",
         title:"Eyewear " ,
         head:" 80% OFF  ",
         down:"Shop Now" ,  price :800

    },
    {
        productId : 19,
              pmgsrc:"https://media.glamour.com/photos/61b851588d0c8919039bb21a/3:2/w_3000,h_2000,c_limit/cozy%20loungewear%20sets.jpg ",
              title:"LoungeWear",
              head:"Flat 60% Off",
              down:"Shop Now",price :800
    },
    {
        productId : 20,
              pmgsrc:"https://img.freepik.com/free-photo/portrait-sporty-handsome-strong-man-healthy-smiling-athletic-fitness-model-posing-near-gray-wall-white-underwear_158538-17455.jpg",
              title:"Innerwear",
              head:"40-70 Off",
              down:"Shop Now",price :800
              

    },
  
    {
        productId : 21,
       pmgsrc:"data:image/jpeg;base64,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 ",
              title:"Beauty & Makeup ",
              head:" 60% OFF ",
              down:"Shop Now",price :800

    },
  
    {
        productId : 24,
              pmgsrc:"https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs:srgb&dl:pexels-files-1620760.jpg&fm:jpg ",
              title:"KproductIds Wear",
              head:"Flat 60% Off",
              down:"Shop Now",price :800

    },
  
    {
        productId : 25,
        pmgsrc:"https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg",
        title:"FootWear",
        head:"40-70 Off",
        down:"Shop Now",price :800
    },
  
    {
        productId : 26,
        pmgsrc:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
        title:"Footwear",
        head:"Min 60% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 27,
        pmgsrc:"https://images.freekaamaal.com/featured_images/bags-belts-wallets.jpg",
        title:"Bags,Belts & Wallets",
        head:"Min 50% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 28,
        pmgsrc:"https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcT3mYuwIpxxOsg9rNpEq0JO_pZ_lRoI125DfMio6KZeKKOLGdUiimWeYyrAwjcjgZ0V9ts&usqp:CAU",
        title:"Office Wear",
        head:"Min 70% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 29,
        pmgsrc:"https://images.unsplash.com/photo-1615873968403-89e068629265?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGRlY29yfGVufDB8fDB8fHww",
        title:"Home Decor",
        head:"Flat 60% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 30,
        pmgsrc:"https://www.shutterstock.com/image-photo/pastel-colored-womens-hand-bag-260nw-2316939619.jpg",
        title:"HandBags",
        head:"40-70 Off",
        down:"Shop Now",price :800
    },
  
    {
        productId : 31,
        pmgsrc:"https://helpdeskgeek.com/wp-content/pictures/2020/10/1.jpg",
        title:"Headphones & Speakers",
        head:"Min 60% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 32,
                pmgsrc:pic32,
                title :"Mens kurta",
        head:"Min 50% Off",
        down:"Shop Now",price :800

    },
  
    {
        productId : 33,
        pmgsrc:"https://www.byrdie.com/thmb/d0UGKtmhYKiproductIdmcUzZsh0Qkhckg:/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuperFitHero-1e1dbc691e8f4d399132c58dbe6e233e.jpeg",
        title:"Size-inclusive Styles",
        head:"Min 70% Off",
        down:"Shop Now"

    },
  
    {
        productId : 34,
        pmgsrc:"https://www.uniformsarees.in/cdn/shop/products/Gray_Stripes_Formal_Wear_for_Corporate_Office_D-98104.jpg?v:1579880695 " ,title:"WorkWear ",
         head:"40-80% OFF ",
     down:"Shop Now" ,price :800

    },
    {
        productId : 35,
              pmgsrc:"https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs:srgb&dl:pexels-files-1620760.jpg&fm:jpg ",
              title:"KproductIds Wear",
              head:"Flat 60% Off",
              down:"Shop Now"
              ,price :800
    },
    {
        productId : 36,
        pmgsrc:"https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg",
        title:"FootWear",
        head:"40-70 Off",
        down:"Shop Now",price :800

    },
    {
        productId : 37,
        pmgsrc:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
        title:"Footwear",
        head:"Min 60% Off",
        down:"Shop Now",price :800
    }
   
]
export default All_product;


// const All_Products = () => {
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Assuming `All_product` is defined somewhere in your component or fetched from an API
//                 const All_product = [
//                     {
//                         productId: 1,
//                         pmgsrc: "https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg",
//                         title: "laproductId-Back Picks",
//                         head: "Flat 60% Off",
//                         price: 2500
//                     },
//                     { productId :1,
//                                 pmgsrc:"https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg",
                            
//                             title:"laproductId-Back Picks",
//                             head:"Flat 60% Off",
//                             price:2500
                        
//                             },
//                             {productId : 2,
//                             pmgsrc:pic2,
//                             title:"vibrant chic lingerie",
//                             head:"40-70 Off",
//                             price : 3500,
                        
//                             },
//                             { productId : 3,
//                             pmgsrc:"https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/195508s.jpg",
//                             title:"Gant Next",
//                             head:"Min 60% Off",
//                             price : 800,
                        
//                             },
//                             { productId : 4,
//                             pmgsrc:pic4,
//                             title:"Allen Solly shoes",
//                             head:"Min 50% Off",
//                             price : 700,
                        
//                             },
//                             {  productId : 5,
//                             pmgsrc : pic5,
//                              title:"Sturdy Kicks ",
//                              head:"Min 70% Off",
//                              price : 2500,
                        
//                             },
//                             {productId : 6,
//                             pmgsrc:pic6,
//                             title:" Elegant Ethnic Styles",
//                             head:" FLAT.50% OFF",
//                              price : 100
                        
//                             },
//                             {
//                                 productId:7,
//                               pmgsrc:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_21/1998804/220626-summer-sandals-bd-2x1.jpg",
//                             title:"Hottest Pairs",
//                             head:"Flat 60% Off",
//                             price : 300
                        
//                             },
//                             {
//                                 productId:8,
//                                 pmgsrc:"https://i.pinimg.com/564x/c5/db/51/c5db5166712b004d2439f6da80b8d33d.jpg",
//                                       title:"Stunning Footwear",
//                                       head:"40-70 Off",
//                                       price : 200
                        
//                             },
//                             {     productId:9,
//                                 pmgsrc:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg",
//                                 title:"Sneakers & More",
//                                 head:"Min 60% Off",
//                                 price : 400
                        
//                             },
//                             {   productId:10,
//                                 pmgsrc:"https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg",
//                                       title:"Must Have Collection",
//                                       head:"Min 50% Off",
//                                       price : 700
                        
//                             },
//                             {    productId : 11,
//                                 pmgsrc:pic11,
//                                 title:"Popular Styles",
//                                 head:"Min 70% Off",
//                                 price : 100
                        
//                             },
//                             {     productId : 12,
//                                 pmgsrc:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16641820/2021/12/29/fe425551-624e-43be-b559-77876ea488ef1640793574915Sunglasses1.jpg",
//                                       title:"Trendiest Fits ",
//                                       head:"Min.30% OFF ",
//                                       price : 350
//                             },
//                             { 
//                                 productId :13,
//                                 pmgsrc:"https://5.imimg.com/data5/SELLER/Default/2023/7/323164902/OR/VL/VP/15389059/whatsapp-image-2023-07-07-at-10-24-58-500x500.jpeg ",
//                                 title:"Ethnic wear",
//                                 head:"Flat 60% Off",
//                                 down:"Shop Now",
//                                 price :800
                        
//                             },
//                             {
//                                 productId : 14,
//                                 pmgsrc:pic14,
//                                 title:"Wfh Casual Wear",
//                                 head:"40-70 Off",
//                                 down:"Shop Now"
//                                 ,price :800
                        
//                             },
//                             {
//                                 productId : 15,
//                                 pmgsrc:"https://m.media-amazon.com/images/I/61zsldI1SRL._AC_UY1100_.jpg",
//                                 title:"ActiveWear",
//                                 head:"Min 60% Off",
//                                 down:"Shop Now"  ,price :800
                        
//                             },
                            
//                             {productId : 16,
//                               pmgsrc:pic16,
//                               title:"ActiveWear",
//                               head:"Min 50% Off",
//                               down:"Shop Now"  ,price :800
                                
                        
//                             },
//                             {
//                                 productId : 17,
//                                 pmgsrc:"https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcRKibo1GEwVc-ZbC6cnOZC28Ty3XxZBPyP_QOWczDJ78RJTFP_dq-ajqpRWPUz4Srfkqyk&usqp:CAU",
//                                 title:"WesternWear",
//                                 head:"Min 70% Off",
//                                 down:"Shop Now"  ,price :800
//                             },
//                             {
                        
//                                 productId : 18,
//                                 pmgsrc:"https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto:compress&cs:tinysrgb&dpr:1&w:500 ",
//                                  title:"Eyewear " ,
//                                  head:" 80% OFF  ",
//                                  down:"Shop Now" ,  price :800
                        
//                             },
//                             {
//                                 productId : 19,
//                                       pmgsrc:"https://media.glamour.com/photos/61b851588d0c8919039bb21a/3:2/w_3000,h_2000,c_limit/cozy%20loungewear%20sets.jpg ",
//                                       title:"LoungeWear",
//                                       head:"Flat 60% Off",
//                                       down:"Shop Now",price :800
//                             },
//                             {
//                                 productId : 20,
//                                       pmgsrc:"https://img.freepik.com/free-photo/portrait-sporty-handsome-strong-man-healthy-smiling-athletic-fitness-model-posing-near-gray-wall-white-underwear_158538-17455.jpg",
//                                       title:"Innerwear",
//                                       head:"40-70 Off",
//                                       down:"Shop Now",price :800
                                      
                        
//                             },
                          
//                            
                          
//                             {
//                                 productId : 24,
//                                       pmgsrc:"https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs:srgb&dl:pexels-files-1620760.jpg&fm:jpg ",
//                                       title:"KproductIds Wear",
//                                       head:"Flat 60% Off",
//                                       down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 25,
//                                 pmgsrc:"https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg",
//                                 title:"FootWear",
//                                 head:"40-70 Off",
//                                 down:"Shop Now",price :800
//                             },
                          
//                             {
//                                 productId : 26,
//                                 pmgsrc:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
//                                 title:"Footwear",
//                                 head:"Min 60% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 27,
//                                 pmgsrc:"https://images.freekaamaal.com/featured_images/bags-belts-wallets.jpg",
//                                 title:"Bags,Belts & Wallets",
//                                 head:"Min 50% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 28,
//                                 pmgsrc:"https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcT3mYuwIpxxOsg9rNpEq0JO_pZ_lRoI125DfMio6KZeKKOLGdUiimWeYyrAwjcjgZ0V9ts&usqp:CAU",
//                                 title:"Office Wear",
//                                 head:"Min 70% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 29,
//                                 pmgsrc:"https://images.unsplash.com/photo-1615873968403-89e068629265?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGRlY29yfGVufDB8fDB8fHww",
//                                 title:"Home Decor",
//                                 head:"Flat 60% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 30,
//                                 pmgsrc:"https://www.shutterstock.com/image-photo/pastel-colored-womens-hand-bag-260nw-2316939619.jpg",
//                                 title:"HandBags",
//                                 head:"40-70 Off",
//                                 down:"Shop Now",price :800
//                             },
                          
//                             {
//                                 productId : 31,
//                                 pmgsrc:"https://helpdeskgeek.com/wp-content/pictures/2020/10/1.jpg",
//                                 title:"Headphones & Speakers",
//                                 head:"Min 60% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 32,
//                                         pmgsrc:pic32,
//                                         title :"Mens kurta",
//                                 head:"Min 50% Off",
//                                 down:"Shop Now",price :800
                        
//                             },
                          
//                             {
//                                 productId : 33,
//                                 pmgsrc:"https://www.byrdie.com/thmb/d0UGKtmhYKiproductIdmcUzZsh0Qkhckg:/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuperFitHero-1e1dbc691e8f4d399132c58dbe6e233e.jpeg",
//                                 title:"Size-inclusive Styles",
//                                 head:"Min 70% Off",
//                                 down:"Shop Now"
                        
//                             },
                          
//                             {
//                                 productId : 34,
//                                 pmgsrc:"https://www.uniformsarees.in/cdn/shop/products/Gray_Stripes_Formal_Wear_for_Corporate_Office_D-98104.jpg?v:1579880695 " ,title:"WorkWear ",
//                                  head:"40-80% OFF ",
//                              down:"Shop Now" ,price :800
                        
//                             },
//                             {
//                                 productId : 35,
//                                       pmgsrc:"https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs:srgb&dl:pexels-files-1620760.jpg&fm:jpg ",
//                                       title:"KproductIds Wear",
//                                       head:"Flat 60% Off",
//                                       down:"Shop Now"
//                                       ,price :800
//                             },
//                             {
//                                 productId : 36,
//                                 pmgsrc:"https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg",
//                                 title:"FootWear",
//                                 head:"40-70 Off",
//                                 down:"Shop Now",price :800
                        
//                             },
//                             {
//                                 productId : 37,
//                                 pmgsrc:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q:80&w:1000&auto:format&fit:crop&ixlib:rb-4.0.3&ixproductId:M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
//                                 title:"Footwear",
//                                 head:"Min 60% Off",
//                                 down:"Shop Now",price :800
//                             }
                           
//                 ];
               



//                 // Make the POST request
//                 const response = await axios.post('http://localhost:9000/All_products',All_product);

//                 // Handle response if needed
//                 console.log('Response:', response.data);
//             } catch (error) {
//                 // Handle error if the request fails
//                 console.error('Error fetching data:', error);
//             }
//         };

//         // Call the fetchData function when the component mounts
//         fetchData();
//     }, []); // Empty dependency array ensures the effect runs only once after the initial render

//     return (
//         // JSX for your component goes here
//         // Make sure to render your product data if needed
//         <div>
//             {/* Example rendering */}
//             <h1>All Products</h1>
//             {/* Render products here */}
//         </div>
//     );
// };

// export default All_Products;