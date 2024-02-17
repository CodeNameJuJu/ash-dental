import React from 'react';
import "../../Main.css";
import { Link, useLocation } from 'react-router-dom';


function Emergencies() {
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
            <nav class="navbar nav-bg navbar-expand-sm "> <button class="navbar-toggler" type="button" data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="sub-nav-item active">
                            <Navigate name={'Cosmetic Dentistry'} path={'/cosmeticDentistry'} /> </li>
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
                    <h1 class="gold text-start">24 hour Emergencies</h1>
                    <br></br>
                    <h3 class="brown text-start ">ASH Dental 24-Hour Emergency Dental Service</h3>
                    <br/>
                    <p class="lead text-start">We recognize the importance of accommodating the demanding schedules of busy professionals.
                        That&#39;s why we are proud to introduce our 24-Hour Emergency Dental Service, designed to provide
                        round-the-clock dental care tailored to your needs.</p>
                        <br/>
                        <p class="lead text-start"> From dental restorations to general maintenance, we ensure
                            that every aspect of your oral health is meticulously addressed.</p>
                        <br/>
                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/Dental/2.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>

            <br></br>
            <h3>Why Choose ASH Dental&#39;s 24-Hour Service?</h3>
            <section className='mb-5 pb-5 text-center' id="what-we-do">
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
                                            <h3 className="card-title text-color-gold"><i class="fa-solid fa-pen-to-square me-3"></i>Patient Education and Empowerment:</h3>
                                            <p className="lead">
                                                We believe that an informed patient is an empowered patient. Our team takes the time to explain procedures,
                                                discuss treatment options, and answer any questions you may have.
                                            </p>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <div class="row serv-top">
                    <h3>Services Offered:</h3>
                   <ul>
                    <li>Emergency Toothache Relief</li>
                    <li>Same-Day Repairs for Chipped or Broken Teeth</li>
                    <li>Urgent Care for Dental Injuries</li>
                    <li>Swift Assistance for Lost or Dislodged Dental Restorations</li>
                    <li>Immediate Attention for Severe Gum Issues</li>
                   </ul>
                   <br></br>
                   <br/>
                    <h3>Why Choose ASH Dental&#39;s 24-Hour Service?</h3>
                   <ul>
                    <li><h3>Contact Us Anytime: </h3>
                    <p>Reach out to ASH Dental at any hour, day or night, by calling our
                        dedicated emergency hotline.</p>
                    </li>
                    <li><h3>Prompt Consultation:</h3>
                    <p>  Our experienced dental professionals will provide a prompt
                        consultation, guiding you on the necessary steps and assessing the urgency of your situation.</p>
                    </li>
                    <li><h3>Immediate Care: </h3>
                    <p>If immediate care is required, we will make the necessary arrangements
                        for you to receive swift and effective treatment at our practice.</p>
                    </li>
                    <li><h3>Follow-Up: </h3>
                    <p>After addressing the immediate concern, we will schedule a follow-up
                        appointment during regular hours for any further necessary treatments or comprehensive
                        care.</p>
                    </li>
                   </ul>
                   <p>*please note that a call out fee applies.</p>
                   <p>Emergency Hotline: 084 850 3501</p>
                   <br></br>
                    <p> Contact ASH Dental now to experience reliable, round-the-clock dental care tailored to your busy
                        schedule.</p>

                    <p class="lead text-start gold">
                        Embark on a dental journey where precision meets luxury. Experience ASH Dental – Where Transformative Smiles Begin.
                    </p>
            </div>

            <br></br>
        </div>
    )
}

export default Emergencies;