import React from 'react';
import '../Main.css';
import { Link, useLocation } from 'react-router-dom';
import CosmeticDentistry  from '../components/subServices/cosmeticDentistry';


function Services() {

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
            {/* <section class="ban_sec">
                <div class="banner-1">
                    
                    <div class="ban_img">
                        <img src="/Images/ServicesLandscape/banner2.jpg" alt="banner" border="0"></img>
                        <div class="ban_text">
                            <strong>
                                <span class="gold">Meeting current</span><br></br> needs now
                            </strong>
                            <p class="g">Your Gateway to Healthy, Happy Smiles: Discover Ash Dental.</p>
                            <a href="#">Lend a hand</a>
                        </div>
                    </div>
                </div>
            </section> */}

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

            {/* <div>
                <div class="wrapper">
                    <div class="serv-content-block">
                        <h2 class="text-color-white">Teeth Whitening:</h2>
                        <p>Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                            stains and discoloration, restoring the natural brilliance of your teeth.</p>
                    </div>
                    <div class="serv-overlay-block"></div>
                    <div class="serv-image-block">
                        <img class="serv-image" src="/Images/Dental/2.png" alt="description"></img>
                    </div>
                </div>
            </div> */}

           
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
             <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 mt-3 pb-3 text-color-gold'>Advanced Cosmetic Dentistry</h1>
                    <h3 class="brown ">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="lead col-8 ">Redefine smiles and enhance the natural beauty of your teeth. Cosmetic dentistry goes beyond
                        traditional dental procedures; it&#39;s an art form dedicated to improving the aesthetics and function of
                        your smile. Our skilled team at ASH Dental employs cutting-edge techniques and personalized
                        treatment plans to address a range of cosmetic concerns, including teeth discoloration,
                        misalignment, and imperfections.
                        </p>
                        <br></br>
                        <p className="lead col-8">Whether you desire a whiter, straighter, or more aesthetically
                        pleasing smile, our cosmetic dentistry services are tailored to meet your unique goals. We offer a
                        comprehensive range of treatments, from professional teeth whitening and veneers to smile
                        makeovers and full-mouth reconstruction.
                        </p>
                        <br></br>
                        <p className="lead col-8">The benefits of cosmetic dentistry extend beyond appearance, positively impacting your confidence,
                        self-esteem, and overall oral health. Discover the transformative power of a radiant smile at ASH
                        Dental, where precision, elegance, and excellence converge to create a truly exceptional cosmetic
                        dentistry experience.
                        </p>
                    </div>

            </div>
{/* 
                <div class="col-4">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/Dental/5.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div> */}
            </div>





            <div class="serv3-container">
                <div class="serv3-image-grid">
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/1.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Teeth Whitening:</h1>
                            <p class="content-text white">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                                stains and discoloration, restoring the natural brilliance of your teeth. LINK.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/4.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Veneers:</h1>
                            <p class="content-text white">Transform your smile with our custom-made porcelain veneers. These thin shells are expertly
                                crafted to cover imperfections and enhance the overall appearance of your teeth.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/8.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Dental Bonding:</h1>
                            <p class="content-text white" >Address chipped or discoloured teeth with our dental bonding services. Using tooth-coloured resin,
                                we sculpt and shape the material to achieve a seamless and natural look.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/Crowns2.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Dental Crowns:</h1>
                            <p class="content-text white">Revitalize damaged or discoloured teeth with our dental crowns made out of emax- and sagemax
                                zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring
                                a natural and harmonious smile.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/Ortho.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Orthodontics:</h1>
                            <p class="content-text white">Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear
                                aligners, we tailor treatments to enhance both aesthetics and functionality..</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/DentalImplant.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title gold">Dental Implants:</h1>
                            <p class="content-text white">Experience a transformative smile with our dental implant solutions. Beyond restoration, implants
                                contribute to the overall cosmetic enhancement of your smile by replacing missing teeth. </p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsPortrait/Gum.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Gum Contouring:</h1>
                            <p class="content-text white">Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service
                                enhances the appearance of your teeth, especially beneficial for those with a gummy smile.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/5.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title white">Smile Makeovers:</h1>
                            <p class="content-text white">Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine
                                various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique
                                preferences.</p>
                        </div>
                    </div>
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/MouthReconstruction.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h1 class="content-title gold">Full-Mouth Reconstruction:</h1>
                            <p class="content-text white">Transform your entire oral landscape with our Full-Mouth Reconstruction services. This
                                comprehensive approach addresses both functional and aesthetic concerns, incorporating various
                                cosmetic and restorative procedures.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
             <div className='text-center ps-4 ms-4 pe-4 me-4' >
                    <h1 className='pt-4 mt-3 pb-3 text-color-gold'>A Journey to Transformative Smiles</h1>
                    <h3 class="brown ">Redesign, Enhance, Transform</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className="lead col-8 ">At ASH Dental, our Cosmetic Dentistry goes beyond enhancing smiles; it's about crafting a personalized and radiant expression of your individuality.
                     Schedule a consultation to explore the possibilities and rediscover the beauty of your smile with us.
                        </p>
                        <br></br>
                        <p className="lead col-8">Schedule a consultation to explore the possibilities and rediscover the beauty of your smile
                     with us. 
                        </p>
                        <br></br>
                        <div className='col-4-6 mt-2 mb-2'>
                    <button type="button" className="btn btn-bg btn-link"  title="Documents">
                        Book an appointment
                    </button>
                    </div>
                    </div>
                    </div>
                    
                    

            </div>


                <br></br>
            {/* <div class="card text-white bg-secondary my-5 py-4 text-center">
                <div class="card-body"><p class=" shine2 text-white m-0">Your Dental Journey Starts Here</p></div>
            </div>
            <div class=" info row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="/Images/Dental/6.png" alt="..."></img></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light ">Our Technology</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <a class="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div> */}


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




        </div>
    )
}

export default Services;