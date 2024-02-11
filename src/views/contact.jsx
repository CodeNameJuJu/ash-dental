import React, { useRef } from 'react';
import { useForm } from 'react-hook-form'
import '../Main.css';
import emailjs from '@emailjs/browser';

/* Maak components vir die contact page wat die contact form en google Iframe gaan wees */

function Form({ type, name, place }) {
    return (

        <div className="mb-3 pt-0">
            <input type={type} name={name} placeholder={place}
                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
        </div>

    );
}

export const Contact = () => {

    // logic function to send emails to emailJS

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

        //contact form 
        <div className='container text-center pb-4 mb-4'>
            <div>
                <br />
                <br />
                <h1 className='header-col'>Get in touch!</h1>
                <br />
                <br />
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <h3 className='header-col'>Please fill in the form below:</h3>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
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
                <div className='col-sm-6'>
                    <h3 className='header-col'>Where to find us:</h3>
                    <iframe title="Ash Dental" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.1416288215023!2d28.265524069631322!3d-25.784875491007618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560c2eb5dd5f7%3A0x36a72d55cee4ae8f!2s177%20Garsfontein%20Rd%2C%20Ashlea%20Gardens%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1707677504814!5m2!1sen!2sza" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>

    );


}

export default Contact;