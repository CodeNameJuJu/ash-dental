import React from 'react';
import '../Main.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { routineCheckup, generalDentistry, cosmeticDentistry, orthodontic, implants } from '../data/treatmentData';

function ServiceNav({ name, path }) {
    return (

        <Link className="dropdown-item nav-link" to={`/services/${path}`} title={name}>
            {name}
        </Link>

    );
}

function Nav({ name, path }) {
    return (

        <Link className="footer-link nav-item" to={path} title={name}>
            {name};
        </Link>

    );
}

function Footer() {
    const routine = routineCheckup;
    const general = generalDentistry;
    const cosmetic = cosmeticDentistry;
    const ortho = orthodontic;
    const implant = implants;

    return (
        <div>
            <MDBFooter className='text-center text-lg-start text-muted bg-color'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block '>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='https://www.instagram.com/identicalteeth/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='https://www.youtube.com/@identicalteeth7682' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
                        </a>
                        <a href='https://www.google.com/search?q=identical+teeth&rlz=1C1GCEU_enZA1005ZA1005&oq=identical+teeth&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCggGEAAYDxgWGB4yCggHEAAYhgMYigUyCggIEAAYhgMYigUyCggJEAAYhgMYigXSAQkzMzg5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 justify-content-center'>
                            <MDBCol md="2" lg="2" xl="2" className='mb-4'>
                                <a className="footer-link nav-item" href="/specials">  SPECIALS  </a>
                            </MDBCol>
                            <MDBCol md="2" lg="2" xl="2" className='mb-4 '>
                                <div className="nav-item dropdown" id="myDropdown">

                                    <a className="footer-link nav-item dropdown-toggle" href="/" data-bs-toggle="dropdown">  Treatments  </a>
                                    <ul className="dropdown-menu">
                                        <li> <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"> Routine Checkup  </a>
                                            <ul className="submenu dropdown-menu">
                                                {routine.map((rout, index) => (
                                                    <ServiceNav
                                                        key={index}
                                                        name={rout.displayName}
                                                        path={rout.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                        <li> <a className=" footer-link nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"> Cosmetic dentistry </a>
                                            <ul className="submenu dropdown-menu">
                                                {general.map((gen, index) => (
                                                    <ServiceNav
                                                        key={index}
                                                        name={gen.displayName}
                                                        path={gen.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                        <li> <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"> General dentistry  </a>
                                            <ul className="submenu dropdown-menu">
                                                {cosmetic.map((cos, index) => (
                                                    <ServiceNav
                                                        key={index}
                                                        name={cos.displayName}
                                                        path={cos.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                        <li> <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown"> Orthodontic </a>
                                            <ul className="submenu dropdown-menu">
                                                {ortho.map((ortho, index) => (
                                                    <ServiceNav
                                                        key={index}
                                                        name={ortho.displayName}
                                                        path={ortho.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                        <li> <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" >Implants  </a>
                                            <ul className="submenu dropdown-menu">
                                                {implant.map((imp, index) => (
                                                    <ServiceNav
                                                        key={index}
                                                        name={imp.displayName}
                                                        path={imp.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                            </MDBCol>
                            <MDBCol md="2" lg="2" xl="2" className='mb-4'>
                                <Nav
                                    name={'BLOGS'}
                                    path={'/blog'}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>OPERATING HOURS</h6>
                                <li> Mon: 7:30am – 5pm </li>
                                <li> Tue: 7:30am – 5pm</li>
                                <li> Wed: 7:30am – 5pm</li>
                                <li> Thu: 7:30am – 5pm</li>
                                <li> Fri: 7:30am – 5pm</li>
                                <li> Sat: 9:00am – 1pm</li>
                            </MDBCol>
                            <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-4'>
                                <div>
                                    <h6 className='text-center fw-bold mb-4'>LOCATION</h6>
                                    <iframe title='ITLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.098864250687!2d28.18284007540274!3d-25.833287377307148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95657a4c6e0441%3A0xb4df28d0e43cd7b4!2siDentical%20Teeth%20.!5e0!3m2!1sen!2sza!4v1696350178468!5m2!1sen!2sza"
                                        width="100%" height="100%" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    <a href='https://www.google.com/maps/place/iDentical+Teeth+./@-25.8332825,28.1828401,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95657a4c6e0441:0xb4df28d0e43cd7b4!8m2!3d-25.8332874!4d28.185415!16s%2Fg%2F11hyyg8vjl?entry=ttu' target="_blank" rel="noopener noreferrer" title='Address Link'>Suite 1B Centurion Day Hospital 192A Glover Ave Lyttelton Centurion</a>
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    <a href='mailto:info@identicalteeth.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>info@identicalteeth.co.za</a>
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    <a href='mailto:dentist@identicalteeth.co.za' target="_blank" rel="noopener noreferrer" title='Email Link'>dentist@identicalteeth.co.za</a>
                                </p>

                                <p>
                                    <MDBIcon icon="phone" className="me-3" />  
                                    <a href='tel:0114652718' target="_blank" rel="noopener noreferrer" title='Phone Link'>(011) + 465 2718</a>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" />
                                    <a href='tel:0624085934' target="_blank" rel="noopener noreferrer" title='Phone Link'>Emergency dental help: 062 408 5934</a>
                                </p>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:&nbsp;
                    <p className='text-reset fw-bold'>
                        Identical Teeth
                    </p>
                </div>
            </MDBFooter>

        </div>
    )
}

export default Footer;