import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function Orthodontics() {

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
                    className="navbar-toggler"
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
            <br></br>
            <div class="serv-top">
                <div class="text-center">
                    <h1 class="gold text-start">Tooth Alignment and Orthodontic Techniques</h1>

                    <h3 class="brown text-start ">Precision Orthodontic Care</h3>
                    <br></br>
                    <p class="lead text-start">We excel in orthodontic care, correcting misalignments and enhancing the overall appearance of
                        teeth. ASH Dental's commitment to a patient-centric journey ensures that every orthodontic
                        treatment is tailored to individual patient needs. Access to cutting-edge technology and a research-
                        driven approach are integral to our orthodontic care, ensuring optimal results.Whether you&#39;re a teenager embarking on orthodontic care or an adult exploring discreet options, we
                        provide personalized solutions ranging from traditional braces to clear, nearly invisible alternatives.
                    </p>
                    <br></br>
                </div>

            </div>

            <br></br>
            <br></br>
            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Ortho.webp" alt="Orthodontics" style={{ height: '100%' }} />
                <div className='col-md-8 col-sm-12'>
                    <h3 className='text-color-gold text-start'>Orthodontic devices employed for aligning teeth.</h3>
                    <ul class="lead text-start">
                        <li>Clear Aligners</li>
                        <li>Metal braces</li>
                        <li>clear / ceramic braces</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <h3 className='text-color-gold text-start'>Several kinds of retainers recommended post-treatment.</h3>
                    <ul class="lead text-start">
                        <li className="card-text lead ">Clear – invisible retainers/aligner</li>
                        <li className="card-text lead ">Hawley retainer</li>
                        <li className="card-text lead ">Permanent retainer securely bonded to the inner aspect of teeth.</li>
                    </ul>

                </div>
            </div>
            &nbsp;



        </div>
    )
}

export default Orthodontics;

// ******************************************************************* EOF ******************************************************************************