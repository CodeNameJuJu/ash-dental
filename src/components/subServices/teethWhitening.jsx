import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';
import CdnImage from '../cdnImage';

function TeethWhitening() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
    }
    function Navigate({ name, path }) {
        return (
            <Link className="nav-item nav-link" to={path} title={name}>
                {name}
            </Link>
        );
    }
    return (
        <div>
            <nav className=" navbar nav-bg navbar-expand-sm navbar-second">
                <button
                    className="navbar-toggler hide-mob"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <i className="fa fa-bars" style={{ 'font-size': '25px' }}></i>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="sub-nav-item">
                            <Navigate name={'Teeth Whitening'} path={'/teethWhitening'} /> </li>
                        <li className="sub-nav-item"><Navigate name={'Crowns and Veneers'} path={'/crowns'} />  </li>
                        <li className="sub-nav-item"> <Navigate name={'Dental Implants'} path={'/dental'} />  </li>
                        <li className="sub-nav-item"><Navigate name={'Orthodontics'} path={'/orthodontics'} /> </li>
                        <li className="sub-nav-item"> <Navigate name={'General Dentistry'} path={'/generalDentistry'} />  </li>
                        <li className="sub-nav-item"> <Navigate name={'Facial Aesthetics'} path={'/FacialAesthetics'} /> </li>
                        <li className="sub-nav-item"> <Navigate name={'Skin, Health & Beauty'} path={'/skinHealthBeauty'} /> </li>
                        <li className="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            &nbsp;
            <div className='row top-pad'>
                <div className='col-md-8 col-sm-12'>
                        <h1 className="gold text-start">Teeth Whitening</h1>
                        <h3 className="brown text-start ">Illuminate Your Radiance</h3>
                    <br />
                    <p className="lead text-start">Our Teeth Whitening services are a symphony of artistry and science, meticulously designed to
                        unveil the true brilliance of your smile. We believe that a radiant smile is a personal expression, and
                        our approach goes beyond mere aesthetics. Each Teeth Whitening journey begins with a
                        personalized treatment plan, acknowledging your unique dental needs and preferences. Our
                        experienced dental professionals blend artistry with precision, ensuring stunning yet natural-looking
                        results.</p>
                    <br />
                    <p className="lead text-start">Leveraging advanced technology and safe whitening agents, our procedures are crafted to remove
                        stains and discoloration effectively, prioritizing your dental health and comfort.</p>
                    <br />
                    <p className="lead text-start" >Our commitment to enduring and beautiful results, combined with the latest in whitening
                        technology.</p>
                    <br />
                    <p className="lead text-start">Illuminate your unique radiance by scheduling a consultation and discovering the art of Teeth
                        Whitening at ASH Dental.</p>
                    <br />
                </div>
                <CdnImage className='col-md-4 col-sm-12 mb-md-0 mb-3 img-text-spacing' src="https://ik.imagekit.io/siftan/Images/ServicesLandscape/TW1.webp" alt="Teeth whitening" loading="lazy" style={{ height: '100%' }} />
            </div>
            &nbsp;



        </div>
    )
}

export default TeethWhitening;