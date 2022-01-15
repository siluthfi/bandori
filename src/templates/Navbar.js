import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    if (props.history.location.pathname == "/") {
        props.history.push('/home')
    }

    return (
        <section data-label-sendiri="navbar-section">
            <nav className="navbar fixed-top navbar-expand navbar-dark py-3 fs-5 fw-bold">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bands">Bands</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5">
                <div className="row mb-4"></div>
            </div>
        </section>
    );
}
 
export default withRouter(Navbar);