import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import '../Main.css';
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

export const Contact = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const form = useRef();

  const sendEmail = async (formData) => {
    try {
      const response = await emailjs.sendForm(
        'service_po12fdq', // Replace with your EmailJS service ID
        'template_k1eb8wu', // Replace with your EmailJS template ID
        form.current, // Reference to the form
        'vOMrbftS0la3Ph2pI' // Replace with your EmailJS user ID
      );
      console.log('Email sent:', response);
      alert('Message sent successfully');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again later.');
    }


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  };

  return (
    <div className="container text-start pb-4 mb-4">
      <div className="pb-4 mb-4">
        <br />
        <br />
        <h1 className="header-col text-center">Contact Us – Conveniently Located in the Heart of Pretoria East</h1>
        <br />
        <br />
        <p className="pb-3 mb-3 lead">
          ASH Dental is strategically located in the heart of Pretoria East, offering easy access to
          patients from surrounding areas like Brooklyn, Lynnwood, Menlo Park, Faerie Glen,
          Garsfontein, and Moreleta Park. Our practice is just a few minutes' drive from these key
          neighbourhoods, making it an ideal choice for both routine dental care and urgent
          treatments.
        </p>
        <p className="pb-3 mb-3 lead">
          We are also conveniently close to major landmarks, businesses, and shopping destinations,
          including:
        </p>
        <ul className="pb-3 mb-3 lead">
          <li>
            1.0 km from the Protea Hotel Fire and Ice
          </li>
          <li>
            1.3 km from Menlyn Park Shopping Centre
          </li>
          <li>
            1.9 km from Time Square Casino
          </li>
          <li>
            2.1 km from Menlyn Maine Central Square
          </li>
          <li>
            3.4 km from the Pretoria Country Club
          </li>
        </ul>
        <p className="pb-3 mb-3 lead">
          Whether you’re staying nearby or working in the area, ASH Dental provides accessible, top-
          quality dental services for your convenience. From general dentistry to cosmetic treatments,
          our team is here to serve all your dental needs.
        </p>
        <p className="pb-3 mb-3 lead">
          Feel free to reach out to us. Whether you have inquiries about our services, want to
          schedule an appointment, or simply have a question, we are here to assist you on your
          dental journey.
        </p>
        <div className="row">
          <div className="mb-3 text-start col-md-4">
            <h3 className="text-color-gold mb-2 pb-2">Address:</h3>
            <p className="lead">ASH DENTAL</p>
            <p className="lead">Ash Medical Suites 3 & 4</p>
            <p className="lead">177 Garsfontein Road,</p>
            <p className="lead">Ashlea Garden,</p>
            <p className="lead">Pretoria East, Gauteng</p>
          </div>
          <div className="mb-3 text-start col-md-4 lead">
            <h3 className="text-color-gold mb-2 pb-2">Contact Details:</h3>
            <p className="text-color mb-1">
              <MDBIcon icon="phone" className="me-3" />
              <a class="a2 text-color " href='tel:012 111 1715' target="_blank" rel="noopener noreferrer" title='Phone Link'>(012) 111 1715</a>
            </p>
            <p className="text-color mb-1">
              <MDBIcon icon="phone" className="me-3" />
              <a class="a2 text-color " href='tel:084 850 3501' target="_blank" rel="noopener noreferrer" title='Phone Link'>084 850 3501 </a>
            </p>
            <p className="mb-0">
              <MDBIcon icon="envelope" className="me-3" />
              <a class="a2 text-color " href='mailto:info@ashdental.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>info@ashdental.co.za</a>
            </p>
          </div>
          <div className="mb-3 col-md-4 text-start">
            <h3 className="text-color-gold mb-2 pb-2">Emergency Contact Details:</h3>
            <p className="lead">For 24 hour dental emergencies, our dedicated emergency dental care team is available outside regular dental office hours to assist you.</p>
            <p className="lead mt-2 pt-2">
              <MDBIcon icon="phone" className="me-3" />
              <a class="a2 text-color " href='tel:084 850 3501' target="_blank" rel="noopener noreferrer" title='Phone Link'>084 850 3501 </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-4 mt-4">
        <div className="col-sm-12 col-md-6">
          <h3 className="header-col mb-2 pb-2">Please Fill in the Form Below:</h3>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <Form type={"text"} name={"user_fName"} place={"First Name..."} />
            <Form type={"text"} name={"user_lName"} place={"Last Name..."} />
            <Form type={"email"} name={"user_email"} place={"Your email address..."} />
            <Form type={"tel"} name={"user_phone"} place={"Your phone number..."} />
            <div className="mb-3 pt-0">
              <textarea
                name="message"
                placeholder="Your message"
                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              ></textarea>
            </div>
            <br />
            <div className="mb-3 pb-3 pt-0">
              <button disabled={isSubmitting} className="btn btn-bg btn-link">
                {isSubmitting && <span className="spinner-grow spinner-grow-sm"></span>}
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6">
          <h3 className="header-col pb-2 mb-2">Where to Find Us:</h3>
          <iframe
            title="Ash Dental"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.1416288215023!2d28.265524069631322!3d-25.784875491007618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560c2eb5dd5f7%3A0x36a72d55cee4ae8f!2s177%20Garsfontein%20Rd%2C%20Ashlea%20Gardens%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1707677504814!5m2!1sen!2sza"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="pt-2 mt-2 lead">
            Here's a map to help you locate our dental practice. Feel free to use the interactive map to get directions.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;

// ******************************************************************* EOF ******************************************************************************
