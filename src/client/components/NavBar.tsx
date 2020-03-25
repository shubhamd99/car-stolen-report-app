import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const AdapterLink = ((props: any) => (
    <Link {...props} />
));

interface INavBarProps {
    page: string,
    name?: string,
}

const NavBar: React.FC<INavBarProps> = (props) => {
    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
                <div className="container">
                <AdapterLink to="/home" className="navbar-brand">{props.name ? props.name : "Stolen Car"}</AdapterLink>
                <button className="navbar-toggler" type="button" >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className={props.page === "home" ? "nav-item active" : "nav-item "}><AdapterLink to="/home" className="nav-link">Home</AdapterLink></li>
                    <li className={props.page === "police" ? "nav-item active" : "nav-item "}><AdapterLink to="/police/123" className="nav-link">Officers</AdapterLink></li>
                    <li className="nav-item"><AdapterLink to="/" className="nav-link">Contact</AdapterLink></li>
                    <li className="nav-item cta mr-md-2"><a href="https://github.com/shubhamd99/car-stolen-report-app"
                        target="_blank" className="nav-link">{props.name ? "Logout" : "Github"}</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;