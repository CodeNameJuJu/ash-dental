import '../Main.css';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigate({ name, path }) {
    return (

        <Link className="nav-item nav-link" to={path} title={name}>
            {name}
        </Link>

    );
}


function Navbar() {

    const location = useLocation();

    useEffect(() => {
        const navbar = document.getElementById('navbarSupportedContent');
        if (navbar) {
            navbar.classList.remove('show');
        }
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand nav-link shine" to="/" title='Identical Teeth'>
                    Ash Dental
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Home'}
                                path={'/'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Services'}
                                path={'/services'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'About'}
                                path={'/about'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Technology'}
                                path={'/technology'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Smile Gallery'}
                                path={'/gallery'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Contact'}
                                path={'/contact'}
                            />
                        </li>
                    </ul>
                </div>
            </div >
        </nav >

    )
}

export default Navbar;