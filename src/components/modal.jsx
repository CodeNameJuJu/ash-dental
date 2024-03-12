import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'; // Import emailjs-com

function FormInput({ type, name, placeholder }) {
  return (
    <div className="mb-3 pt-0">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
}

function Modal({ showModal, closeModal }) {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm();
  const form = useRef(); // Ref for accessing the form

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
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog text-center modal-lg">
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
                  <FormInput type="text" name="user_fName" placeholder="First Name..." register={register} />
                  <FormInput type="text" name="user_lName" placeholder="Last Name..." register={register} />
                  <FormInput type="email" name="user_email" placeholder="Your email address..." register={register} />
                  <FormInput type="phone" name="user_phone" placeholder="Your phone number..." register={register} />
                  <div className="mb-3 pt-0">
                    <textarea
                      name="message"
                      placeholder="Your message"
                      className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      {...register('message')}
                    ></textarea>
                  </div>
                  <button disabled={isSubmitting} className="btn btn-bg btn-link">
                    {isSubmitting && <span className="spinner-grow spinner-grow-sm"></span>}
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
