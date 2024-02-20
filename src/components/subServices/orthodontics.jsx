import React from 'react';
import "../../Main.css";
import { Link, useLocation } from 'react-router-dom';


function Orthodontics() {
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
                    <h1 class="gold text-start">Tooth Alignment and Orthodontic Techniques</h1>
                    <h3 class="brown text-start ">Precision Orthodontic Care</h3>
                    <br />
                    <p class="lead text-start">We excel in orthodontic care, correcting misalignments and enhancing the overall appearance of
                        teeth. ASH Dental's commitment to a patient-centric journey ensures that every orthodontic
                        treatment is tailored to individual patient needs. Access to cutting-edge technology and a research-
                        driven approach are integral to our orthodontic care, ensuring optimal results.</p>
                    <br />
                    <p class="lead text-start">Whether you&#39;re a teenager embarking on orthodontic care or an adult exploring discreet options, we
                        provide personalized solutions ranging from traditional braces to clear, nearly invisible alternatives.</p>
                    <br />
                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/ServicesLandscape/DentalImplant.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>

            <br></br>

            <div >
                <br />
                <br />
                <h3></h3>

                <br />
                <br />
                <h3 ></h3>
                <br />
                <div class="container text-center">
                <div className='row mt-2 pt-2 mb-2 pb-2'>
                    <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Ortho.png" alt="trainer-img" style={{ height: '100%' }} />
                    <div className='col-md-8 col-sm-12'>
                        <section className='mt-3 pt-3'>
                            <h3 className='text-color-gold mb-2 text-start'>Orthodontic devices employed for aligning teeth.</h3>
                        </section>
                        <ul class="lead text-start">
                                <li>Clear Aligners</li>
                                <li>Metal braces</li>
                                <li>clear / ceramic braces</li>
                            </ul>
                    </div>
                </div>
                
                    <div className='row mt-2 pt-2 mb-2 pb-2'>
                        <div className='col-md-8 col-sm-12'>
                            <section className='mt-3 pt-3'>
                                <h3 className='text-color-gold mb-2 text-start'>Several kinds of retainers recommended post-treatment.</h3>
                            </section>
                            <ul class="lead text-start">
                                <li className="card-text lead text-start">Clear – invisible retainers/aligner</li>
                                <li className="card-text lead text-start">Hawley retainer</li>
                                <li className="card-text lead text-start">Permanent retainer securely bonded to the inner aspect of teeth.</li>
                            </ul>
                            <br />
                        </div>
                        <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Ortho.png" alt="trainer-img" style={{ height: '100%' }} />
                    </div>
                </div>
                <br></br>
            </div>

            <br></br>
        </div>
    )
}

export default Orthodontics;