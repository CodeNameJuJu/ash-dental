import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { MDBIcon } from 'mdb-react-ui-kit';

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

function Modal({ showModal, closeModal }) {
    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm('service_ny768nq', 'template_fdsdj05', form.current, 'KpiSa53Nghfe0Zc2i')
            .then(
                (result) => {
                    alert('message sent successfully...');
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
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog text-center modal-lg" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-color-gold">Book an Appointment</h4>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body bg-modal">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Please fill in the form below, and we will get in contact as soon as possible to confirm your booking</p>
                                <form className="text-color" ref={form} onSubmit={handleSubmit(sendEmail)}>
                                    <Form type={"text"} name={"user_fName"} place={"First Name..."} />
                                    <Form type={"text"} name={"user_lName"} place={"Last Name..."} />
                                    <Form type={"email"} name={"user_email"} place={"Your email address..."} />
                                    <Form type={"phone"} name={"user_phone"} place={"Your phone number..."} />
                                    <div className="mb-3 pt-0">
                                        <textarea
                                            name="message"
                                            placeholder="Your message"
                                            className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <br />
                                <br />
                                <br />
                                <div className="row">
                                    <div className="mb-3 text-start">
                                        <p className="text-color mb-1">
                                            <MDBIcon icon="phone" className="me-3" /> (012) 111 1715
                                        </p>
                                        <br />
                                        <p className="text-color mb-1">
                                            <MDBIcon icon="phone" className="me-3" /> 084 850 3501
                                        </p>
                                        <br />
                                        <p className="text-color mb-1">
                                            <MDBIcon icon="envelope" className="me-3" />
                                            info@ashdental.co.za
                                        </p>
                                        <br />
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div className="mb-3 pb-3 pt-0">
                                    <button disabled={isSubmitting} className="btn btn-bg btn-link">
                                        {isSubmitting && <span className="spinner-grow spinner-grow-sm"></span>}
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

// ******************************************************************* EOF ******************************************************************************
