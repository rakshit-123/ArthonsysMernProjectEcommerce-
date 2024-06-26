import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const Information = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setData(responseData);
                setFilter(responseData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                        <Skeleton  height = {350} />
                </div>
                <div className='col-md-3'>
                        <Skeleton  height = {350} />
                </div>
                <div className='col-md-3'>
                        <Skeleton  height = {350} />
                </div>
                <div className='col-md-3'>
                        <Skeleton  height = {350} />
                </div>
            </>
        );
    };
    const filterProduct = (cat)=>{
           const updatedList = data.filter((x)=>x.category === cat);
             setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark mx-2' onClick = {()=>{setFilter(data)}}>All</button>
                    <button className='btn btn-outline-dark mx-2' onClick = {()=>{filterProduct("men's clothing")}}>Men's Clothing</button>
                    <button className='btn btn-outline-dark mx-2'  onClick = {()=>{filterProduct("women's clothing")}} >Women's Clothing</button>
                    <button className='btn btn-outline-dark mx-2'  onClick = {()=>{filterProduct("jewelery")}} >Jewelery</button>
                    <button className='btn btn-outline-dark'onClick = {()=>{filterProduct("electronics")}} >Electronics</button>
                </div>
                <div className="row">
                    {filter.map((product) => (
                        <div key={product.id} className='col-md-3 mb-4'>
                            <div className="card h-100 text-center p-4">
                                <img className="card-img-top mb-0" src={product.image} alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default Information;
