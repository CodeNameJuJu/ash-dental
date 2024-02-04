import React, { useRef } from 'react';
import { useForm } from 'react-hook-form'
import '../Main.css';
import emailjs from '@emailjs/browser';
import { MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Main.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { teamMembersDetails } from '../data/teamMembersData';

function Card({ name, displayName, image, path, bio }) {
    return (
        <div class="row ps-4 ms-4">
            <div class="col-sm-4" style={{ height: '35%', width: '25%', textAlign: 'center' }}>
                <img class="img-fluid" src={image} alt="trainer-img" />
            </div >
            <div className='col-sm-8' style={{ backgroundImage: `url(/Images/Background%202.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='pb-4 mb-4 pt-4 mt-4 ps-4 ms-4 pe-4 me-4'>
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{bio}</p>
                </div>
            </div>
        </div >
    );
}



function Form({ type, name, place }) {
    return (

        <div className="mb-3 pt-0">
            <input type={type} name={name} placeholder={place}
                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
        </div>

    );
}

export const About = () => {

    const teamMembers = teamMembersDetails;

    const { handleSubmit, formState } = useForm()
    const { isSubmitting } = formState

    // logic function to send emails to emailJS

    const form = useRef();

    const sendEmail = () => {

        emailjs.sendForm('service_ny768nq', 'template_uwqtnpl', form.current, 'KpiSa53Nghfe0Zc2i')
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })

    };

    return (
        <div className='ps-5 ms-5 pe-5 me-5' >
            <div className='text-center ps-4 ms-4 pe-4 me-4' >
                <div className='pt-4 mt-3 pb-3 ps-4 ms-4 pe-4 me-4'>
                    <h1 className='pt-4 mt-3 pb-3 text-color'>A Journey to Transformative Smiles</h1>
                    <p>At ASH Dental, we envision a world where every smile tells a story of confidence, health,
                        and individuality. We strive to be pioneers in cosmetic and general dentistry, setting new standards for precision,
                        artistry, and patient-centric care.
                    </p>
                    <h1 className='pt-4 mt-3 pb-3 text-color'>Meet Our Dental Artists</h1>
                    <p>
                        Our team at ASH Dental is a collective of skilled professionals, each bringing a unique set of expertise and passion to the practice.
                        We are not just dental professionals; we are artists dedicated to creating smiles that reflect the true beauty within each person.
                    </p>
                </div>
                <div className='card-padding'>
                    {teamMembers.map((member, index) => (
                        <div className='mb-5 pb-5 ps-5 pt-4 mt-4' key={index}>
                            <Card
                                name={member.displayName}
                                image={member.image}
                                bio={member.bio}
                                path={member.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                            />
                        </div>
                    ))}
                </div>
                <p>Our team of dental artists consists of experienced professionals,
                    each specializing in various aspects of dentistry, including cosmetic procedures, orthodontics,
                    endodontics, oral surgery, and general dentistry.
                </p>
                <section className='mt-5 pt-5 mb-5 pb-5 text-center' id="what-we-do">
                    <div className="container-fluid">
                        <div className='mb-3 pb-3 ps-3 pe-3' >
                            <div className="row mt-5">
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background" style={{ backgroundImage: `url(/Images/Background%202.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '95%', width: '100%' }}>
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color"><i class="fa-solid fa-compass-drafting me-4"></i>Patient-Centric Excellence:</h3>
                                            <p className="text-color">
                                                Your journey with ASH Dental is characterized by a patient-centric approach.
                                                We listen to your unique needs, concerns, and aspirations, tailoring our services to ensure a comfortable,
                                                positive, and transformative experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background" style={{ backgroundImage: `url(/Images/Background%202.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '95%', width: '100%' }}>
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color"><i class="fa-solid fa-wand-magic-sparkles me-3"></i>Innovation and Technology:</h3>
                                            <p>
                                                We embrace innovation and leverage cutting-edge technology to provide state-of-the-art dental solutions.
                                                From advanced diagnostic imaging to the latest in cosmetic dentistry techniques, we ensure that you receive the highest quality care.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background opac" style={{ backgroundImage: `url(/Images/ASH%20Dental%20Texture%20options.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '95%', width: '100%' }}>
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color"><i class="fa-solid fa-palette me-3"></i><strong>Dentistry as an Art Form:</strong></h3>
                                            <p><strong>
                                                We believe that dentistry is an art form. Each smile is a canvas,
                                                and our approach involves meticulous planning, personalized treatments,
                                                and a commitment to achieving results that go beyond expectations.
                                            </strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="card background opac" style={{ backgroundImage: `url(/Images/ASH%20Dental%20Texture%20options.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '95%', width: '100%' }}>
                                        <div className="card-block block-1">
                                            <h3 className="card-title text-color"><i class="fa-solid fa-pen-to-square me-3"></i><strong>Patient Education and Empowerment:</strong></h3>
                                            <p><strong>
                                                We believe that an informed patient is an empowered patient. Our team takes the time to explain procedures,
                                                discuss treatment options, and answer any questions you may have.
                                            </strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='pt-5 mt-5'>
                    <h3 className='text-color'>Meet the Team </h3>
                    <p>
                        Discover the diverse talents that come together to create a harmonious blend of precision, compassion, and excellence,
                        ensuring that your experience with us is not just a dental appointment but a transformative and positive journey toward optimal oral health and confidence.
                        Our dedicated team at ASH Dental extends beyond our dentists to include skilled professionals in various roles.
                        Each member plays a pivotal role in shaping the overall patient experience at our practice, contributing to the seamless and comfortable journey you undergo with us.
                    </p>
                    <br />
                    <div className='pt-4 mt-4'>
                        <button type="button" className="btn btn-bg btn-link" data-bs-toggle="modal" title='Documents' data-bs-target="#myModal">
                            Book an appointment
                        </button>
                        <div className="modal fade text-center" id="myModal" style={{ backgroundImage: `url(/Images/Background%202.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Schedule a Consultation</h4>
                                        <button type="button" className="btn-close btn btn-bg btn-link" data-bs-dismiss="modal" title='Close window'></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Please fill in the form below and we will get in contact as soon as possible to confirm your booking</p>
                                        <form className='text-color' ref={form} onSubmit={handleSubmit(sendEmail)}>
                                            <Form
                                                type={"text"}
                                                name={"user_fName"}
                                                place={"First Name..."}
                                            />
                                            <Form
                                                type={"text"}
                                                name={"user_lName"}
                                                place={"Last Name..."}
                                            />
                                            <Form
                                                type={"email"}
                                                name={"user_email"}
                                                place={"Your email address..."}
                                            />
                                            <Form
                                                type={"phone"}
                                                name={"user_phone"}
                                                place={"Your phone number..."}
                                            />
                                            <div className="mb-3 pt-0">
                                                <textarea name="message" placeholder="Your message"
                                                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                                ></textarea>
                                            </div>
                                            <br />
                                            <div className='row'>
                                                <p className='text-color'>
                                                    <MDBIcon icon="phone" className="me-3" />  (011) + 465 2718
                                                </p>
                                                <p className='text-color'>
                                                    <MDBIcon icon="phone" className="me-3" />  Emergency dental help: 062 408 5934
                                                </p>
                                                <p className='text-color'>
                                                    <MDBIcon icon="envelope" className="me-3" />
                                                    info@identicalteeth.co.za
                                                </p>
                                                <p >
                                                    <MDBIcon icon="envelope" className="me-3" />
                                                    dentist@identicalteeth.co.za
                                                </p>
                                            </div>
                                            <br />
                                            <div className="mb-3 pb-3 pt-0">
                                                <button disabled={isSubmitting} className="btn btn-bg btn-link">
                                                    {isSubmitting && (
                                                        <span className="spinner-grow spinner-grow-sm"></span>
                                                    )}
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <p className='pb-5 mb-5'>
                        Embark on a journey to rediscover your smile. Schedule a consultation with ASH Dental.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;