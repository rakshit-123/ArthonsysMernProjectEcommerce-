import './SearchItem.css';
import {useParams} from 'react-router-dom';
import All_product from './All_product';
import { useEffect,useState } from 'react';
import Catalogue from './Catalogue';
const SearchItem = ()=>{
    // console.log(useParams());
    const {title} = useParams();
     console.log(title);
    const [filterData,setFilterData] = useState([]);
    useEffect(()=>{
          const filteredData = ()=>{
              const data = All_product.filter((p)=>p.title.toLowerCase().includes(title.toLowerCase()))
               console.log(data);
            setFilterData(data);
          }
          filteredData();
            
    },[title])
   
      return(
            <>
            
             
                {filterData.map((product) => (
                            <Catalogue
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                            

                        ))}
                         {filterData.map((product) => (
                            <Catalogue
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                            

                        ))}
            </>
      )
}
export default SearchItem;