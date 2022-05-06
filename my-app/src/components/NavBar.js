import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to='/Home' >Home</Link>
            </div>
            <div>
                <Link to='/About' >About</Link>
            </div>
        </div>
    )
}

export default NavBar;