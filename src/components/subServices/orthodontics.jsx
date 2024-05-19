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
            <br></br>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='col-md-12 col-sm-12'>
                    <h1 className='text-color-gold text-start'>Unleash Your Smile with Clear Aligners.</h1>
                    <h3 class="brown text-start ">Embrace Confidence: Explore Clear Aligners at ASH Dental</h3>
                    <div class="text-center">
                        <br></br>
                        <p class="lead text-start">
                            Looking for a straighter smile without the hassle of traditional braces? ASH Dental offers clear aligners, a discreet and comfortable option to achieve your dream smile.
                        </p>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">What are Clear Aligners?</h5>
                        <br></br>
                        <p class="lead text-start">
                            Clear aligners are a series of clear, removable trays that gradually straighten your teeth over time.
                            They're virtually invisible, making them a popular choice for adults who want to improve their smile without the world knowing.
                        </p>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">Benefits of Clear Aligners:</h5>
                        <br></br>
                        <ul class="lead text-start">
                            <li className="card-text lead ">Discreet: Unlike metal braces, clear aligners are nearly invisible, so you can smile confidently throughout treatment.</li>
                            <li className="card-text lead ">Removable: Enjoy the freedom to remove your aligners for eating, drinking, brushing, and flossing.</li>
                            <li className="card-text lead ">Comfortable: Made from smooth, comfortable material that won't irritate your gums or cheeks.</li>
                            <li className="card-text lead ">Effective: Gradually straighten your teeth for a beautiful, lasting result.</li>
                            <li className="card-text lead ">Convenient: Fewer appointments needed compared to traditional braces</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">Who is a Candidate for Clear Aligners?</h5>
                        <br></br>
                        <p class="lead text-start">
                            Clear aligners are a great option for adults with mild to moderate misalignment issues, including:
                        </p>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">The Clear Aligner Process at ASH Dental:</h5>
                        <br></br>
                        <ul class="lead text-start">
                            <li className="card-text lead ">1.	Consultation: Schedule a consultation with our experienced dentists to discuss your smile goals.</li>
                            <li className="card-text lead ">2.	Digital Scan: We'll utilise advanced technology to create a digital scan of your teeth for a precise treatment plan.</li>
                            <li className="card-text lead ">3.	Custom Aligners: Your personalized set of clear aligners will be created based on your digital scan.</li>
                            <li className="card-text lead ">4.	Treatment: Wear your aligners as instructed by your dentist, typically for 20-22 hours a day.</li>
                            <li className="card-text lead ">5.	Regular Checkups: Schedule regular appointments to monitor your progress and ensure proper alignment.</li>
                            <li className="card-text lead ">6.	Your Dream Smile: Celebrate your new, straighter smile!</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">Ready to Start Your Clear Aligner Journey?</h5>
                        <br></br>
                        <br></br>
                        <p class="lead text-start">
                            Contact ASH Dental today to schedule a consultation and discuss how clear aligners can help you achieve the confident smile you deserve!
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <Link className="active text-start" to="/contact" title="View Gallery">
                    <button class="crown-button" >Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Orthodontics;

// ******************************************************************* EOF ******************************************************************************