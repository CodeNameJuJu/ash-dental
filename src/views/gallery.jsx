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
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/1.png" text="First slide" alt='Sale1' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/7.png" text="First slide" alt='Sale2' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/8.png" text="First slide" alt='Sale3' />
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
            <div className="container mt-4 pt-4 mb-4 pb-4">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x200" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x400" className="img-fluid" alt="Placeholder" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <img src="https://via.placeholder.com/600x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Placeholder" />
                            </div>
                            <div className="col-md-6 mb-2">
                                <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Placeholder" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Placeholder" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x400" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x500" className="img-fluid" alt="Placeholder" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
