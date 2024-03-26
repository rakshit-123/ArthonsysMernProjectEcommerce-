import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
    };

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItemCount(storedCartItems.length);
    }, []);

    const handleItemsClick = () => {
        if (isLoggedIn) {
            navigate('/Items');
        } else {
            navigate('/login');
        }
    };

    const searchSubmit = (e) => {
        e.preventDefault();
        navigate(`/product-cart/${searchTerm}`);
        setSearchTerm("");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand pix" to="#">Arthonsys</Link>
                    {location.pathname === "/Items" && (
                        <form className='search-bar' onSubmit={searchSubmit}>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search for Products, brands & more"
                                className="searchInput"
                            />
                        </form>
                    )}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" className ="side">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active pix" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleItemsClick} className="nav-link active pix lm2" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Items</button>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link pix lm">Dashboard</Link>
                            </li>
                            {isLoggedIn ? (
                                <li onClick={handleLogout} className="nav-link pix">Logout</li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link pix">Login</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link pix" to="/signUp">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pix add" to="/Cart">
                                    <FaShoppingCart style={{ fontSize: '24px' }} />
                                    {cartItemCount > 0 && <div className='nav-cart-count' id='lblCartCount'>{cartItemCount}</div>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
