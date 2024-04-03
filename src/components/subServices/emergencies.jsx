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
                        <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>

            &nbsp;
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                        <h1 class="gold text-start">24 hour Emergencies</h1>
                        <h3 class="brown text-start ">ASH Dental 24-Hour Emergency Dental Service</h3>
                        {/* <h2 className='brown mb-2 text-start'>Patient-Centric Excellence</h2> */}
                    <br />
                    <p class="lead text-start">We recognize the importance of accommodating the demanding schedules of busy professionals.
                        That&#39;s why we are proud to introduce our 24-Hour Emergency Dental Service, designed to provide
                        round-the-clock dental care tailored to your needs. From dental restorations to general maintenance, we ensure
                        that every aspect of your oral health is meticulously addressed.</p>
                    <br />
                    <h3 class="brown text-start " >Services Offered:</h3>

                    <ul class="lead text-start  ">
                        <li>Emergency Toothache Relief</li>
                        <li>Same-Day Repairs for Chipped or Broken Teeth</li>
                        <li>Urgent Care for Dental Injuries</li>
                        <li>Swift Assistance for Lost or Dislodged Dental Restorations</li>
                        <li>Immediate Attention for Severe Gum Issues</li>
                    </ul>
                    <br></br>
                    <h3 class="brown text-start">Emergency Contact Number: 084 850 3501</h3>

                    <p class="lead  text-start">
                        Contact ASH Dental now to experience reliable, round-the-clock dental care tailored to your busy
                        schedule.
                    </p>
                    <p class=" gold text-start">
                        *please note that a call out fee applies
                    </p>
                    <br />
                </div>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/Dental/7.webp" alt="Dental Implants" style={{ height: '100%' }} />
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
                                            Life doesn&#39;t adhere to a 9-to-5 schedule, and neither do dental emergencies.
                                            Our 24-hour* service ensures that you can access quality dental care whenever you need it,
                                            whether it&#39;s the middle of the night or during a hectic workday
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Prompt Assistance:</h3>
                                        <p className="lead">
                                            Dental issues can be urgent, and delays in treatment may worsen the
                                            situation. With ASH Dental&#39;s 24-hour service*, you can expect prompt assistance from our
                                            skilled professionals, addressing your dental concerns swiftly and effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                <div className="card background">
                                    <div className="card-block block-1">
                                        <h3 className="card-title text-color-gold">Minimal Disruption:</h3>
                                        <p className="lead">
                                            We understand the importance of your time and commitments. Our
                                            24-hour service* is designed to provide the dental care you need without disrupting your
                                            schedule. Whether you&#39;re dealing with sudden pain, a broken tooth, or any other urgent
                                            dental issue, we are here to help 24/7.
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
                                            We believe that an informed patient is an empowered patient. Our team takes the time to explain procedures,
                                            discuss treatment options, and answer any questions you may have.
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