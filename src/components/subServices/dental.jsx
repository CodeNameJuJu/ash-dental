import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function Dental() {
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

            &nbsp;
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <h1 class="gold text-start">Dental Implants</h1>
                    <h3 class="brown text-start ">Journey to a Confident Smile</h3>
                    {/* <h2 className='brown mb-2 text-start'>Patient-Centric Excellence</h2> */}
                    <br />
                    <p class="lead text-start">Dental implants are more than just a procedure; they represent a transformative journey to restore
                        your confident smile.</p>
                    <br />
                    <p class="lead text-start">Dental implants are innovative solutions to restore missing teeth. Implants work by securely
                        anchoring artificial teeth into the jaw, mimicking the natural structure for unparalleled stability and
                        aesthetics.Our dental professionals harness the latest advancements in dental implantology,
                        offering cutting-edge solutions tailored to each individual. From single-tooth implants to full-arch
                        rehabilitation, we employ state-of-the-art techniques and technologies, including 3D x-ray, 3D
                        printing and advanced diagnostic software, to ensure the utmost precision in every procedure.</p>
                    <br />
                </div>
                <figure>
                    <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/Dental/1.webp" alt="Dental Implants" style={{ height: '100%' }} />
                </figure>
            </div>
            &nbsp;
            &nbsp;
            <div className='row'>
                <div className='col-md-12 col-sm-12'>
                    <h3 class="gold text-start">Regain Your Smile with Confidence: Your journey to Dental Implants</h3>
                    <p class="lead text-start">Missing teeth can significantly impact your life, causing discomfort while eating, speaking, and affecting your self-esteem.
                        Modern dentistry has transformed smiles with the revolutionary innovation of dental implants! These remarkable devices are transforming
                        lives by restoring smiles and fostering confidence. But how exactly do dental implants work, and what benefits can they offer?
                    </p>
                    <br></br>
                    &nbsp;
                    <h5 class="text-color-gold text-start ">Understanding Dental Implants:</h5>
                    <p class="lead text-start">Dental implants are tiny, biocompatible titanium posts strategically placed within your bone through a surgical procedure.
                        These posts act as artificial tooth roots, providing a sturdy foundation for a crown (the visible portion of the tooth).
                        Unlike traditional dentures that rest on the gums, implants become integrated with the bone, mimicking the function and strength of natural teeth.</p>
                    &nbsp;
                    <br></br>
                    <br></br>
                    <h5 class="text-color-gold text-start ">A Solution for Missing Teeth:</h5>
                    <p class="lead text-start">Dental implants address several challenges associated with missing teeth:</p>
                    <br></br>
                    <ol className="nonumber">
                        <li className="card-text lead ">Enhanced Function: Enjoy your favourite foods with ease! Implants allow you to eat, speak, and smile with confidence,
                            eliminating the worries of slipping dentures or discomfort.</li>
                        <li className="card-text lead "> Natural Aesthetics: Customised crowns are designed to seamlessly blend with your surrounding teeth, creating a stunning and
                            natural-looking smile.</li>
                        <li className="card-text lead "> Preserved Jaw Health: Traditional dentures can contribute to bone loss in the jaw. Implants, however, stimulate bone growth and
                            maintain long-term jaw health.</li>
                        <li className="card-text lead "> Long-Term Investment: With proper care, dental implants are incredibly durable and can potentially last a lifetime.
                            They offer a cost-effective solution compared to frequently replacing dentures.</li>
                    </ol>
                    &nbsp;
                    <h5 class="text-color-gold text-start ">What to Expect with Dental Implants:</h5>
                    <p class="lead text-start">The dental implant process typically involves multiple stages:</p>
                    <br></br>
                    <ol className="nonumber">
                        <li className="card-text lead ">Consultation: At your consultation, our knowledgeable dentist will thoroughly assess your oral health and explain if implants are a
                            suitable option for you. We'll work collaboratively to create a personalised implant plan that addresses your needs and provides clear information about the process.</li>
                        <li className="card-text lead ">Natural Aesthetics: Customised crowns are designed to seamlessly blend with your surrounding teeth, creating a stunning and
                            natural-looking smile.</li>
                        <li className="card-text lead ">Abutment Placement: Once the bone heals, a small connector piece called an abutment is attached to the implant.</li>
                        <li className="card-text lead ">Crown Placement: The final step involves attaching a custom-made crown to the abutment, effectively creating your new tooth.</li>
                    </ol>
                    <br></br>
                    <h5 class="text-color-gold text-start ">Considering Dental Implants?</h5>
                    <p class="lead text-start">If you're seeking a permanent and natural-looking solution for missing teeth, dental implants offer a life-changing
                        opportunity. Consult with our qualified dentist to discuss your specific needs and explore the possibilities of regaining a confident,
                        healthy smile.</p>
                    <br></br>
                    <p class="lead text-start" >At
                        ASH Dental, dental implantology is not just a service; it&#39;s a dedication to providing you with a
                        permanent, natural-looking solution that enhances both your oral health and confidence.</p>
                    <br />
                    <p class="lead text-start gold">Your journey to a radiant smile is marked by excellence, comfort, and results that redefine dental
                        care… because detail matters.</p>
                    <br />
                </div>
                <div class="dental-img">
                    <figure>
                        <img className='col-md-2 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/xraydepth.jpg" alt="Software for Implant" style={{ height: '100%' }} />
                    </figure>
                    <figure>
                        <img className='col-md-2 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/ImplantGuide.jpg" alt="Implant Guide" style={{ height: '100%' }} />
                    </figure>
                    <figure>
                        <img className='col-md-2 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Implant.jpg" alt="Implant System" style={{ height: '100%' }} />
                    </figure>
                    <figure>
                        <img className='col-md-2 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Crownimplant.jpg" alt="Implant Guide" style={{ height: '100%' }} />
                    </figure>
                    <figure>
                        <img className='col-md-2 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/xray.jpg" alt="Full Arch Rehabilitation" style={{ height: '100%' }} />
                    </figure>
                </div>
            </div>
            &nbsp;
        </div>
    )
}

export default Dental;

// ******************************************************************* EOF ******************************************************************************