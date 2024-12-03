import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Handle change of search query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Optionally, handle search submit or search logic here
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Search query:", searchQuery);
        if(searchQuery === "Youssef"){  
            navigate('/Search')
        }
    };

    if (location.pathname === '/') {
        return (
            <>
                <nav className="navbar">
                    <div className="logo">Deal<span>X</span></div>
                    <ul className="nav-links">
                        <li><NavLink to="/"> Home </NavLink> </li>
                        <li><NavLink to="/MainUser"> Products </NavLink></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#deals">Deals</a></li>
                        <li>
                            <NavLink
                                to="/Login"
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <hr />
            </>
        );
    } 
        return (
            <>
                <nav className="navbar">
                    <div className="logo">
                        Deal<span>X</span>
                    </div>
                    <ul className="nav-links">
                    <li><NavLink to="/"> Home </NavLink> </li>
                    <li><NavLink to="/MainUser"> Products </NavLink></li>
                    <li><a href="#categories">Categories</a></li>
                        <li><a href="#deals">Deals</a></li>
                    </ul>

                    {/* Search Bar Section */}
                    <div className="search-bar">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="nav-icons">
                        <a href="#cart"><i className="fa fa-shopping-cart"></i></a>
                        <a href="#profile"><i className="fa fa-user"></i></a>
                    </div>
                </nav>
                <hr />
            </>
        );
    }



export default MainNav;
