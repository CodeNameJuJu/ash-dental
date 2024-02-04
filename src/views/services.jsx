import React from 'react';
import { Link } from 'react-router-dom'
import '../Main.css';
import { treatments } from '../data/treatmentData';


/* Maak components vir die Services page wat in die cards gaan gebruik vir elke employee */

function Section({ name, displayName, image, path, bio }) {
    return (
        <div className='row mt-2 pt-2 mb-2 pb-2'>
            <div className='col-sm-8'>
                <section>
                    <h3 className='section-title mb-2 h1 text-center header-col'>{name}</h3>
                </section>
                <p>{bio}</p>
            </div>
            <img className='col-sm-4 mb-5 pb-5' src={image} alt={name} />
            <Link className="nav-link" to={`/services/${path}`} title='Home'>
                Read More
            </Link>
        </div>
    );
}

function Services() {


    // Fetch the data for the specified treatment member
    const treatment = treatments;

    return (
        <div>
            <nav class="navbar nav-bg navbar-expand-sm "> <button class="navbar-toggler" type="button" data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="sub-nav-item active"> <a href="#" class="sub-nav-link"> Cosmetic Dentistry </a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> Teeth Whitening </a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> Crowns and Veneers </a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> Dental Implants </a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> Orthodontics</a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> General Dentistry </a> </li>
                        <li class="sub-nav-item"> <a href="#" class="sub-nav-link"> 24 Hour Emergencies </a> </li>
                    </ul>
                </div>
            </nav>
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-6">
                            <div class="text-center my-5">
                                <h1 class="display-5 fw-bolder text-white mb-2">Our Services</h1>
                                <p class="lead text-white-50 mb-4">Quickly design and customize responsive mobile-first sites!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div class="card text-white bg-secondary my-5 py-4 text-center">
                <div class="card-body"><p class=" shine2 text-white m-0">Your Dental Journey Starts Here</p></div>
            </div>
            <div>
            </div>
            <div class="gradient-line-divider"></div>
            {/* <div class="background1">
                <div >
                    <div class="scontainer">
                        <h3 class="title">Text fadeIn bottom</h3>
                        <div class="content">
                            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                                <div class="content-overlay"></div>
                                <img class="content-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt=""></img>
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title gold">Teeth Whitening:</h3>
                                    <p class="content-text">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                                        stains and discoloration, restoring the natural brilliance of your teeth. LINK.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
               
            </div> */}
            <div class="gradient-line-divider"></div>



           
            <div class="gradient-line-divider"></div>
            <hr></hr>
            <div>
                <div class="wrapper">
                    <div class="serv-content-block">
                        <h2>Teeth Whitening:</h2>
                        <p>Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                            stains and discoloration, restoring the natural brilliance of your teeth.</p>
                    </div>
                    <div class="serv-overlay-block"></div>
                    <div class="serv-image-block">
                        <img class="serv-image" src="../Images/toothbrush.jpg" alt="Image description"></img>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div class="serv2-wrapper">
                <img class="text1-img" src="../Images/text2.jpg" alt="Texture background"></img>
                <div class="serv2-content-block">
                    <h2 class="gold" >Advanced Cosmetic Dentistry</h2>
                    <h3 class="brown" >Redesign, Enhance, Transform</h3>
                    <p>Redefine smiles and enhance the natural beauty of your teeth. Cosmetic dentistry goes beyond
                        traditional dental procedures; it&#39;s an art form dedicated to improving the aesthetics and function of
                        your smile. Our skilled team at ASH Dental employs cutting-edge techniques and personalized
                        treatment plans to address a range of cosmetic concerns, including teeth discoloration,
                        misalignment, and imperfections. Whether you desire a whiter, straighter, or more aesthetically
                        pleasing smile, our cosmetic dentistry services are tailored to meet your unique goals. We offer a
                        comprehensive range of treatments, from professional teeth whitening and veneers to smile
                        makeovers and full-mouth reconstruction..</p>
                    <p class="gold" >The benefits of cosmetic dentistry extend beyond appearance, positively impacting your confidence,
                        self-esteem, and overall oral health. Discover the transformative power of a radiant smile at ASH
                        Dental, where precision, elegance, and excellence converge to create a truly exceptional cosmetic
                        dentistry experience.</p>
                </div>
                
                <div class="serv2-overlay-block"></div>
                <div class="serv2-image-block">
                    <img class="serv2-image" src="../Images/fullequiped2.jpg" alt="Image 2 description"></img>
                </div>
            </div>

            <div class="serv3-container">
                <div class="serv3-image-grid">
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/boypatient.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Teeth Whitening:</h3>
                            <p class="content-text white">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                                stains and discoloration, restoring the natural brilliance of your teeth. LINK.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/boypatient2.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Veneers:</h3>
                            <p class="content-text">Transform your smile with our custom-made porcelain veneers. These thin shells are expertly
                                crafted to cover imperfections and enhance the overall appearance of your teeth.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/womanpatient.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Dental Bonding:</h3>
                            <p class="content-text">Address chipped or discoloured teeth with our dental bonding services. Using tooth-coloured resin,
                                we sculpt and shape the material to achieve a seamless and natural look.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/emptyroom.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Dental Crowns:</h3>
                            <p class="content-text">Revitalize damaged or discoloured teeth with our dental crowns made out of emax- and sagemax
                                zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring
                                a natural and harmonious smile.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/fullequiped.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Orthodontics:</h3>
                            <p class="content-text">Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear
                                aligners, we tailor treatments to enhance both aesthetics and functionality..</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/fullequiped2.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Dental Implants:</h3>
                            <p class="content-text">Experience a transformative smile with our dental implant solutions. Beyond restoration, implants
                                contribute to the overall cosmetic enhancement of your smile by replacing missing teeth. </p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/womanpatient.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Gum Contouring:</h3>
                            <p class="content-text">Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service
                                    enhances the appearance of your teeth, especially beneficial for those with a gummy smile.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/boypatient2.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Smile Makeovers:</h3>
                            <p class="content-text">Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine
                                various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique
                                preferences.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/boypatient.jpg" alt="Image 1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h3 class="content-title gold">Full-Mouth Reconstruction:</h3>
                            <p class="content-text">Transform your entire oral landscape with our Full-Mouth Reconstruction services. This
                                comprehensive approach addresses both functional and aesthetic concerns, incorporating various
                                cosmetic and restorative procedures.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class=" info row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="../Images/temp2.jpg" alt="..."></img></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light ">Our Technology</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <a class="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div>


            {/* <div>
                <div class="emergency">
                    <div class="emergency-image">
                        <img src="../Images/Dent2.jpg" alt="ESPA skincare products on a shelf"></img>
                    </div>
                    <div class="emergency-text">
                        <h2>24 hour Emergencies</h2>
                        <h3>ASH Dental 24-Hour Emergency Dental Service</h3>
                        <p>We recognize the importance of accommodating the demanding schedules of busy professionals.
                            That&#39;s why we are proud to introduce our 24-Hour Emergency Dental Service, designed to provide
                            round-the-clock dental care tailored to your needs.</p>

                        <a href="#" class="gold emergency-button">VIEW MENU</a>
                    </div>
                </div>
            </div>

            <div class="centered-container">
                <div>
                    <h2>Why Choose ASH Dental&#39;s 24-Hour Service?</h2>
                    <li>Convenience: Life doesn&#39;t adhere to a 9-to-5 schedule, and neither do dental emergencies.
                        Our 24-hour* service ensures that you can access quality dental care whenever you need it,
                        whether it&#39;s the middle of the night or during a hectic workday.</li>
                    <li>Prompt Assistance: Dental issues can be urgent, and delays in treatment may worsen the
                        situation. With ASH Dental&#39;s 24-hour service*, you can expect prompt assistance from our
                        skilled professionals, addressing your dental concerns swiftly and effectively.</li>
                    <li>Minimal Disruption: We understand the importance of your time and commitments. Our
                        24-hour service* is designed to provide the dental care you need without disrupting your
                        schedule. Whether you&#39;re dealing with sudden pain, a broken tooth, or any other urgent
                        dental issue, we are here to help 24/7.</li>
                </div>
                &#160;
                <div>
                    <h2>Services Offered:
                    </h2>
                    <li>Emergency Toothache Relief</li>
                    <li>Same-Day Repairs for Chipped or Broken Teeth</li>
                    <li>Urgent Care for Dental Injuries</li>
                    <li>Swift Assistance for Lost or Dislodged Dental Restorations</li>
                    <li>Immediate Attention for Severe Gum Issues</li>
                </div>
                &#160;
                <div>
                    <h2>How It Works:</h2>
                    <li>Contact Us Anytime: Reach out to ASH Dental at any hour, day or night, by calling our
                        dedicated emergency hotline.</li>
                    <li>Prompt Consultation: Our experienced dental professionals will provide a prompt
                        consultation, guiding you on the necessary steps and assessing the urgency of your situation.</li>
                    <li>Immediate Care: If immediate care is required, we will make the necessary arrangements
                        for you to receive swift and effective treatment at our practice.</li>
                    <li>Follow-Up: After addressing the immediate concern, we will schedule a follow-up
                        appointment during regular hours for any further necessary treatments or comprehensive
                        care.</li>
                </div>
                &#160;
                <p class="text-align: center">*please note that a call out fee applies.</p><p>Emergency Hotline: 062 408 5934</p>
                <p>
                Contact ASH Dental now to experience reliable, round-the-clock dental care tailored to your busy
                    schedule.
                </p>
            </div> */}




            {/* <div className='container'>
                <section>
                    <br />
                    <br />
                    <h1 className='section-title mb-2 text-center'>Our services!</h1>
                </section>
                <div>
                    {treatment.map((treat, index) => (
                        <div className='mb-5 pb-5' key={index}>
                            <Section
                                name={treat.displayName}
                                image={treat.image}
                                bio={treat.bio}
                                path={treat.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                            />
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default Services;