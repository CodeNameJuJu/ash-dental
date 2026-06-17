import React from 'react';
import '../Main.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-modern">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-heading">ASH Dental</h5>
                        <p className="footer-text">Luxury dentistry in Pretoria East. Where transformative smiles begin.</p>
                        <div className="footer-socials">
                            <Link to="https://www.facebook.com/profile.php?id=61556083561310" title="Facebook" className="footer-social-link">
                                <MDBIcon fab icon="facebook-f" />
                            </Link>
                            <Link to="https://www.instagram.com/ashdental_pretoria/" title="Instagram" className="footer-social-link">
                                <MDBIcon fab icon="instagram" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-4">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links">
                            <li><Link to="/" title="Home">Home</Link></li>
                            <li><Link to="/services" title="Services">Services</Link></li>
                            <li><Link to="/about" title="About Us">About Us</Link></li>
                            <li><Link to="/technology" title="Technology">Technology</Link></li>
                            <li><Link to="/gallery" title="Gallery">Gallery</Link></li>
                            <li><Link to="/contact" title="Contact Us">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-heading">Trading Hours</h5>
                        <ul className="footer-hours">
                            <li><span>Mon – Fri</span><span>8:00 – 17:00</span></li>
                            <li><span>Saturday</span><span>9:00 – 12:00</span></li>
                            <li><span>Sunday</span><span>Closed</span></li>
                            <li><span>Public Holidays</span><span>Closed</span></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6 mb-4">
                        <h5 className="footer-heading">Contact</h5>
                        <ul className="footer-contact">
                            <li>
                                <MDBIcon icon="map-marker-alt" className="me-2" />
                                <Link to="https://www.google.com/maps/dir//ASH+Dental,+Suite+3%264,+Ash+Medical+Suite,+177+Garsfontein+Rd,+Ashlea+Gardens,+Pretoria,+0081" title="Directions">
                                    Ash Medical Suites 3&4, 177 Garsfontein Rd, Ashlea Gardens, Pretoria
                                </Link>
                            </li>
                            <li>
                                <MDBIcon icon="envelope" className="me-2" />
                                <a href="mailto:info@ashdental.co.za" title="Email">info@ashdental.co.za</a>
                            </li>
                            <li>
                                <MDBIcon icon="phone" className="me-2" />
                                <a href="tel:0121111715" title="Phone">(012) 111 1715</a>
                            </li>
                            <li>
                                <MDBIcon icon="phone" className="me-2" />
                                <a href="tel:0848503501" title="Phone">084 850 3501</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ASH Dental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
