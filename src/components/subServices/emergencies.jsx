import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function Emergencies() {
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

            &nbsp;
            <div className='row'>
                {/* <!-- Image Column on the Left --> */}
                <div className='col-md-4 col-sm-12 '>
                    <img
                        className='img-fluid'
                        src="/Images/Dental/7.webp"
                        alt="Dental Implants"
                        style={{ maxHeight: '100%', width: 'auto' }}
                    />
                </div>

                {/* <!-- Text Column on the Right --> */}
                <div className='col-md-8 col-sm-12'>
                    <h1 class="gold text-start">Round-the-clock dental care: ASH dental’s 24-hour emergency services</h1>
                    <h3 class="brown text-start">ASH dental’s 24-hour emergency services</h3>
                    <br />
                    <p class="lead text-start">
                        We understand that dental emergencies can happen at any time, and busy schedules make
                        immediate care essential. That’s why ASH Dental offers 24-Hour Emergency Dental
                        Services, providing comprehensive care around the clock to meet your urgent needs. From
                        quick relief for toothaches to immediate repairs for dental injuries, we are here to ensure
                        your oral health is promptly and effectively addressed.
                    </p>
                    <br />
                    <h2 class="brown text-start">Services Offered:</h2>
                    <ul class="lead text-start">
                        <li>Emergency toothache relief</li>
                        <li>Same-Day Repairs for Chipped or Broken Teeth</li>
                        <li>Urgent Care for Dental Injuries</li>
                        <li>Swift Assistance for Lost or Dislodged Dental Restorations</li>
                        <li>Immediate Attention for Severe Gum Issues</li>
                    </ul>
                    <br />
                    <h3 class="brown text-start">Emergency Contact Number: 084 850 3501</h3>
                    <p class="lead text-start">For reliable, 24/7 dental care that fits your busy lifestyle, contact ASH Dental today.</p>
                    <p class="gold text-start">
                        *Please note that a call-out fee applies.
                    </p>
                    <br />
                </div>
            </div>

            <br></br>
            &nbsp;

            <div className=' row text-center'>
                &nbsp;
            </div>

            <section className='mb-2 pb-2 text-center' id="what-we-do">
                <div className="container-fluid">
                    <div className='mb-3 pb-3 ps-3 pe-3' >

                        <div className="row mt-5">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Convenience:</h3>
                                        <p className="lead">
                                        Dental emergencies don’t keep office hours, and neither do we. Our 24-hour service*
                                        ensures that you have access to high-quality dental care whenever you need it. Plus, with
                                        our convenient location in Pretoria East, you can easily reach us whether it’s late at night or
                                        during a busy workday.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Prompt Assistance:</h3>
                                        <p className="lead">
                                            Urgent dental issues require immediate attention to prevent complications. With ASH
                                            Dental’s 24-hour service*, you can count on prompt, expert care from our skilled dentists,
                                            addressing your concerns quickly and efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Minimal Disruption:</h3>
                                        <p className="lead">
                                            We value your time and understand the importance of your schedule. Our 24-hour service*
                                            is designed to offer the dental care you need with minimal disruption. Whether it’s sudden
                                            pain or a broken tooth, we’re available around the clock to assist you.
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Patient Education and Empowerment:</h3>
                                        <p className="lead">
                                            An informed patient is a confident patient. Our team is dedicated to explaining procedures,
                                            discussing treatment options, and answering any questions you may have, ensuring you’re
                                            fully empowered in your dental care decisions.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className=' row text-center'>
                <h3 class=" gold card-title ">
                    Embark on a dental journey where precision meets luxury. Experience ASH Dental – Where Transformative Smiles Begin.
                </h3>
            </div>
            <br></br>
        </div>
    )
}

export default Emergencies;

// ******************************************************************* EOF ******************************************************************************