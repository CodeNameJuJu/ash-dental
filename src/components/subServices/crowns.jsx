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

            <div className=' ps-4 ms-4 pe-4 me-4'>
                <div className='text-center ps-2 ms-4 pe-2 me-2' >
                    <h1 className='pt-4 mt-3 text-color-gold text-start'>Comprehensive crowns and veneers services: artistry and precision for your
                        perfect smile</h1>
                    <h2 class="brown text-start">Expertly crafted dental crowns: precision, durability, and aesthetic perfection</h2>
                    <br></br>
                    <div className=''>
                        <p className="lead  text-start text-start">Dental crowns are custom-made caps that cover damaged or weakened teeth to restore
                            their shape, size, strength, and appearance. They are designed to protect and support teeth
                            that have been severely damaged by decay, fractures, or other issues, and are also used to
                            enhance the aesthetics of discoloured or misshapen teeth.
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
            &nbsp;

            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Crowns2.webp" alt="Crowns" style={{ height: '100%' }} />
                <div className='col-md-8 col-sm-12'>
                    <section className=''>
                        <h2 className='brown mb- text-start'>Benefits of Dental Crowns:</h2>
                    </section>
                    <p class="lead text-start">
                        <ol className="nonumber">
                            <li className="card-text lead "><b>Restores Function:</b> Crowns fully restore the tooth’s ability to chew and speak
                                normally.</li>
                            <li className="card-text lead ">Protects Weakened Teeth: They shield compromised teeth from further damage
                                and stress.</li>
                            <li className="card-text lead ">Improves Appearance: Crowns improve the appearance of your teeth, blending
                                seamlessly with your natural smile.</li>
                            <li className="card-text lead "> Long-Lasting Durability: Made from high-quality materials like emax and sagemax
                             zirconia porcelain, crowns are durable and resistant to wear.</li>
                        </ol>
                    </p>
                    &nbsp;
                    <p class="lead text-start center ">Our commitment to precision dentistry is evident in the crafting of dental crowns. We use
                        advanced emax and sagemax zirconia porcelain to create crowns that are not only durable
                        but also aesthetically pleasing. Each crown is meticulously designed with inLab CAD
                        Software by a skilled ceramicist to ensure a perfect fit and finish. Whether addressing
                        structural damage, discoloration, or other concerns, our crowns offer both exceptional
                        function and a natural look.
                    </p>
                    <br />
                </div>
            </div>

            &nbsp;
            <div className='row'>
            <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/Veneers.webp" alt="Veneers" style={{ height: '100%' }} />
                <div className='col-md-8 col-sm-12'>
                    <section className=''>
                        <h2 className='brown mb-2 text-start'>Veneers for a radiant transformation</h2>
                    </section>
                    <p class="lead text-start center ">Veneers are thin, custom-made shells designed to cover the front surface of your teeth. They
                        are crafted from durable materials and are used to improve the appearance of your smile by
                        addressing imperfections like stains, chips, gaps, or misalignment. Veneers are bonded to
                        the teeth, creating a natural-looking enhancement that blends seamlessly with your existing
                        teeth.
                    </p>
                    &nbsp;
                    <h3 class="brown text-start">Benefits of Veneers:</h3>
                    <p class="lead text-start">
                        <ol className="nonumber">
                            <li className="card-text lead "><strong>Enhances Aesthetics: </strong> Veneers can significantly improve the appearance of your
                                teeth, providing a flawless and uniform smile.</li>
                            <li className="card-text lead ">Addresses Imperfections: They effectively cover imperfections such as stains,
                                chips, and gaps, creating a harmonious and natural look.</li>
                            <li className="card-text lead ">Minimally Invasive: Applying veneers generally requires minimal alteration to the
                                natural tooth structure compared to other cosmetic procedures.</li>
                            <li className="card-text lead "> Durable and Long-Lasting: Made from high-quality materials, veneers are designed
                                to be durable and long-lasting, maintaining their appearance and function over time.</li>
                        </ol>
                    </p>
                    <br />
                    <p class="lead text-start center ">ASH Dental&#39;s veneers serve as a canvas for creating a radiant smile, meticulously tailored to
                        your unique features. Each veneer is designed to address your specific concerns and
                        enhance your smile with a focus on achieving both a natural appearance and transformative
                        results. Our personalised veneer solutions ensure that your smile reflects your ideal look
                        while providing a lasting, beautiful enhancement.
                    </p>
                </div>  
            </div>
            <br></br>
            <br></br>
            <div className=' ps-4 ms-4 pe-4 me-4'>
                    <h2 class="brown text-start">Veneers vs. Crowns: What’s the Difference?</h2>
                    <p className="lead  text-start text-start">Veneers: Veneers are thin, custom-made shells that cover the front surface of your teeth.
                        They are typically made from porcelain or composite resin.</p>

                    <br></br>
                    <ol className="nonumber">
                            <li className="card-text lead ">Purpose: Veneers primarily address cosmetic issues such as stains, chips, gaps, or
                                minor misalignments. They enhance the appearance of the front teeth, giving them a
                                uniform and attractive look.</li>
                            <li className="card-text lead ">Procedure: Applying veneers usually requires minimal preparation of the tooth
                                surface. The dentist will take impressions of your teeth, and veneers are custom-
                                made to fit precisely over the front surfaces.</li>
                            <li className="card-text lead ">Benefits: Veneers offer a quick and minimally invasive way to improve the
                                appearance of your teeth. They provide a natural-looking enhancement with minimal
                                alteration to the tooth structure.</li>
                    </ol>
                    <br></br>
                    <p className="lead  text-start text-start">Crowns: Crowns are full-coverage caps that encase the entire tooth. They are typically made
                        from materials like porcelain, metal, or a combination of both.</p>
                        &nbsp;
                    <ol className="nonumber">
                        <li className="card-text lead ">Purpose: Crowns are used to restore the function and appearance of teeth that are
                            severely damaged, weakened, or decayed. They provide structural support and
                            protection to compromised teeth, and they can also improve the appearance of
                            discoloured or misshapen teeth.</li>
                        <li className="card-text lead ">Procedure: The process for placing a crown involves more extensive preparation
                            compared to veneers. The dentist will reshape the tooth to accommodate the crown,
                            take impressions, and then place a custom-made crown over the entire tooth.</li>
                        <li className="card-text lead ">Benefits: Crowns offer comprehensive protection and restoration of damaged teeth.
                            They provide strength and durability, making them suitable for teeth that have
                            undergone significant damage or decay.</li>
                    </ol>
                    <p className="lead  text-start text-start">Choosing between veneers and crowns depends on your specific dental needs and
                        aesthetic goals. We dentist can help determine the most appropriate option based on the
                        condition of your teeth and your desired outcome.</p>
                    <div className=''>
                        <p className="lead  text-start text-start">Dental crowns are custom-made caps that cover damaged or weakened teeth to restore
                            their shape, size, strength, and appearance. They are designed to protect and support teeth
                            that have been severely damaged by decay, fractures, or other issues, and are also used to
                            enhance the aesthetics of discoloured or misshapen teeth.
                        </p>
                        <br></br>
                    </div>
            </div>
            &nbsp;
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