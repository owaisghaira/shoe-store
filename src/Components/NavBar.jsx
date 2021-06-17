import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo2.jpg'
function NavBar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img width='50' src={Logo}></img>
                <Link to='/' className="navbar-brand" href="#">Shoe Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/product' className="nav-link" href="#">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
