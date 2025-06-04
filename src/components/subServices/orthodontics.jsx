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
                        <li class="sub-nav-item"> <Navigate name={'Facial Aesthetics'} path={'/FacialAesthetics'} /> </li>
                        <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            <br></br>
            <div className="text-center container">
                <h1 className='text-color-gold mt-4 pt-4'>Orthodontics</h1>
                <a href="#ClearAligners" class="gold mt-4 pt-4 mx-2">
                    <button href="#ClearAligners" class="crown-button" >Clear Aligners</button>
                </a>
                <a href="#TraditionalBraces" >
                    <button href="#TraditionalBraces" class="crown-button">Traditional braces</button>
                </a>
            </div>
            

            <div class="serv-top">
                <div class="text-center">
                    <h1 class="gold text-start">Comprehensive tooth alignment solutions: from clear aligners to traditional
                        braces</h1>
                    <br></br>
                    <p class="lead text-start">We specialise in transforming smiles with top-notch orthodontic care. Our expert team is
                        dedicated to addressing misalignments and enhancing the beauty of your teeth through
                        personalized treatment plans. With access to the latest technology and a research-driven
                        approach, we ensure that each orthodontic solution is tailored to your unique needs for the
                        best possible results. Whether you&#39;re a teenager starting your journey with braces or an
                        adult looking for discreet, clear aligners, we offer a range of options to help you achieve a
                        perfectly aligned and confident smile.</p>
                    <br></br>
                    <h2 class="brown text-start pt-2 ">Unleash Your Smile with Clear Aligners.</h2>
                    <br></br>
                    <p class="lead text-start">Embrace Confidence: Explore Clear Aligners at ASH Dental</p>
                    <p class="lead text-start">Looking for a straighter smile without the hassle of traditional braces? ASH Dental offers
                        clear aligners, a discreet and comfortable option to achieve your dream smile.
                    </p>
                    <br></br>
                </div>
            </div>
            &nbsp;
            &nbsp;
            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Ortho.webp" alt="Orthodontics" style={{ height: '100%' }} />
                <div className='col-md-8 col-sm-12'>
                    <h3 className='text-color-gold text-start' id="ClearAligners">What are Clear Aligners?</h3>
                    <p class="lead text-start">Clear aligners are a series of clear, removable trays that gradually straighten your teeth over
                        time. They&#39;re virtually invisible, making them a popular choice for adults who want to improve
                        their smile without the world knowing.</p>
                    <br />
                    <h3 className='text-color-gold text-start'>Benefits of Clear Aligners:</h3>
                    <ol className="nonumber">
                        <li className="card-text lead "><strong>Discreet: </strong>Unlike metal braces, clear aligners are nearly invisible, so you can smile
                            confidently throughout treatment.</li>
                        <li className="card-text lead ">Removable: Enjoy the freedom to remove your aligners for eating, drinking,
                            brushing, and flossing.</li>
                        <li className="card-text lead ">Comfortable: Made from smooth, comfortable material that won&#39;t irritate your gums
                            or cheeks.</li>
                        <li className="card-text lead ">Effective: Gradually straighten your teeth for a beautiful, lasting result.</li>
                        <li className="card-text lead ">Convenient: Fewer appointments needed compared to traditional braces.</li>
                    </ol>
                    {/* <ul class="lead text-start">
                        <li><a href="#Aligners" class="gold mt-4 pt-4 mx-2">Clear Aligners - Click here to learn more. </a></li>
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
                    </ul> */}
                </div>
            </div>
            <br></br>
            <br></br>
            &nbsp;
            &nbsp;

            <div className='row'>
                <div className='col-md-12 col-sm-12'>
                    <h3 className='text-color-gold text-start'>Who is a Candidate for Clear Aligners?</h3>
                    <p class="lead text-start">Clear aligners are a great option for adults with mild to moderate misalignment issues,
                        including:</p>
                    &nbsp;
                    &nbsp;
                    <h3 class="brown text-start " >The Clear Aligner Process at ASH Dental:</h3>
                    <ol class="nonumber">
                        <li className="card-text lead ">Consultation: Schedule a consultation with our experienced dentists to discuss your
                            smile goals.</li>
                        <li className="card-text lead ">Digital Scan: We&#39;ll utilise advanced technology to create a digital scan of your teeth
                            for a precise treatment plan.</li>
                        <li className="card-text lead ">Custom Aligners: Your personalized set of clear aligners will be created based on
                            your digital scan.</li>
                        <li className="card-text lead ">Treatment: Wear your aligners as instructed by your dentist, typically for 20-22 hours
                            a day.</li>
                        <li className="card-text lead ">Regular Checkups: Schedule regular appointments to monitor your progress and
                            ensure proper alignment.</li>
                        <li className="card-text lead ">Your Dream Smile: Celebrate your new, straighter smile!</li>
                    </ol>
                    &nbsp;
                    <div class="text-center">
                        <h2 class="brown text-start " id="TraditionalBraces">Achieve a Perfectly Aligned Smile with Traditional Braces</h2>
                        <br></br>
                        <p class="lead text-start">ASH Dental provides comprehensive traditional braces treatments designed to enhance your
                            smile and address a variety of orthodontic issues.</p>
                    </div>
                    &nbsp;
                    <h3 class="brown centre ">What Are Traditional Braces?</h3>
                    <p class="lead text-start">Traditional braces consist of metal or ceramic brackets that are securely attached to your
                        teeth, connected by a wire that gradually adjusts their position. This well-established
                        orthodontic treatment is highly effective for correcting a wide range of alignment issues and
                        providing long-lasting results.
                    </p>
                    &nbsp;
                    &nbsp;
                    <h3 class="brown text-start ">Benefits of Traditional Braces:</h3>
                    <ol class="nonumber">
                        <li className="card-text lead ">Comprehensive Correction: Traditional braces can address complex misalignments
                            and bite issues that may not be suitable for other treatments.</li>
                        <li className="card-text lead ">Durability: Made from high-quality materials, metal and ceramic braces offer robust
                            and long-lasting performance.</li>
                        <li className="card-text lead ">Proven Results: With a history of successful outcomes, traditional braces provide
                            reliable and predictable improvements in smile alignment.</li>
                        <li className="card-text lead ">Customizable Options: Choose from various bracket types, including metal for
                            durability or ceramic for a more discreet look.</li>
                    </ol>
                    &nbsp;
                    <h3 class="brown text-start ">Who is a Candidate for Traditional Braces?</h3>
                    <p class="lead text-start">Traditional braces are suitable for patients of all ages who need:</p>
                    &nbsp;
                    <ol className="nonumber">
                        <li className="card-text lead ">Extensive Alignment Corrections: Effective for addressing severe tooth
                            misalignment and bite issues.</li>
                        <li className="card-text lead ">Complex Bite Problems: Ideal for correcting overbites, underbites, and crossbites.</li>
                        <li className="card-text lead ">Comprehensive Treatment: Suitable for cases requiring significant adjustment to
                            achieve optimal results.</li>
                    </ol>
                    &nbsp;
                    <h3 class="brown text-start "> The Traditional Braces Process at ASH Dental:</h3>
                    <ol className="nonumber">
                        <li className="card-text lead ">Consultation: Begin with a thorough evaluation to determine if traditional braces are
                            the right option for you..</li>
                        <li className="card-text lead ">Treatment Planning: We develop a detailed treatment plan using advanced imaging
                            and diagnostic tools to ensure precise alignment.</li>
                        <li className="card-text lead ">Bracket Placement: Your braces are custom-fitted and securely attached to your
                            teeth, with wires adjusted to initiate the alignment process.</li>
                        <li className="card-text lead ">Ongoing Adjustments: Regular appointments are scheduled to make necessary
                            adjustments, monitor progress, and ensure the best results.</li>
                        <li className="card-text lead ">Final Results: Enjoy a beautifully aligned smile as your teeth shift into their ideal
                            positions through the effectiveness of traditional braces.</li>
                    </ol>
                    &nbsp;
                    &nbsp;
                    <p class="lead text-start">Contact ASH Dental today to schedule a consultation and discuss how clear aligners or
                        traditional braces can help you achieve the confident smile you deserve!</p>
                    &nbsp;
                    {/* &nbsp;
                    <Link className="active text-start" to="/contact" title="View Gallery">
                        <button class="crown-button" >Contact Us</button>
                    </Link>*/}
                    &nbsp; 
                </div>
            </div>
            <br></br>

            <div className='row'>
                <div className='col-md-12 col-sm-12'>
                    <h1 className='text-color-gold text-start'>Unleash Your Smile with Clear Aligners.</h1>
                    <h3 class="brown text-start " id="Aligners">Embrace Confidence: Explore Clear Aligners at ASH Dental</h3>
                    <div class="text-center">
                        <br></br>
                        <p class="lead text-start">
                            Looking for a straighter smile without the hassle of traditional braces? ASH Dental offers clear aligners, a discreet and comfortable option to achieve your dream smile.
                        </p>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">What are Clear Aligners?</h5>
                        <p class="lead text-start">
                            Clear aligners are a series of clear, removable trays that gradually straighten your teeth over time.
                            They're virtually invisible, making them a popular choice for adults who want to improve their smile without the world knowing.
                        </p>
                        <br></br>
                        <br></br>
                        <h5 class="text-color-gold text-start ">Benefits of Clear Aligners:</h5>
                        <ul class="lead text-start">
                            <li className="card-text lead ">- Discreet: Unlike metal braces, clear aligners are nearly invisible, so you can smile confidently throughout treatment.</li>
                            <li className="card-text lead ">- Removable: Enjoy the freedom to remove your aligners for eating, drinking, brushing, and flossing.</li>
                            <li className="card-text lead ">- Comfortable: Made from smooth, comfortable material that won't irritate your gums or cheeks.</li>
                            <li className="card-text lead ">- Effective: Gradually straighten your teeth for a beautiful, lasting result.</li>
                            <li className="card-text lead ">- Convenient: Fewer appointments needed compared to traditional braces</li>
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
                <br></br>
            </div>
            <br></br>
            <img className='col-md-3 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Ortho.jpg" alt="Orthodontics" style={{ height: '60%' }} />
            <img className='col-md-3 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Clear.jpg" alt="Orthodontics" style={{ height: '60%' }} />
            <img className='col-md-3 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Aligner.jpg" alt="Aligner" style={{ height: '60%' }} />
            <img className='col-md-3 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Aligners.jpg" alt="Clear Aligners" style={{ height: '60%' }} />
        </div>
    )
}

export default Orthodontics;

// ******************************************************************* EOF ******************************************************************************