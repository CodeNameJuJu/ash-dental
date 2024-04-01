import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './modal';

function Navigate({ name, path }) {
    return (
        <Link className="nav-item nav-link" to={path} title={name}>
            {name}
        </Link>
    );
}

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const navbar = document.getElementById('navbarSupportedContent');
        if (navbar) {
            navbar.classList.remove('show');
        }
    }, [location]);

    return (
        <>
        <nav className="navbar navbar-light bg-color navbar-expand-lg sticky-top " id="myTopnav">
            <div className="container-fluid">
                <Link className="active" to="/" title="ASH DENTAL">
                    <img className="logo img-fluid" src="/Images/primary logo/Ash Dental logo-01.webp" alt="Ash Dental Logo" />
                </Link>
                <button
                    className="navbar-toggler ms-auto fadeIn-animation"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="fa fa-bars gold" style={{ 'fontSize': '25px' }}></i>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-hover">
                            <Navigate name={'Home'} path={'/'} />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate name={'Services'} path={'/services'} />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate name={'About'} path={'/about'} />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate name={'Technology'} path={'/technology'} />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate name={'Gallery'} path={'/gallery'} />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate name={'Contact'} path={'/contact'} />
                        </li>
                    </ul>
                    <div className="d-flex ml-auto">
                        <button type="button" className="btn btn-bg btn-link ms-auto" onClick={openModal} title="Documents">
                            Book an appointment
                        </button>
                    </div>
                </div>

            </div>
        </nav>
        <Modal showModal={showModal} closeModal={closeModal} />
        </>
    );
}

export default Navbar;

// ******************************************************************* EOF ******************************************************************************
