import React from 'react';
import '../Main.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div>
            <div class="footer-bg">
                <MDBFooter className='text-center text-lg-start text-muted '>
                    <section>
                        <MDBContainer className='mt-5 mobal'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="3" xl="3" className='mt-3' style={{ 'text-align': 'center' }}>
                                    <figure>
                                        <img className="img-fluid mt-5" src="/Images/primary logo/Ash Dental logo-02.webp" alt="Ash Dental Logo" />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="3" lg="2" xl="2" className='mx-auto'>
                                <h6 class="white mt-5"> Nav</h6>
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
                                <MDBCol md="3" lg="2" xl="2" className='mx-auto'>
                                    <br></br>
                                    <h6 class="white mt-2"> Trading Hours</h6>
                                    <ul class="white mobmarg"> Mon- Fri: 8:00 – 17:00 </ul>
                                    <ul class="white mobmarg"> Saturday: 9:00 – 12:00</ul>
                                    <ul class="white mobmarg"> Sunday: Closed </ul>
                                    <ul class="white mobmarg">Public Holidays: Closed </ul>
                                    <div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3" className='mx-auto'>
                                    <br></br>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon icon="home" className="me-2 white fadeIn-animation" />
                                            ASH DENTAL
                                        </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon className="me-2 white fadeIn-animation" />
                                            Ash Medical Suites 3&4
                                        </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon className="me-2 white fadeIn-animation" />
                                            177 Garsfontein Road
                                        </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon className="me-2 white fadeIn-animation" />
                                            Ashlea Gardens
                                        </p>
                                    </Link>
                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon className="me-2 white  fadeIn-animation" />
                                            Pretoria 0081
                                        </p>
                                    </Link>

                                    <Link className="a2" to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1e956185bb6bd329:0x151fc757078a76f1?sa=X&ved=2ahUKEwiT3_-YpOeEAxXEgv0HHUiWDJIQ9Rd6BAg3EAA" title='Address Link'>
                                        <p >
                                            <MDBIcon icon="link" className="me-2 white pt-1 fadeIn-animation" />
                                            Click Here For Directions
                                        </p>
                                    </Link>
                                    <br></br>
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3 white fadeIn-animation" />
                                        <a class="a2" href='mailto:info@ashdental.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>info@ashdental.co.za</a>
                                    </p>

                                    <p>
                                        <MDBIcon icon="phone" className="me-3 white pt-2 fadeIn-animation" />
                                        <a class="a2" href='tel: 012 111 1715' target="_blank" rel="noopener noreferrer" title='Phone Link'>(012) 111 1715</a>
                                    </p>

                                    <p>
                                        <MDBIcon icon="phone" className="me-3 white pt-2 fadeIn-animation" />
                                        <a class="a2" href='tel:084 850 3501' target="_blank" rel="noopener noreferrer" title='Phone Link'>084 850 3501 </a>
                                    </p>
                                    <div className='mt-3'>
                                        <Link to="https://www.facebook.com/profile.php?id=61556083561310" style={{ 'font-size': '25px', 'padding-right': '10px', 'text-align': 'center' }}
                                            className='me-4 text-reset white'>

                                            <MDBIcon fab icon="facebook-f fadeIn-animation" />
                                        </Link>
                                        <Link to="https://www.instagram.com/ashdental_pretoria/" style={{ 'font-size': '25px', 'padding-right': '10px', 'text-align': 'center' }}
                                            className='me-4 text-reset white'>

                                            <MDBIcon fab icon="instagram fadeIn-animation" />
                                        </Link>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <div className='text-center pt-4' >
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
