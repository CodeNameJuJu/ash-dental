import React, { useState } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'
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

    return (
        <div>
            <nav class=" navbar nav-bg navbar-expand-sm navbar-second">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'} // Update aria-expanded for accessibility
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <i class="fa fa-bars gold" style={{ 'font-size': '25px' }}></i>
                </button>
                <div class={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="sub-nav-item">
                            <Navigate name={'Teeth Whitening'} path={'/teethWhitening'} /> </li>
                        <li class="sub-nav-item"><Navigate name={'Crowns and Veneers'} path={'/crowns'} />  </li>
                        <li class="sub-nav-item"> <Navigate name={'Dental Implants'} path={'/dental'} />  </li>
                        <li class="sub-nav-item"><Navigate name={'Orthodontics'} path={'/orthodontics'} /> </li>
                        <li class="sub-nav-item"> <Navigate name={'General Dentistry'} path={'/generalDentistry'} />  </li>
                        <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
                <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 mt-3 text-color-gold'>Advanced Cosmetic Dentistry</h1>
                    <h3 class="brown ">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="lead text-start ">Redefine smiles and enhance the natural beauty of your teeth. Cosmetic dentistry goes beyond
                            traditional dental procedures; it&#39;s an art form dedicated to improving the aesthetics and function of
                            your smile. Our skilled team at ASH Dental employs cutting-edge techniques and personalized
                            treatment plans to address a range of cosmetic concerns, including teeth discoloration,
                            misalignment, and imperfections.
                        </p>
                        <br></br>
                        <p className="lead text-start">Whether you desire a whiter, straighter, or more aesthetically
                            pleasing smile, our cosmetic dentistry services are tailored to meet your unique goals. We offer a
                            comprehensive range of treatments, from professional teeth whitening and veneers to smile
                            makeovers and full-mouth reconstruction.
                        </p>
                        <br></br>
                        <p className="lead text-start">The benefits of cosmetic dentistry extend beyond appearance, positively impacting your confidence,
                            self-esteem, and overall oral health. Discover the transformative power of a radiant smile at ASH
                            Dental, where precision, elegance, and excellence converge to create a truly exceptional cosmetic
                            dentistry experience.
                        </p>
                    </div>
                </div>
            </div>
            <div class="serv3-container text-center">
                <h1 class=" gold">Services </h1>
                <h2 class=" brown"> Crafting Radiant Smiles</h2>
                <div class="serv3-container">
                    <div class="serv3-image-grid">
                        <Link to="/teethWhitening" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/1.png" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Teeth Whitening</h2>
                                    <p class="content-text white">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                                        stains and discoloration, restoring the natural brilliance of your teeth. LINK.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/crowns" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/4.png" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Veneers</h2>
                                    <p class="content-text white">Transform your smile with our custom-made porcelain veneers. These thin shells are expertly
                                        crafted to cover imperfections and enhance the overall appearance of your teeth.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dental" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/8.png" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Dental Bonding</h2>
                                    <p class="content-text white" >Address chipped or discoloured teeth with our dental bonding services. Using tooth-coloured resin,
                                        we sculpt and shape the material to achieve a seamless and natural look.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/crowns" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="/Images/ServicesLandscape/Crowns2.png" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Dental Crowns</h2>
                                    <p class="content-text white">Revitalize damaged or discoloured teeth with our dental crowns made out of emax- and sagemax
                                        zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring
                                        a natural and harmonious smile.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/orthodontics" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="/Images/ServicesLandscape/Ortho.png" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Orthodontics</h2>
                                    <p class="content-text white">Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear
                                        aligners, we tailor treatments to enhance both aesthetics and functionality.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dental" >
                            <div class="serv3-image-block">
                                <div class="serv3-content-overlay"></div>
                                <img class="serv3-img" src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-6511.jpg" alt="1"></img>
                                <div class="serv3-content-details fadeIn-bottom">
                                    <h2 class="content-title white">Dental Implants</h2>
                                    <p class="content-text white">Experience a transformative smile with our dental implant solutions. Beyond restoration, implants
                                        contribute to the overall cosmetic enhancement of your smile by replacing missing teeth. </p>
                                </div>
                            </div>
                        </Link>
                        <div class="serv3-image-block">
                            <div class="serv3-content-overlay"></div>
                            <img class="serv3-img" src="/Images/FacesCloseUpsPortrait/Gum.png" alt="1"></img>
                            <div class="serv3-content-details fadeIn-bottom">
                                <h2 class="content-title white">Gum Contouring</h2>
                                <p class="content-text white">Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service
                                    enhances the appearance of your teeth, especially beneficial for those with a gummy smile.</p>
                            </div>
                        </div>
                        <div class="serv3-image-block">
                            <div class="serv3-content-overlay"></div>
                            <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/5.png" alt="1"></img>
                            <div class="serv3-content-details fadeIn-bottom">
                                <h2 class="content-title white">Smile Makeovers</h2>
                                <p class="content-text white">Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine
                                    various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique
                                    preferences.</p>
                            </div>
                        </div>
                        <div class="serv3-image-block">
                            <div class="serv3-content-overlay"></div>
                            <img class="serv3-img" src="/Images/ServicesLandscape/MouthReconstruction.png" alt="1"></img>
                            <div class="serv3-content-details fadeIn-bottom">
                                <h2 class="content-title white">Full-Mouth Reconstruction</h2>
                                <p class="content-text white">Transform your entire oral landscape with our Full-Mouth Reconstruction services. This
                                    comprehensive approach addresses both functional and aesthetic concerns, incorporating various
                                    cosmetic and restorative procedures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
                <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 text-color-gold '>A Journey to Transformative Smiles</h1>
                    <h3 class="brown ">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="lead col-8 text-start">At ASH Dental, our Cosmetic Dentistry goes beyond enhancing smiles; it's about crafting a personalized and radiant expression of your individuality.
                            Schedule a consultation to explore the possibilities and rediscover the beauty of your smile with us.
                        </p>
                        <br></br>
                        <p className="lead col-8 text-start">Schedule a consultation to explore the possibilities and rediscover the beauty of your smile
                            with us.
                        </p>
                        <br></br>
                        <div className='col-4-6 mt-2 mb-2'>
                            <button type="button" className="btn btn-bg btn-link" onClick={openModal} title="Documents">
                                Book an appointment
                            </button>
                            <Modal showModal={showModal} closeModal={closeModal} />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Services;

// ******************************************************************* EOF ******************************************************************************