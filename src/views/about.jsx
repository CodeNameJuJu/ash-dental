import React, { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Card({ name, image, bio, title, quali }) {
    return (
        <div className="row d-flex justify-content-center mb-5 pb-5 pt-4 mt-4 me-0 ms-0 ps-0 pe-0">
            <div className="col-md-5 col-sm-6 no-padding">
                <img className="img-fluid" src={image} alt="trainer-img" />
            </div>
            <div className='col-md-5 col-sm-6 card-background' style={{ backgroundImage: `url(/Images/Texture3.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='pb-3 mb-4 pt-2 mt-2 ps-4 ms-4 pe-4 me-4'>
                    <br />
                    <br />
                    <h1 className="card-title text-start">{name}</h1>
                    <br />
                    <h3 className="card-title text-start">{title}</h3>
                    <h4 className="card-title text-start">{quali}</h4>
                    <br />
                    <br />
                    <p className="card-text lead text-start smaller-text">{bio}</p>
                </div>
            </div>
        </div>
    );
}

function Card2({ name, image, bio, title, quali }) {
    return (
        <div className="row d-flex justify-content-center mb-5 pb-5 pt-4 mt-4 me-0 ms-0 ps-0 pe-0">
            <div className='col-md-5 col-sm-6 card-background' style={{ backgroundImage: `url(/Images/Texture3.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='pb-4 mb-4 pt-2 mt-2 ps-4 ms-4 pe-4 me-4'>
                    <br />
                    <br />
                    <h1 className="card-title text-start">{name}</h1>
                    <br />
                    <h3 className="card-title text-start">{title}</h3>
                    <h4 className="card-title text-start">{quali}</h4>
                    <br />
                    <br />
                    <p className="card-text lead text-start smaller-text">{bio}</p>
                </div>
            </div>
            <div className="col-md-5 col-sm-6 no-padding">
                <img className="img-fluid" src={image} alt="trainer-img" />
            </div>
        </div>
    );
}

export const About = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1350);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1350);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='ps-md-5 ms-md-5 pe-md-5 me-md-5 ps-sm-3 ms-sm-3 pe-sm-3 me-sm-3'>
            <div className='text-center ps-md-4 ms-md-4 pe-md-4 me-md-4' >
                <div className='pt-4 mt-3 pb-3 ps-md-4 ms-md-4 pe-md-4 me-md-4'>
                    <h1 className='pt-4 mt-3 pb-3 text-color-gold'>A Journey to Transformative Smiles</h1>
                    <div className='d-flex justify-content-center'>
                        <p className="lead col-md-12 col-sm-10 ps-1 ms-1 text-start">At ASH Dental, we envision a world where every smile tells a story of confidence, health,
                            and individuality. We strive to be pioneers in cosmetic and general dentistry, setting new standards for precision,
                            artistry, and patient-centric care.
                        </p>
                    </div>
                    <h3 className='pt-4 mt-3 pb-3 brown'>Meet Our Dental Artists</h3>
                    <div className='d-flex justify-content-center'>
                        <p className="lead col-md-12 col-sm-10 ps-1 ms-1 text-start">
                            Our team at ASH Dental is a collective of skilled professionals, each bringing a unique set of expertise and passion to the practice.
                            We are not just dental professionals; we are artists dedicated to creating smiles that reflect the true beauty within each person.
                        </p>
                    </div>
                </div>
                <div className='card-padding'>
                    <div className=' pt-4 mt-4'>
                        {isSmallScreen ? (
                            <>
                                <Card
                                    name={"Dr. Guilherme Rodrigues"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Founder and Chief Smile Architect"}
                                    quali={"BChD (Pret.), DipOdont (Oral Surg.)(Pret.) "}
                                    bio={"Dr. Rodrigues leads our team with a vision to redefine dental care. As an accomplished dentist with a passion for cosmetic dentistry, Dr Rodrigues has transformed countless smiles and lives."}
                                />
                                <Card
                                    name={"Dr. Juan Williams"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Co-Founder and Dental Artist"}
                                    quali={"BSC (Pret), BChD (Pret)"}
                                    bio={"Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."}
                                />
                                <Card
                                    name={"Dr. Eulana Marais"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Co-Founder and Dental Artist"}
                                    quali={"BChD (Pret.)"}
                                    bio={"Driven by a lifelong passion for dentistry, Dr. Eulana isn't just about fixing teeth; she's about crafting confident smiles and empowering individuals to shine. As you step into our practice, Dr. Eulana's warm and caring presence instantly puts you at ease. Her commitment to precision and excellence aligns perfectly with ASH DENTAL's ethos of 'unwavering commitment and a new benchmark in luxury dental care.' This, combined with her calming demeanor, creates a welcoming and stress-free atmosphere where your comfort and well-being are paramount."}
                                />
                            </>
                        ) : (
                            <>
                                <Card
                                    name={"Dr. Guilherme Rodrigues"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Founder and Chief Smile Architect"}
                                    quali={"BChD (Pret.), DipOdont (Oral Surg.)(Pret.) "}
                                    bio={"Dr. Rodrigues leads our team with a vision to redefine dental care. As an accomplished dentist with a passion for cosmetic dentistry, Dr Rodrigues has transformed countless smiles and lives."}
                                />
                                <Card2
                                    name={"Dr. Juan Williams"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Co-Founder and Dental Artist"}
                                    quali={"BSC (Pret), BChD (Pret)"}
                                    bio={"Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."}
                                />
                                <Card
                                    name={"Dr. Eulana Marais"}
                                    image={"../Images/FacesCloseUpsPortrait/6.png"}
                                    title={"Co-Founder and Dental Artist"}
                                    quali={"BChD (Pret.)"}
                                    bio={"Driven by a lifelong passion for dentistry, Dr. Eulana isn't just about fixing teeth; she's about crafting confident smiles and empowering individuals to shine. As you step into our practice, Dr. Eulana's warm and caring presence instantly puts you at ease. Her commitment to precision and excellence aligns perfectly with ASH DENTAL's ethos of 'unwavering commitment and a new benchmark in luxury dental care.' This, combined with her calming demeanor, creates a welcoming and stress-free atmosphere where your comfort and well-being are paramount."}
                                />
                            </>
                        )}
                    </div>
                </div>
                <p className="lead col-md-12 col-sm-10 ps-1 ms-1 text-start">Our Team of Dental Artists Consists of Experienced Professionals,
                    each specializing in various aspects of dentistry, including cosmetic procedures, orthodontics,
                    endodontics, oral surgery, and general dentistry.
                </p>

                <div className='pt-3 mt-3'>
                    <h3 className='text-color-gold'>Meet the Team </h3>
                    <p className="lead  text-start ps-1 ms-1">
                        Discover the diverse talents that come together to create a harmonious blend of precision, compassion, and excellence,
                        ensuring that your experience with us is not just a dental appointment but a transformative and positive journey toward optimal oral health and confidence.
                        Our dedicated team at ASH Dental extends beyond our dentists to include skilled professionals in various roles.
                        Each member plays a pivotal role in shaping the overall patient experience at our practice, contributing to the seamless and comfortable journey you undergo with us.
                    </p>
                    <br />
                    <br />
                    <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/1.png" text="First slide" alt='Sale1' />
                    <br />
                </div>
                <br />
                <br />
                <br />
                <h3 className='pb-5 mb-5 text-color-gold'>
                    Embark on a Journey to Rediscover Your Smile.
                </h3>
                <section className='mb-5 pb-5 text-center' id="what-we-do">
                    <div className="container-fluid">
                        <div className='mb-3 pb-3 ps-3 pe-3' >
                            <div className="row mt-5 no-margins">
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background">
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color-gold"><i className="fa-solid fa-compass-drafting me-4"></i>Patient-Centric Excellence:</h3>
                                            <p className='ps-1 ms-1'>
                                                Your journey with ASH Dental is characterized by a patient-centric approach.
                                                We listen to your unique needs, concerns, and aspirations, tailoring our services to ensure a comfortable,
                                                positive, and transformative experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background">
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color-gold"><i className="fa-solid fa-wand-magic-sparkles me-3"></i>Innovation and Technology:</h3>
                                            <p>
                                                We embrace innovation and leverage cutting-edge technology to provide state-of-the-art dental solutions.
                                                From advanced diagnostic imaging to the latest in cosmetic dentistry techniques, we ensure that you receive the highest quality care.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background">
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color-gold"><i className="fa-solid fa-palette me-3"></i>Dentistry as an Art Form:</h3>
                                            <p>
                                                We believe that dentistry is an art form. Each smile is a canvas,
                                                and our approach involves meticulous planning, personalized treatments,
                                                and a commitment to achieving results that go beyond expectations.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background">
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color-gold"><i className="fa-solid fa-pen-to-square me-3"></i>Patient Education and Empowerment:</h3>
                                            <p>
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
            </div>
        </div>
    )
}

export default About;
