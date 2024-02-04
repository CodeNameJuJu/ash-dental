import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../Main.css';
import Carousel from 'react-bootstrap/Carousel';

/* Make components for the Gallery that will be in the App.js */

function Form({ type, name, place }) {
    return (
        <div className="mb-3 pt-0">
            <input
                type={type}
                name={name}
                placeholder={place}
                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
        </div>
    );
}

function Gallery() {
    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm('service_ny768nq', 'template_uwqtnpl', form.current, 'KpiSa53Nghfe0Zc2i')
            .then(
                (result) => {
                    alert('Message sent successfully...');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 4000);
        });
    };

    return (
        <div className="text-center">

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide" style={{ backgroundImage: `url(/Images/Background%202.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', overflow: 'hidden' }}>
                <div className='Car'>
                    <Carousel>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental images 2600 x 1600 px/1.png" text="First slide" alt='Sale1' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental images 2600 x 1600 px/7.png" text="First slide" alt='Sale2' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental images 2600 x 1600 px/8.png" text="First slide" alt='Sale3' />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/* Image Gallery */}
            <div className="row mt-5 pt-5">
                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 1</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Dental images 2600 x 1600 px/2.png" alt="Gallery 1" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Dental images 2600 x 1600 px/3.png" alt="Gallery 2" className="img-fluid" />
                </div>

                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 2</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/20.png" alt="Gallery 6" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/16.png" alt="Gallery 8" className="img-fluid" />
                </div>

                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 3</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Dental images 2600 x 1600 px/4.png" alt="Gallery 3" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Dental images 2600 x 1600 px/5.png" alt="Gallery 4" className="img-fluid" />
                </div>

                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 4</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/15.png" alt="Gallery 7" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/21.png" alt="Gallery 13" className="img-fluid" />
                </div>

                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 5</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/17.png" alt="Gallery 9" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/18.png" alt="Gallery 10" className="img-fluid" />
                </div>

                <div className="col-md-3 mb-4">
                    <h3 className="text-left">Image Section 6</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/19.png" alt="Gallery 11" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="/Images/Technology Page/14.png" alt="Gallery 12" className="img-fluid" />
                </div>
            </div>

            {/* Modal */}
            <div className="pb-5 mb-5">
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
        </div>
    );
}

export default Gallery;
