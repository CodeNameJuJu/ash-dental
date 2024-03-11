import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'

const imageIndexMapping = {
    "banner": "/Images/banner1.jpg",
    "teethWhitening": "/Images/FacesCloseUpsLandscape/1.png",
    "veneers": "/Images/FacesCloseUpsLandscape/4.png",
    "dentalBonding": "/Images/FacesCloseUpsLandscape/8.png",
    "dentalCrowns": "/Images/ServicesLandscape/Crowns2.png",
    "orthodontics": "/Images/ServicesLandscape/Ortho.png",
    "dentalImplants": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-6511.jpg",
    "gumContouring": "/Images/FacesCloseUpsPortrait/Gum.png",
    "smileMakeovers": "/Images/FacesCloseUpsLandscape/5.png",
    "fullMouthReconstruction": "/Images/ServicesLandscape/MouthReconstruction.png",
    "meetArtistsImage": "/Images/Dental/5.png",
    "patientCentricImage": "/Images/Dental/3.png",
    "technologyImage": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-44.jpg",
    "meetArtistsTeamImage": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1741.jpg"
};

export const Home = () => {

    return (
        <div className="container-fluid p-0">
            <img src={imageIndexMapping["banner"]} alt="banner" className="img-fluid" style={{ maxHeight: '600px' }} />
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
            <div className="serv3-container text-center">
                <h1 className="gold">Services</h1>
                <h2 className="brown">Crafting Radiant Smiles</h2>
                <div className="serv3-container">
                    <div className="serv3-image-grid">
                        <Link to="/teethWhitening">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["teethWhitening"]} alt="Teeth Whitening" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Teeth Whitening</h2>
                                    <p className="content-text white">Illuminate your smile with our professional teeth whitening procedures. We specialize in removing stains and discoloration, restoring the natural brilliance of your teeth.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/crowns">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["veneers"]} alt="Veneers" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Veneers</h2>
                                    <p className="content-text white">Transform your smile with our custom-made porcelain veneers. These thin shells are expertly crafted to cover imperfections and enhance the overall appearance of your teeth.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dental">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["dentalBonding"]} alt="Dental Bonding" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Dental Bonding</h2>
                                    <p className="content-text white">Address chipped or discolored teeth with our dental bonding services. Using tooth-colored resin, we sculpt and shape the material to achieve a seamless and natural look.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/crowns">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["dentalCrowns"]} alt="Dental Crowns" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Dental Crowns</h2>
                                    <p className="content-text white">Revitalize damaged or discolored teeth with our dental crowns made out of emax- and sagemax zirconia porcelain. These caps not only strengthen teeth but also improve their appearance, ensuring a natural and harmonious smile.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/orthodontics">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["orthodontics"]} alt="Orthodontics" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Orthodontics</h2>
                                    <p className="content-text white">Achieve a beautifully aligned smile with our orthodontic solutions. From traditional braces to clear aligners, we tailor treatments to enhance both aesthetics and functionality.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/dental">
                            <div className="serv3-image-block">
                                <div className="serv3-content-overlay"></div>
                                <img className="serv3-img" src={imageIndexMapping["dentalImplants"]} alt="Dental Implants" />
                                <div className="serv3-content-details fadeIn-bottom">
                                    <h2 className="content-title white">Dental Implants</h2>
                                    <p className="content-text white">Experience a transformative smile with our dental implant solutions. Beyond restoration, implants contribute to the overall cosmetic enhancement of your smile by replacing missing teeth.</p>
                                </div>
                            </div>
                        </Link>
                        <div className="serv3-image-block">
                            <div className="serv3-content-overlay"></div>
                            <img className="serv3-img" src={imageIndexMapping["gumContouring"]} alt="Gum Contouring" />
                            <div className="serv3-content-details fadeIn-bottom">
                                <h2 className="content-title white">Gum Contouring</h2>
                                <p className="content-text white">Refine your smile with our gum contouring procedures. Also known as gum reshaping, this service enhances the appearance of your teeth, especially beneficial for those with a gummy smile.</p>
                            </div>
                        </div>
                        <div className="serv3-image-block">
                            <div className="serv3-content-overlay"></div>
                            <img className="serv3-img" src={imageIndexMapping["smileMakeovers"]} alt="Smile Makeovers" />
                            <div className="serv3-content-details fadeIn-bottom">
                                <h2 className="content-title white">Smile Makeovers</h2>
                                <p className="content-text white">Embark on a personalized journey with our Smile Makeovers. These comprehensive plans combine various cosmetic procedures to achieve a harmonious and attractive smile tailored to your unique preferences.</p>
                            </div>
                        </div>
                        <div className="serv3-image-block">
                            <div className="serv3-content-overlay"></div>
                            <img className="serv3-img" src={imageIndexMapping["fullMouthReconstruction"]} alt="Full-Mouth Reconstruction" />
                            <div className="serv3-content-details fadeIn-bottom">
                                <h2 className="content-title white">Full-Mouth Reconstruction</h2>
                                <p className="content-text white">Transform your entire oral landscape with our Full-Mouth Reconstruction services. This comprehensive approach addresses both functional and aesthetic concerns, incorporating various cosmetic and restorative procedures.</p>
                            </div>
                        </div>
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
                    <Link className="active" to="/gallery" title="View Gallery">
                        <button class="crown-button" >View Gallery</button>
                    </Link>

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
                    <Link className="active" to="/technology" title="Technology">
                        <button class="crown-button" >Read More About Technology</button>
                    </Link>

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
                    <Link className="active" to="/about" title="About Us">
                        <button class="crown-button" >Click here to read more</button>
                    </Link>
                </div>
                <br></br>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-5' src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1741.jpg" alt="Patient Centric Excellence" style={{ height: '70%' }} />
            </div>
        </div>
    )
}

export default Home;

// ******************************************************************* EOF ******************************************************************************