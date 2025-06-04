import React, { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Image index mapping
const imageIndexMapping = [
    { name: "Dr. Guilherme Rodrigues", index: 158 },
    { name: "Dr. Juan Williams", index: 188 },
    { name: "Dr. Eulana Marais", index: 123 },
    { name: "Dr. Michelle Karl",  },
    { name: "Danette Smit",  }
];

function Card({ name, image, bio, title, quali }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const bioPreview = bio.length > 600 ? bio.substring(0, 600) + '...' : bio;


    return (
        <div className="row d-flex justify-content-center mb-5 pb-5 pt-4 mt-4 me-0 ms-0 ps-0 pe-0">
            <div className="col-md-5 col-sm-6 no-padding">
                <img className="img-fluid" src={image} alt="trainer-img" />
            </div>
            <div className='col-md-5 col-sm-6 card-background' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Texture3.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='pb-3 mb-4 pt-2 mt-2 ps-4 ms-4 pe-4 me-4'>
                    <br />
                    <br />
                    <h1 className="card-title text-start">{name}</h1>
                    <br />
                    <h3 className="card-title text-start">{title}</h3>
                    <h4 className="card-title text-start">{quali}</h4>
                    <br />
                    {/* <p className="card-text lead text-start smaller-text">{bio}</p> */}

                    <p className={`card-text lead pb-2 text-start smaller-text ${name === "Danette Smit" ? 'new-doctor-bio' : ''}`}>
                        {name === "Danette Smit" && !isExpanded ? bioPreview : bio}
                    </p>

                    {/* Show "Read more" button only for Danette Smit */}
                    {name === "Danette Smit" && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn btn-link text-start  btn-bg"
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function Card2({ name, image, bio, title, quali }) {
    return (
        <div className="row d-flex justify-content-center mb-5 pb-5 pt-4 mt-4 me-0 ms-0 ps-0 pe-0">
            <div className='col-md-5 col-sm-6 card-background' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Texture3.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='pb-4 mb-4 pt-2 mt-2 ps-4 ms-4 pe-4 me-4'>
                    <br />
                    <br />
                    <h1 className="card-title text-start">{name}</h1>
                    <br />
                    <h3 className="card-title text-start">{title}</h3>
                    <h4 className="card-title text-start">{quali}</h4>
                    <br />
                    <br />
                    <p className={`card-text lead text-start smaller-text ${name === "Dr. Michelle Karl" ? 'new-doctor-bio' : ''}`}>
                        {bio}
                        </p>

                </div>
            </div>
            <div className="col-md-5 col-sm-6 no-padding">
                <img className="img-fluid img-fluid-doc" src={image} alt="trainer-img" />
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
            <div className='text-center ps-4 ms-4 pe-4 me-4 ps-md-4 ms-md-4 pe-md-4 me-md-4' >
                <div className='pt-4 mt-3 pb-3 ps-md-4 ms-md-4 pe-md-4 me-md-4'>
                    <h1 className='pt-4 mt-3 pb-3 text-color-gold'>Transform your smile with expert dental care and precision</h1>
                    <div className='d-flex justify-content-center'>
                        <p className="lead col-md-12 col-sm-10 ps-1 ms-1 text-start">We envision a world where every smile radiates confidence, health, and individuality. As
                            leaders in both cosmetic and general dentistry, we are committed to setting new benchmarks
                            for precision, artistry, and patient-centred dental care.
                        </p>
                    </div>
                    <h2 className='pt-4 mt-3 pb-3 brown'>Meet our dental artists: Crafting smiles with expertise and passion</h2>
                    <div className='d-flex justify-content-center'>
                        <p className="lead col-md-12 col-sm-10 ps-1 ms-1 text-start">
                        Our team of dentists in Pretoria comprises highly skilled professionals, each bringing their
                        unique expertise and dedication to our dental practice. We are not just dental experts; we
                        are passionate artists committed to creating smiles that reflect your inner beauty and
                        enhance your overall well-being.
                        </p>
                    </div>
                </div>
                <div className='card-padding'>
                    <div className=' pt-4 mt-4'>
                        {isSmallScreen ? (
                            <>
                                {imageIndexMapping.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {index === 0 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                title="Founder and Chief Smile Architect"
                                                quali="BChD (Pret.), DipOdont (Oral Surg.)(Pret.)"
                                                bio="Dr. Rodrigues leads our team with a vision to redefine dental care. As an accomplished dentist with a passion for cosmetic dentistry, Dr Rodrigues has transformed countless smiles and lives."
                                            />
                                        )}
                                        {index === 2 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                title="Dental Artist"
                                                quali="BChD (Pret.), DipOdont (Endo)"
                                                bio="Dr. Eulana isn't just about fixing teeth; she's about crafting confident smiles and empowering individuals to shine. As you step into our practice, Dr. Eulana's warm and caring presence instantly puts you at ease. Her commitment to precision and excellence aligns perfectly with ASH DENTAL's ethos of unwavering commitment and a new benchmark in luxury dental care." />
                                        )}
                                        {index === 4 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/ServicesLandscape/hygenist.jpg`}
                                                title="Hygienist & Health Professional"
                                                quali="OH (Pret.)"
                                                bio="With 15 years of experience, Danette brings a wealth of expertise and a compassionate approach to patient care.​
                                                    As a mother of three, Danette embodies a family-oriented lifestyle, infusing warmth and understanding into her practice. She excels in collaborative settings, working seamlessly with our dental artists to deliver comprehensive care.​

                                                    Danette specializes in treating patients with gum infections, focusing on restoring oral health and educating patients about the vital connection between dental and overall well-being. Her proficiency extends 
                                                    to caring for patients with dental implants, crowns, and bridgework, ensuring the longevity and health of their restorations.​

                                                    Passionate about patient education, Danette empowers individuals to take an active role in their oral health. She has a special talent for making children feel comfortable and safe, turning dental visits into positive experiences that foster lifelong healthy habits.​

                                                    Her expertise also includes orthodontic care, where she collaborates with our dental artists to help patients achieve properly aligned teeth. Additionally, Danette is highly skilled in teeth whitening procedures, ensuring patients attain brighter smiles safely and effectively.​

                                                    With her unwavering commitment to teamwork, patient education, and high-quality care, Danette Smit is a compassionate dental professional dedicated to enhancing smiles—one patient at a time." />
                                        )}
                                        {index === 1 && (
                                            <>
                                                {isSmallScreen ? (
                                                    <Card
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                        title="Co-Founder and Dental Artist"
                                                        quali="BSc (Pret.), BChD (Pret.)"
                                                        bio="Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."
                                                    />
                                                ) : (
                                                    <Card2
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                        title="Co-Founder and Dental Artist"
                                                        quali="BSc (Pret.), BChD (Pret.)"
                                                        bio="Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."
                                                    />
                                                )}
                                            </>
                                        )}
                                        {index === 3 && (
                                            <>
                                                {isSmallScreen ? (
                                                    <Card
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/DrKarl.jpg`}
                                                        title="Cosmetic Dentist & Facial Aesthetics Artist"
                                                        className="new-doctor-bio docimg"
                                                        quali="BChD (Pret.)"
                                                        bio="Dr. Michelle Karl is a highly skilled cosmetic dentist with a passion for facial aesthetics. With nearly two decades of experience in private practice, Dr. Karl brings a wealth of expertise, artistic precision,
                                                         and a patient-centred approach to our team. Having earned her BChD degree from the University of Pretoria in 2005, Dr. Karl has built a reputation for transforming smiles and enhancing natural beauty through cutting-edge 
                                                        cosmetic and restorative dentistry. Her keen eye for detail and dedication to excellence align perfectly with ASH Dental’s vision of redefining the dental experience. Beyond dentistry, Dr. Karl specialises in 
                                                        facial aesthetics, offering a range of non-invasive treatments. Her philosophy is simple: every smile should radiate confidence, and beauty should be enhanced, not altered. "
                                                    />
                                                ) : (
                                                    <Card2
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/DrKarl.jpg`}
                                                        title="Cosmetic Dentist & Facial Aesthetics Artist"
                                                        className="new-doctor-bio "
                                                        quali="BChD (Pret.)"
                                                        bio="Dr. Michelle Karl is a highly skilled cosmetic dentist with a passion for facial aesthetics. With nearly two decades of experience in private practice, Dr. Karl brings a wealth of expertise, artistic precision,
                                                         and a patient-centred approach to our team. Having earned her BChD degree from the University of Pretoria in 2005, Dr. Karl has built a reputation for transforming smiles and enhancing natural beauty through cutting-edge 
                                                        cosmetic and restorative dentistry. Her keen eye for detail and dedication to excellence align perfectly with ASH Dental’s vision of redefining the dental experience. Beyond dentistry, Dr. Karl specialises in 
                                                        facial aesthetics, offering a range of non-invasive treatments. Her philosophy is simple: every smile should radiate confidence, and beauty should be enhanced, not altered. "
                                                    />
                                                )}
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
                            </>
                        ) : (
                            <>
                                {imageIndexMapping.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {index === 0 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                title="Founder and Chief Smile Architect"
                                                quali="BChD (Pret.), DipOdont (Oral Surg.)(Pret.)"
                                                bio="Dr. Rodrigues leads our team with a vision to redefine dental care. As an accomplished dentist with a passion for cosmetic dentistry, Dr Rodrigues has transformed countless smiles and lives."
                                            />
                                        )}
                                        {index === 2 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                title="Dental Artist"
                                                quali="BChD (Pret.), DipOdont (Endo)"
                                                bio="Dr. Eulana isn't just about fixing teeth; she's about crafting confident smiles and empowering individuals to shine. As you step into our practice, Dr. Eulana's warm and caring presence instantly puts you at ease. Her commitment to precision and excellence aligns perfectly with ASH DENTAL's ethos of unwavering commitment and a new benchmark in luxury dental care." />
                                        )}
                                        {index === 4 && (
                                            <Card
                                                name={item.name}
                                                image={`${process.env.PUBLIC_URL}/Images/ServicesLandscape/hygenist.jpg`}
                                                title="Hygienist & Health Professional"
                                                quali="OH (Pret.)"
                                                bio="With 15 years of experience, Danette brings a wealth of expertise and a compassionate approach to patient care.​
                                                    As a mother of three, Danette embodies a family-oriented lifestyle, infusing warmth and understanding into her practice. She excels in collaborative settings, working seamlessly with our dental artists to deliver comprehensive care.​

                                                    Danette specializes in treating patients with gum infections, focusing on restoring oral health and educating patients about the vital connection between dental and overall well-being. Her proficiency extends 
                                                    to caring for patients with dental implants, crowns, and bridgework, ensuring the longevity and health of their restorations.​

                                                    Passionate about patient education, Danette empowers individuals to take an active role in their oral health. She has a special talent for making children feel comfortable and safe, turning dental visits into positive experiences that foster lifelong healthy habits.​

                                                    Her expertise also includes orthodontic care, where she collaborates with our dental artists to help patients achieve properly aligned teeth. Additionally, Danette is highly skilled in teeth whitening procedures, ensuring patients attain brighter smiles safely and effectively.​

                                                    With her unwavering commitment to teamwork, patient education, and high-quality care, Danette Smit is a compassionate dental professional dedicated to enhancing smiles—one patient at a time." />
                                        )}
                                        {index === 1 && (
                                            <>
                                                {isSmallScreen ? (
                                                    <Card
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                        title="Co-Founder and Dental Artist"
                                                        quali="BSc (Pret.), BChD (Pret.)"
                                                        bio="Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."
                                                    />
                                                ) : (
                                                    <Card2
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/ASH DENTAL_content_MARCH'24-${item.index}.webp`}
                                                        title="Co-Founder and Dental Artist"
                                                        quali="BSc (Pret.), BChD (Pret.)"
                                                        bio="Meet Dr. Williams, our Dental Artist at ASH Dental. With a passion for crafting beautifully aligned smiles, Dr. Williams brings a blend of technical expertise and artistic flair to dental care."
                                                    />
                                                )}
                                            </>
                                        )}
                                        {index === 3 && (
                                            <>
                                                {isSmallScreen ? (
                                                    <Card
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/DrKarl.jpg`}
                                                        title="Cosmetic Dentist & Facial Aesthetics Artist"
                                                        quali="BChD (Pret.)"
                                                        bio="Dr. Michelle Karl is a highly skilled cosmetic dentist with a passion for facial aesthetics. With nearly two decades of experience in private practice, Dr. Karl brings a wealth of expertise, artistic precision,
                                                         and a patient-centred approach to our team. Having earned her BChD degree from the University of Pretoria in 2005, Dr. Karl has built a reputation for transforming smiles and enhancing natural beauty through cutting-edge 
                                                        cosmetic and restorative dentistry. Her keen eye for detail and dedication to excellence align perfectly with ASH Dental’s vision of redefining the dental experience. Beyond dentistry, Dr. Karl specialises in 
                                                        facial aesthetics, offering a range of non-invasive treatments. Her philosophy is simple: every smile should radiate confidence, and beauty should be enhanced, not altered. "
                                                        className="new-doctor-bio"
                                                    />
                                                ) : (
                                                    <Card2
                                                        name={item.name}
                                                        image={`${process.env.PUBLIC_URL}/Images/Practice/Low/DrKarl.jpg`}
                                                        title="Cosmetic Dentist & Facial Aesthetics Artist"
                                                        quali="BChD (Pret.)"
                                                        bio="Dr. Michelle Karl is a highly skilled cosmetic dentist with a passion for facial aesthetics. With nearly two decades of experience in private practice, Dr. Karl brings a wealth of expertise, artistic precision,
                                                         and a patient-centred approach to our team. Having earned her BChD degree from the University of Pretoria in 2005, Dr. Karl has built a reputation for transforming smiles and enhancing natural beauty through cutting-edge 
                                                        cosmetic and restorative dentistry. Her keen eye for detail and dedication to excellence align perfectly with ASH Dental’s vision of redefining the dental experience. Beyond dentistry, Dr. Karl specialises in 
                                                        facial aesthetics, offering a range of non-invasive treatments. Her philosophy is simple: every smile should radiate confidence, and beauty should be enhanced, not altered. "
                                                        className="new-doctor-bio"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </React.Fragment>
                                ))}
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
                    <img style={{height: '100%', width: '100%'  }} src={process.env.PUBLIC_URL + "/Images/ServicesLandscape/Ashdentalteam.jpg"} text="First slide" alt='Sale1' />
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
                            <div className="row mt-5 no-margins no-padding-row">
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
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
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

// ******************************************************************* EOF ******************************************************************************
