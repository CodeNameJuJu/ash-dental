import '../Main.css';
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routineCheckup, generalDentistry, cosmeticDentistry, orthodontic, implants } from '../data/treatmentData';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { MDBIcon } from 'mdb-react-ui-kit';

function Navigate({ name, path }) {
    return (

        <Link className="nav-item nav-link" to={path} title={name}>
            {name}
        </Link>

    );
}

function ServiceNav({ name, path }) {
    return (

        <li>
            <Link className="dropdown-item nav-link" to={`/services/${path}`} title={name}>
                {name}
            </Link>
        </li>

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

function Navbar() {

    const location = useLocation();

    useEffect(() => {
        const navbar = document.getElementById('navbarSupportedContent');
        if (navbar) {
            navbar.classList.remove('show');
        }
    }, [location]);
    const { handleSubmit, formState } = useForm()
    const { isSubmitting } = formState

    // logic function to send emails to emailJS

    const form = useRef();

    const sendEmail = () => {

        emailjs.sendForm('service_ny768nq', 'template_fdsdj05', form.current, 'KpiSa53Nghfe0Zc2i')
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
        <nav className="navbar navbar-light bg-color navbar-expand-lg  sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand nav-link shine" to="/" title='Identical Teeth'>
                    Ash Dental
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Home'}
                                path={'/'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'About Us'}
                                path={'/about'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Services'}
                                path={'/services'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'About'}
                                path={'/about'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Technology'}
                                path={'/technology'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Smile Gallery'}
                                path={'/gallery'}
                            />
                        </li>
                        <li className="nav-item nav-hover">
                            <Navigate
                                name={'Contact'}
                                path={'/contact'}
                            />
                        </li>
                    </ul>
                </div>
                <div className='pt-4 mt-4'>
                        <button type="button" className="btn btn-bg btn-link" data-bs-toggle="modal" title='Documents' data-bs-target="#myModal">
                            Book an appointment
                        </button>
                        <div className="modal text-center" id="myModal">
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
            </div >
            
        </nav >
        

    )
}

export default Navbar;