import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Home = () => {

    return (
        <div>
            <section class="ban_sec">
                <div class="banner-1">
                    {/* class="container" */}
                    <div class="ban_img">
                        <img src="/Images/banner1.jpg" alt="banner" border="0" style={{ height: '600px'}}></img>
                    </div>
                </div>
            </section>

            <div class="serv-top">
                <div class="text-center">
                    <h1 class="gold ">Welcome to ASH Dental</h1>
                    <br></br>
                    <p class="lead">Our journey begins the moment you step into our practice, where a seamless and visually captivating design welcomes you.
                        We seamlessly blend state-of-the-art technology with a relaxing environment, ensuring a personalized experience from the outset.
                    </p>
                    <br></br>
                    <p class="lead ">Our commitment to understanding your unique needs unfolds in a consultation room, where together, we craft the best plan tailored
                        to your individual requirements.
                        Transitioning from consultation to the dental treatment chair, we bring this personalized planning to life,
                        ensuring each step of your dental journey is marked by precision, comfort, and transformative care.
                    </p>
                </div>

            </div>
            <div class="serv3-container text-center">
                <h1 class=" gold">Services </h1>
                <h2 class=" brown"> Crafting Radiant Smiles</h2>
                <div class="serv3-container">
                <div class="serv3-image-grid">
                   <a href="/teethWhitening"> 
                   <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/1.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Teeth Whitening</h2>
                            <p class="content-text white">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing
                                stains and discoloration, restoring the natural brilliance of your teeth.</p>
                        </div>
                    </div>
                    </a>
                    <a href="/crowns"> 
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/4.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Veneers</h2>
                            <p class="content-text white">Transform your smile with our custom-made porcelain veneers. These thin shells are expertly
                                crafted to cover imperfections and enhance the overall appearance of your teeth.</p>
                        </div>
                    </div>
                    </a>
                    {/* <a href="/dental">  */}
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/8.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Dental Bonding</h2>
                            <p class="content-text white" >Address chipped or discoloured teeth with our dental bonding services. Using tooth-coloured resin,
                                we sculpt and shape the material to achieve a seamless and natural look.</p>
                        </div>
                    </div>
                    {/* </a> */}
                    <a href="/crowns"> 
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/Crowns2.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Dental Crowns</h2>
                            <p class="content-text white">Revitalize damaged or discoloured teeth with our dental crowns made out of emax- and sagemax
                                zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring
                                a natural and harmonious smile.</p>
                        </div>
                    </div>
                    </a>
                    <a href="/orthodontics"> 
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/Ortho.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Orthodontics</h2>
                            <p class="content-text white">Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear
                                aligners, we tailor treatments to enhance both aesthetics and functionality..</p>
                        </div>
                    </div>
                    </a>
                    <a href="/dental"> 
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-6511.jpg" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Dental Implants</h2>
                            <p class="content-text white">Experience a transformative smile with our dental implant solutions. Beyond restoration, implants
                                contribute to the overall cosmetic enhancement of your smile by replacing missing teeth. </p>
                        </div>
                    </div>
                    </a>
                    {/* <a href="/teethWhitening">  */}
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsPortrait/Gum.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Gum Contouring</h2>
                            <p class="content-text white">Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service
                                enhances the appearance of your teeth, especially beneficial for those with a gummy smile.</p>
                        </div>
                    </div>
                    {/* </a> */}
                    {/* <a href="/teethWhitening">  */}
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/FacesCloseUpsLandscape/5.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Smile Makeovers</h2>
                            <p class="content-text white">Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine
                                various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique
                                preferences.</p>
                        </div>
                    </div>
                    {/* </a> */}
                    {/* <a href="/teethWhitening">  */}
                    <div class="serv3-image-block">
                        <div class="serv3-content-overlay"></div>
                        <img class="serv3-img" src="/Images/ServicesLandscape/MouthReconstruction.png" alt="1"></img>
                        <div class="serv3-content-details fadeIn-bottom">
                            <h2 class="content-title white">Full-Mouth Reconstruction</h2>
                            <p class="content-text white">Transform your entire oral landscape with our Full-Mouth Reconstruction services. This
                                comprehensive approach addresses both functional and aesthetic concerns, incorporating various
                                cosmetic and restorative procedures.</p>
                        </div>
                    </div>
                    {/* </a> */}

                </div>
            </div>
            </div>


            <div>
                <section class="meet-artists">
                    <h2 class="home-h2 brown">Your Dental Journey Starts Here</h2>
                    <p class="home-p" >Embark on a dental journey where precision meets luxury. Experience ASH Dental – Where
                        Transformative Smiles Begin. Reach out to us for inquiries, appointments, or questions.</p>
                </section>
            </div>
            &nbsp;
            <div className='row'>
            <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/Dental/5.png" alt="Dental" style={{ height: '100%' }} />
            <div className='col-md-8 col-sm-12'>
                <section className='mt-3 pt-3'>
                    <h2 className='brown mb-2 text-start'>A Journey to Transformative Smiles</h2>
                </section>
            <p class="lead text-start center ">We envision a world where every smile tells a story of confidence, health, and individuality. We
                        strive to be pioneers in cosmetic and general dentistry, setting new standards for precision, artistry,
                         </p>
                <br />
                <a href="/gallery"><button class="crown-button" >View Gallery</button></a>
            </div>
        </div>
        
            &nbsp;
            <div className='row'>
            <div className='col-md-8 col-sm-12'>
                <section className='mt-3 pt-3'>
                    <h2 className='brown mb-2 text-start'>Patient-Centric Excellence</h2>
                </section>
                <p class="lead text-start center ">Your journey with ASH Dental is characterized by a patient-centric approach. We listen to your
                            unique needs, concerns, and aspirations, tailoring our services to ensure a comfortable, positive, and
                            transformative experience.
                            </p>
                <br />
               
            </div>
            <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/Dental/3.png" alt="Patient Centric Excellence" style={{ height: '100%' }} />
        </div>
           
            &nbsp;

            <div className='row'>
            <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-44.jpg" alt="Dental" style={{ height: '100%' }} />
            <div className='col-md-8 col-sm-12'>
                <section className='mt-3 pt-3'>
                    <h2 className='brown mb-2 text-start'>Innovation and Technology</h2>
                </section>
            <p class="lead text-start center ">We embrace innovation and leverage cutting-edge technology to provide state-of-the-art dental
                            solutions. From advanced diagnostic imaging to the latest in cosmetic dentistry techniques, we
                            ensure that you receive the highest quality care.
                         </p>
                <br />
                <a href="/technology"><button class="crown-button" >Read More About Technology</button></a>
            </div>
        </div>

            &nbsp;
            
            <div className='row'>
            <div className='col-md-8 col-sm-12'>
                <section className='mt-3 pt-3'>
                    <h2 className='brown mb-2 text-start'>Meet Our Dental Artists</h2>
                </section>
                <p class="lead text-start center "> Our team at ASH Dental is a collective of skilled professionals, each bringing a unique set of expertise
                            and passion to the practice. We are not just dental professionals; we are artists dedicated to creating
                            smiles that reflect the true beauty within each person.
                            </p>
                            <br></br>
                            <a href="/about"><button class="crown-button" >Click here to read more</button></a>
            
            </div>
           
            <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1741.jpg" alt="Patient Centric Excellence" style={{ height: '70%' }} />
        </div>
        </div>
    )
}
export default Home;