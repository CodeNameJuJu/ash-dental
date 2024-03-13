import React, { useState } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom';
import Modal from '../components/modal';

function Services() {

    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
    }

    function Navigate({ name, path }) {
        return (
            <Link className="nav-item nav-link" to={path} title={name}>
                {name}
            </Link>
        );
    }

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        if (window.innerWidth <= 900) {
            setIsOpen(false);
        }
    };

    const services = [
        {
            name: 'Teeth Whitening',
            path: '/teethWhitening',
            image: '/Images/FacesCloseUpsLandscape/1.png',
            description: 'Illuminate your smile with our professional teeth whitening procedures. We specialize in removing stains and discoloration, restoring the natural brilliance of your teeth.',
        },
        {
            name: 'Veneers',
            path: '/crowns',
            image: '/Images/FacesCloseUpsLandscape/4.png',
            description: 'Transform your smile with our custom-made porcelain veneers. These thin shells are expertly crafted to cover imperfections and enhance the overall appearance of your teeth.',
        },
        {
            name: 'Dental Bonding',
            path: '/dental',
            image: '/Images/FacesCloseUpsLandscape/8.png',
            description: 'Address chipped or discoloured teeth with our dental bonding services. Using tooth-coloured resin, we sculpt and shape the material to achieve a seamless and natural look.',
        },
        {
            name: 'Dental Crowns',
            path: '/crowns',
            image: '/Images/ServicesLandscape/Crowns2.png',
            description: 'Revitalize damaged or discoloured teeth with our dental crowns made out of emax- and sagemax zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring a natural and harmonious smile.',
        },
        {
            name: 'Orthodontics',
            path: '/orthodontics',
            image: '/Images/ServicesLandscape/Ortho.png',
            description: 'Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear aligners, we tailor treatments to enhance both aesthetics and functionality.',
        },
        {
            name: 'Dental Implants',
            path: '/dental',
            image: '/Images/Practice/Low/ASH DENTAL_content_MARCH\'24-6511.jpg',
            description: 'Experience a transformative smile with our dental implant solutions. Beyond restoration, implants contribute to the overall cosmetic enhancement of your smile by replacing missing teeth.',
        },
        {
            name: 'Gum Contouring',
            path: '/gumContouring',
            image: '/Images/FacesCloseUpsPortrait/Gum.png',
            description: 'Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service enhances the appearance of your teeth, especially beneficial for those with a gummy smile.',
        },
        {
            name: 'Smile Makeovers',
            path: '/smileMakeovers',
            image: '/Images/FacesCloseUpsLandscape/5.png',
            description: 'Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique preferences.',
        },
        {
            name: 'Full-Mouth Reconstruction',
            path: '/fullMouthReconstruction',
            image: '/Images/ServicesLandscape/MouthReconstruction.png',
            description: 'Transform your entire oral landscape with our Full-Mouth Reconstruction services. This comprehensive approach addresses both functional and aesthetic concerns, incorporating various cosmetic and restorative procedures.',
        },
        // Add more services here...
    ];

    return (
        <div>
            <nav className="navbar nav-bg navbar-expand-sm navbar-second">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <i className="fa fa-bars gold" style={{ fontSize: '25px' }}></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                        <li className="sub-nav-item">
                            <Navigate name={'Teeth Whitening'} path={'/teethWhitening'} />
                        </li>
                        <li className="sub-nav-item">
                            <Navigate name={'Crowns and Veneers'} path={'/crowns'} />
                        </li>
                        <li className="sub-nav-item">
                            <Navigate name={'Dental Implants'} path={'/dental'} />
                        </li>
                        <li className="sub-nav-item">
                            <Navigate name={'Orthodontics'} path={'/orthodontics'} />
                        </li>
                        <li className="sub-nav-item">
                            <Navigate name={'General Dentistry'} path={'/generalDentistry'} />
                        </li>
                        <li className="sub-nav-item">
                            <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
                <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 mt-3 text-color-gold'>Advanced Cosmetic Dentistry</h1>
                    <h3 className="brown">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center testem'>
                        <p className="lead text-start">Redefine smiles and enhance the natural beauty of your teeth. Cosmetic dentistry goes beyond traditional dental procedures; it's an art form dedicated to improving the aesthetics and function of your smile. Our skilled team at ASH Dental employs cutting-edge techniques and personalized treatment plans to address a range of cosmetic concerns, including teeth discoloration, misalignment, and imperfections.</p>
                        <br />
                        <p className="lead text-start">Whether you desire a whiter, straighter, or more aesthetically pleasing smile, our cosmetic dentistry services are tailored to meet your unique goals. We offer a comprehensive range of treatments, from professional teeth whitening and veneers to smile makeovers and full-mouth reconstruction.</p>
                        <br />
                        <p className="lead text-start">The benefits of cosmetic dentistry extend beyond appearance, positively impacting your confidence, self-esteem, and overall oral health. Discover the transformative power of a radiant smile at ASH Dental, where precision, elegance, and excellence converge to create a truly exceptional cosmetic dentistry experience.</p>
                    </div>
                </div>
            </div>
            <div className="serv3-container text-center">
                <h1 className="gold">Services</h1>
                <h2 className="brown">Crafting Radiant Smiles</h2>
                <div className="serv3-container">
                    <div className="serv3-image-grid">
                        {services.map((service, index) => (
                            <Link key={index} to={service.path}>
                                <div className="serv3-image-block">
                                    <div className="serv3-content-overlay"></div>
                                    <img className="serv3-img" src={service.image} style={{ height: '450px' }} alt={service.name} />
                                    <div className="serv3-content-details fadeIn-bottom">
                                        <h2 className="content-title white">{service.name}</h2>
                                        <p className="content-text white">{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4 testem'>
                <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 mt-3 text-color-gold'>A Journey to Transformative Smiles</h1>
                    <h3 className="brown">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="lead col-8 text-start testem">At ASH Dental, our Cosmetic Dentistry goes beyond enhancing smiles; it's about crafting a personalized and radiant expression of your individuality. Schedule a consultation to explore the possibilities and rediscover the beauty of your smile with us.</p>
                        <br />
                        <p className="lead col-8 text-start">Schedule a consultation to explore the possibilities and rediscover the beauty of your smile with us.</p>
                        <br />
                        <div className='col-4-6 mt-2 mb-2'>
                            <button type="button" className="btn btn-bg btn-link" onClick={openModal} title="Documents">
                                Book an appointment
                            </button>
                            <Modal showModal={showModal} closeModal={closeModal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

// ******************************************************************* EOF ******************************************************************************
