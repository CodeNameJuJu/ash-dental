import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function Crowns() {

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

            <div className=' ps-4 ms-4 pe-4 me-4'>
                <div className='text-center ps-2 ms-4 pe-2 me-2' >
                    <h1 className='pt-4 mt-3 text-color-gold text-start'>Crowns and Veneers</h1>
                    <h3 class="brown text-start">Artistry and Precision Unleashed</h3>
                    <br></br>
                    <div className=''>
                        <p className="lead  text-start text-start">Our Crowns and Veneers services embody the perfect blend of artistry and precision, meticulously
                            crafted to revitalize, and enhance your smile. Recognizing the uniqueness of your smile as a personal
                            expression, our approach transcends traditional dentistry.Whether you seek to restore a damaged
                            tooth or undergo a transformative smile makeover, our personalized treatment plans are tailored to
                            address your distinct dental needs. Our dental professionals seamlessly integrate artistic expertise
                            with cutting-edge dental technology, ensuring that our crowns and veneers not only provide lasting
                            restoration but elevate your smile to the highest standard of quality.
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
            &nbsp;

            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Crowns2.webp" alt="Crowns" style={{ height: '100%' }} />
                <div className='col-md-8 col-sm-12'>
                    <section className='mt-3 pt-3'>
                        <h2 className='brown mb-2 text-start'>Crowning Achievement in Precision</h2>
                    </section>
                    <p class="lead text-start center ">Our commitment to precision dentistry is evident in the crafting of dental crowns using emax- and
                        sagemax zirconia porcelain. Each crown is meticulously designed using inLab CAD Software by a
                        skilled ceramicist to fit seamlessly with your natural teeth, restoring both function and aesthetics.Whether it's addressing structural damage, discoloration, or other concerns, our crowns offer
                        durability and a natural look.
                    </p>
                    <br />
                </div>
            </div>

            &nbsp;
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <section className='mt-3 pt-3'>
                        <h2 className='brown mb-2 text-start'>Veneers for a Radiant Transformation</h2>
                    </section>
                    <p class="lead text-start center ">ASH Dental's veneers are a canvas for creating a radiant smile. Tailored to your unique features,
                        veneers address imperfections, such as stains, chips, or gaps, with a focus on achieving a harmonious
                        and natural appearance. Our veneer solutions are personalized to reflect your ideal smile, ensuring a
                        transformative yet authentic result.
                    </p>
                    <br />

                </div>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Veneers.webp" alt="Veneers" style={{ height: '100%' }} />
            </div>
            <br></br>
            <br></br>
            <div className=' row text-center'>
                <h4 class=" gold card-title ">
                    Experience a journey to a revitalized and confident smile that reflects the pinnacle of dental care.
                    Schedule a consultation and discover the artistry behind our Crowns and Veneers services.
                </h4>
            </div>

            &nbsp;

        </div>

    )
}

export default Crowns;

// ******************************************************************* EOF ******************************************************************************