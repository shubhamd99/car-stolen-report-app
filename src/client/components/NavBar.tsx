import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const AdapterLink = ((props: any) => (
    <Link {...props} />
));

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
                <div className="container">
                <AdapterLink to="/home" className="navbar-brand">Stolen Car</AdapterLink>
                <button className="navbar-toggler" type="button" >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><AdapterLink to="/home" className="nav-link">Home</AdapterLink></li>
                    <li className="nav-item"><AdapterLink to="/home" className="nav-link">Officers</AdapterLink></li>
                    <li className="nav-item"><AdapterLink to="/home" className="nav-link">Contact</AdapterLink></li>
                    <li className="nav-item cta mr-md-2"><a href="https://github.com/shubhamd99/car-stolen-report-app"
                        target="_blank" className="nav-link">Github</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;