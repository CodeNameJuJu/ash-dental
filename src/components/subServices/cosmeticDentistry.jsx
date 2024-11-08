import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function CosmeticDentistry() {
    const [isOpen, setIsOpen] = useState(false);

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
    return (
        <div>
            <hr ></hr>
            <nav class=" navbar nav-bg navbar-expand-sm navbar-second">
                <button
                    className="navbar-toggler hide-mob"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <i class="fa fa-bars" style={{ 'font-size': '25px' }}></i>
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

            <div class="row serv-top">
                <div class=" col-7 text-center">
                    <h1 class="gold text-start">Advanced Cosmetic Dentistry</h1>
                    <h3 class="brown text-start ">Redesign, Enhance, Transform</h3>
                    <br />
                    <p class="lead text-start">Redefine smiles and enhance the natural beauty of your teeth. Cosmetic dentistry goes beyond
                        traditional dental procedures; it&#39;s an art form dedicated to improving the aesthetics and function of
                        your smile. Our skilled team at ASH Dental employs cutting-edge techniques and personalized
                        treatment plans to address a range of cosmetic concerns, including teeth discoloration,
                        misalignment, and imperfections.
                    </p>
                    <br />
                    <p class="lead text-start">Whether you desire a whiter, straighter, or more aesthetically
                        pleasing smile, our cosmetic dentistry services are tailored to meet your unique goals. We offer a
                        comprehensive range of treatments, from professional teeth whitening and veneers to smile
                        makeovers and full-mouth reconstruction.</p>
                    <br />
                    <p class="lead text-start" >The benefits of cosmetic dentistry extend beyond appearance, positively impacting your confidence,
                        self-esteem, and overall oral health. Discover the transformative power of a radiant smile at ASH
                        Dental, where precision, elegance, and excellence converge to create a truly exceptional cosmetic
                        dentistry experience.</p>
                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <figure>
                            <img class="serv2-image" src="/Images/ServicesLandscape/Ortho.webp" alt="2 description"></img>
                        </figure>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default CosmeticDentistry;

// ******************************************************************* EOF ******************************************************************************