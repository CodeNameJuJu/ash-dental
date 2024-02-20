import React from 'react';
import '../Main.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {

    return (
        
        
        <div style={{ backgroundImage: `url(/Images/Texture2.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 1 }}>
        <div class="footer-bg"style={{ opacity:0.8 }} >
            <MDBFooter className='text-center text-lg-start text-muted '>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                </section>
                <section class="">
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 justify-content-center'>

                            {/* <MDBCol md="2" lg="2" xl="2" className='mb-4'>
                                <div>
                                    <a href='https://www.facebook.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset white' style={{'font-size': '40px'}}>
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                    <a href='https://www.instagram.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset white' style={{'font-size': '40px'}}>
                                        <MDBIcon fab icon="instagram" />
                                    </a>

                                </div>
                            </MDBCol> */}
                        </MDBRow>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase heading fw-bold mb-4 white'>Continue Journey?</h6>
                                <br></br>
                                <ul> <a href='#' target="_blank" rel="noopener noreferrer" title='Page Link' class="a2">Home</a></ul>
                                <br></br>
                                <ul> <a href='#' target="_blank" rel="noopener noreferrer" title='Page Link' class="a2">About Us</a></ul>
                                <br></br>
                                <ul><a href='#' target="_blank" rel="noopener noreferrer" title='Page Link' class="a2">Services</a></ul>
                                <br></br>
                                <ul> <a href='#' target="_blank" rel="noopener noreferrer" title='Page Link' class="a2">Smile Gallery</a></ul>
                                <br></br>
                                <ul> <a href='#' target="_blank" rel="noopener noreferrer" title='Page Link' class="a2">Contact</a></ul>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2.5" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 white'>
                                    OPERATING HOURS</h6>
                                <br></br>
                                <ul class="white"> Mon- Fri: 7:30 – 5pm </ul>
                                <br></br>
                                <ul class="white"> Saturday: 8:30 – 1pm</ul>
                                <br></br>
                                <ul class="white"> Sun & Public Hol: Closed </ul>
                                <br></br>
                                <div>
                                    <h3 class="white"> Follow Us On</h3>
                                    <a href='https://www.facebook.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset white' style={{ 'font-size': '40px' }}>
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                    <a href='https://www.instagram.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset white' style={{ 'font-size': '40px' }}>
                                        <MDBIcon fab icon="instagram" />
                                    </a>

                                </div>
                            </MDBCol>

                            {/* <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-4'>

                            </MDBCol> */}

                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 white '>Contact Us</h6>
                                <br></br>
                                <p>
                                    <MDBIcon icon="home" className="me-2 white" />
                                    <a class="a2" href='https://www.google.com/maps/place/iDentical+Teeth+./@-25.8332825,28.1828401,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95657a4c6e0441:0xb4df28d0e43cd7b4!8m2!3d-25.8332874!4d28.185415!16s%2Fg%2F11hyyg8vjl?entry=ttu' target="_blank" rel="noopener noreferrer" title='Address Link'>
                                        Ash Dental, Suite 3&4,   </a>
                                </p>

                                <p>
                                    <MDBIcon className="me-4 white" />
                                    <a class="a2" href='https://www.google.com/maps/place/iDentical+Teeth+./@-25.8332825,28.1828401,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95657a4c6e0441:0xb4df28d0e43cd7b4!8m2!3d-25.8332874!4d28.185415!16s%2Fg%2F11hyyg8vjl?entry=ttu' target="_blank" rel="noopener noreferrer" title='Address Link'>
                                        Ash Medical Suites 177 </a>
                                </p>
                                <p>
                                    <MDBIcon className="me-4 white" />
                                    <a class="a2" href='https://www.google.com/maps/place/iDentical+Teeth+./@-25.8332825,28.1828401,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95657a4c6e0441:0xb4df28d0e43cd7b4!8m2!3d-25.8332874!4d28.185415!16s%2Fg%2F11hyyg8vjl?entry=ttu' target="_blank" rel="noopener noreferrer" title='Address Link'>
                                        Garsfontein  Road </a>
                                </p>
                                <p>
                                    <MDBIcon className="me-4 white" />
                                    <a class="a2" href='https://www.google.com/maps/place/iDentical+Teeth+./@-25.8332825,28.1828401,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95657a4c6e0441:0xb4df28d0e43cd7b4!8m2!3d-25.8332874!4d28.185415!16s%2Fg%2F11hyyg8vjl?entry=ttu' target="_blank" rel="noopener noreferrer" title='Address Link'>
                                        Ashlea Gardens, Pretoria 0081</a>
                                </p>
                                <br></br>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3 white" />
                                    <a class="a2" href='mailto:info@identicalteeth.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>info@ashdental.co.za</a>
                                </p>
                                <br></br>

                                <p>
                                    <MDBIcon icon="phone" className="me-3 white" />
                                    <a class="a2" href='tel:084 850 3501' target="_blank" rel="noopener noreferrer" title='Phone Link'>084 850 3501</a>
                                </p>

                                <p>
                                    <MDBIcon icon="phone" className="me-3 white" />
                                    <a class="a2" href='tel:012 111 1715' target="_blank" rel="noopener noreferrer" title='Phone Link'>012 111 1715</a>
                                </p>
                            </MDBCol>

                        </MDBRow>
                        {/* <div className='text-center p-4' >
                            © 2024 Copyright:&nbsp;
                            <p className='text-reset fw-bold'>
                                Ash Dental
                            </p>
                        </div> */}
                    </MDBContainer>
                </section>


            </MDBFooter>
            </div>                
        </div>
    )
}

export default Footer;

// <div>
// <h6 className='text-center fw-bold mb-4'>LOCATION</h6>
// <iframe title='ITLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.098864250687!2d28.18284007540274!3d-25.833287377307148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95657a4c6e0441%3A0xb4df28d0e43cd7b4!2siDentical%20Teeth%20.!5e0!3m2!1sen!2sza!4v1696350178468!5m2!1sen!2sza"
//     width="100%" height="100%" allowFullScreen="" loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade">
// </iframe>
// </div>