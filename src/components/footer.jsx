import React from 'react';
import '../Main.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation } from 'react-router-dom';

function Footer() {

    return (
        <div style={{ backgroundImage: `url(/Images/Texture2.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 1 }}>
            <div class="footer-bg" style={{ opacity: 0.8 }} >
                <MDBFooter className='text-center text-lg-start text-muted '>
                    <section class="">
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/" title="Home">
                                            Home
                                        </Link></ul>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/services" title="Services">
                                            Services
                                        </Link></ul>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/about" title="About Us">
                                            About Us
                                        </Link></ul>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/technology" title="Technology">
                                            Technology
                                        </Link></ul>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/gallery" title="Gallery">
                                            Gallery
                                        </Link></ul>
                                    <br></br>
                                    <ul>
                                        <Link class="a2" to="/contact" title="Contact Us">
                                            Contact Us
                                        </Link></ul>
                                </MDBCol>
                                <MDBCol md="3" lg="2" xl="2.5" className='mx-auto mb-4'>
                                    <br></br>
                                    <h6 class="white"> Trading Hours</h6>
                                    <br></br>
                                    <ul class="white"> Mon- Fri: 8:00 – 17:00 </ul>
                                    <br></br>
                                    <ul class="white"> Saturday: 9:00 – 12:00</ul>
                                    <br></br>
                                    <ul class="white"> Sunday: Closed </ul>
                                    <br></br>
                                    <ul class="white">Public Holidays: Closed </ul>
                                    <div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <br></br>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                    <p >
                                        <MDBIcon icon="home" className="me-2 white" />
                                        Ash Dental, Suite 3&4,
                                    </p>
                                    </Link>

                                 
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                    <p >
                                        <MDBIcon className="me-4 white " />
                                        Ash Medical Suites 177,
                                    </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                    <p >
                                        <MDBIcon className="me-4 white " />
                                        Garsfontein  Road
                                    </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                    <p >
                                        <MDBIcon className="me-4 white " />
                                        Ashlea Gardens,
                                    </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                    <p >
                                        <MDBIcon className="me-4 white " />
                                        Pretoria 0081
                                    </p>
                                    </Link>
                                    <br></br>
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3 white" />
                                        <a class="a2" href='mailto:info@ashdental.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>info@ashdental.co.za</a>
                                    </p>

                                    <p>
                                        <MDBIcon icon="phone" className="me-3 white" />
                                        <a class="a2" href='tel:084 850 3501' target="_blank" rel="noopener noreferrer" title='Phone Link'>084 850 3501</a>
                                    </p>

                                    <p>
                                        <MDBIcon icon="phone" className="me-3 white" />
                                        <a class="a2" href='tel:012 111 1715' target="_blank" rel="noopener noreferrer" title='Phone Link'>012 111 1715</a>
                                    </p>
                                </MDBCol>
                                <MDBCol md="2" lg="2" xl="2" className='mb-4 mt-3' style={{ 'text-align': 'center' }}>
                                    <div>
                                    <Link to="https://www.facebook.com/profile.php?id=61556083561310" style={{ 'font-size': '25px', 'padding-right': '10px', 'text-align': 'center' }} 
                                        className='me-4 text-reset white'>
                                    
                                    <MDBIcon fab icon="facebook-f" />
                                    </Link>
                                    <Link to="https://www.instagram.com/ashdental_pretoria/" style={{ 'font-size': '25px', 'padding-right': '10px', 'text-align': 'center' }} 
                                        className='me-4 text-reset white'>
                                    
                                    <MDBIcon fab icon="instagram" />
                                    </Link>


                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <div className='text-center p-4' >
                                © 2024 Copyright:&nbsp;
                                <p className='text-reset fw-bold'>
                                    Ash Dental
                                </p>
                            </div>
                        </MDBContainer>
                    </section>
                </MDBFooter>
            </div>
        </div>
    )
}

export default Footer;

// ******************************************************************* EOF ******************************************************************************
