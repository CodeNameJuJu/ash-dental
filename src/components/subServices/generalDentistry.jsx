import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function GeneralDentistry() {

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
                        <h1 class="gold text-start">Comprehensive General Dentistry</h1>
                        <h3 class="brown text-start ">Personalized Care for Optimal Oral Health</h3>
                        {/* <h2 className='brown mb-2 text-start'>Patient-Centric Excellence</h2> */}
                    <br />
                    <p class="lead text-start">Experience personalised care and optimal oral health with our comprehensive range of general
                        dental services for the whole family that go beyond routine check-ups and cleanings. We believe in
                        crafting customized treatment plans tailored to individual needs, reflecting our commitment to
                        excellence in every service we offer.</p>
                    <br />
                    <p class="lead text-start">From dental restorations to general maintenance, we ensure
                        that every aspect of your oral health is meticulously addressed.</p>
                    <br />
                </div>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/FacesCloseUpsPortrait/8.webp" alt="Comprehensive General Dentistry" style={{ height: '490px' }} />
            </div>
            &nbsp;
            <br></br>

            <div class="row serv-top text-center">

                <h3 class="brown text-start" >Routine Check-ups and Cleanings:</h3>
                <p class="lead text-start"> Routine Check-ups and Cleanings are more than just
                    appointments – they are essential steps towards ensuring your long-term oral health. Our dedicated
                    team of professionals takes a personalized approach to every check-up, prioritizing preventive care
                    to detect and address any concerns at an early stage. From thorough examinations to gentle
                    cleanings, scaling and polish - our routine appointments are designed to keep your smile vibrant and
                    healthy. Embrace the reassurance that comes with regular dental check-ups and cleanings, where
                    your oral well-being is our top priority.
                </p>
                <br></br>
                &nbsp;
                <br></br>
                <h3 class="brown text-start ">Root Canal Therapy:</h3>
                <p class="lead text-start"> Experience advanced Endodontic treatments at ASH Dental, where we redefine
                    root canal therapy with precision and innovation to alleviate the throbbing pain. Endodontic
                    procedures, commonly known as root canal treatments, involve the meticulous removal of infected
                    or damaged pulp from within the tooth (dental abscess), followed by thorough cleaning,
                    disinfection, and the sealing of the root canal.
                </p>
                <br></br>
                <p class="lead text-start">
                    At ASH Dental, we employ cutting-edge 3D imaging technology to enhance the diagnostic and
                    treatment process, providing a comprehensive view of the tooth&#39;s internal structure. This ensures
                    unparalleled accuracy and precision in addressing complex root canal issues. Our dedicated team of
                    professionals combines expertise with advanced techniques to make Endodontic treatments a
                    seamless and effective experience, promoting long-term oral health. Trust ASH Dental for state-of-
                    the-art Endodontic care that goes beyond conventional root canal therapy, ensuring optimal results
                    for your dental well-being.
                </p>
                <br></br>
                &nbsp;
                <br></br>
                <h3 class="brown text-start">Tooth Extractions:</h3>
                <p class="lead text-start"> Our tooth extraction procedures ensure a seamless and comfortable process.
                    Whether it&#39;s the removal of a damaged, decayed or painful tooth the extraction of wisdom teeth,
                    our skilled professionals prioritize precision and patient well-being. At ASH Dental, we leverage
                    cutting-edge techniques to enhance the accuracy and efficiency of tooth extraction. Advanced
                    imaging technology, including 3D imaging, allows us to thoroughly assess the tooth and surrounding
                    structures, ensuring a comprehensive approach to each extraction. Trust our dedicated team to
                    make tooth extraction a smooth and precise experience.
                </p>
                <br></br>
                &nbsp;
                <br></br>
                <h3 class="brown text-start">Dental Restorations:</h3>
                <p class="lead text-start"> We offer a range of dental restorations, including fillings, crowns, bridges, and
                    dentures, to enhance the appearance and functionality of your smile. We prioritize excellence in
                    every restoration, aiming for both optimal aesthetics and long-lasting durability. At ASH Dental, we
                    leverage cutting-edge materials and technology to ensure the highest quality in dental restorations.
                    Advanced imaging techniques, including 3D technology, allow us to create precise and tailored
                    solutions for each patient.
                </p>
                <br></br>
                &nbsp;
                <br></br>
                <h3 class="brown text-start">Gum Disease Treatment:</h3>
                <p class="lead text-start"> Early detection and intervention are key in managing gum disease. We go
                    beyond conventional methods to address gum disease comprehensively, from gingivitis to advanced
                    periodontal stages. We don&#39;t just treat gum disease; we aim to prevent its recurrence.
                </p>
                <br></br>
                &nbsp;
                <br></br>

                <h3 class="brown text-start">Mouthguards and Nightguards:</h3>
                <p class="lead text-start"> Customized mouthguards and nightguards provide protection
                    against teeth grinding and sports-related injuries.
                </p>
            </div>

            &nbsp;

            <div class="row serv-top text-center">
                <h3 class="brown text-start" >Wisdom Teeth Management:</h3>
                <p class="lead text-start"> Our specialized care for wisdom teeth ensures their removal is as comfortable and efficient as
                    possible. ASH Dental&#39;s commitment to acknowledging patient needs and concerns, along with a
                    patient-first approach, is evident in our approach to wisdom teeth management. Comfort during the
                    procedure are not just an expectation; they are a commitment we uphold throughout your dental
                    journey with us.
                </p>
                <br></br>
                &nbsp;
                <h3 class="brown text-start">Denture Expertise:</h3>
                <p class="lead text-start "> Our team is skilled in providing denture solutions that restore smiles and functionality. ASH Dental&#39;s
                    dedication to embracing uniqueness and acceptance is reflected in our denture expertise. We
                    understand that every patient is a unique canvas, and our commitment to providing personalized
                    treatment plans extends to our denture services. Bid farewell to loose dentures; with cutting-edge
                    technology, you can now enjoy peace of mind by securing your dentures with implants.
                </p>
            </div>

            <br></br>
        </div>
    )
}

export default GeneralDentistry;

// ******************************************************************* EOF ******************************************************************************