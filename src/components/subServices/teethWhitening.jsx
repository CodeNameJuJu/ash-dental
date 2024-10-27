import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

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
            <hr ></hr>
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
                        <li className="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            &nbsp;
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <h1 className="gold text-start">Unveil a whiter, brighter smile with our tailored teeth whitening treatment</h1>
                    <br />
                    <p className="lead text-start">Our Teeth Whitening services at ASH Dental are a blend of artistry and science, designed to
                        bring out the true brilliance of your smile. We understand that a radiant smile is more than
                        just an aesthetic feature; it’s a personal expression. Each teeth whitening journey starts with
                        a personalized treatment plan that caters to your unique dental needs and preferences.
                    </p>
                    <br />
                    <p className="lead text-start">
                        Our experienced dental professionals combine artistry with precision to achieve stunning yet
                        natural-looking results. Using advanced technology and safe whitening agents, we
                        effectively remove stains and discoloration while prioritizing your dental health and comfort.
                    </p>
                    <br />
                    <p className="lead text-start" >With a commitment to delivering enduring and beautiful results, we utilize the latest
                        whitening techniques to enhance your smile.
                    </p>
                    <br />
                    <p className="lead text-start">Illuminate your unique radiance by scheduling a consultation with us at ASH Dental and
                        experience the art of expert teeth whitening.
                    </p>
                    <br />
                    <h2 className="gold text-start">What is teeth whitening and what are the benefits?</h2>
                    <br />
                    <p className="lead text-start">
                        Teeth whitening is a cosmetic dental procedure designed to lighten the colour of your teeth
                        and remove stains and discoloration. It involves using safe, effective whitening agents to
                        break down and eliminate stains caused by factors like coffee, tea, red wine, tobacco, and
                        aging. The procedure takes place in our comfortable dental chair, where you can relax and
                        enjoy your favourite movie or series on our ceiling-mounted TV.
                    </p>
                    <br />
                    <p className="lead text-start">
                        The benefits of teeth whitening extend beyond just an enhanced appearance. A brighter
                        smile can boost your confidence and self-esteem, making you feel more comfortable in
                        social and professional settings. Additionally, a whiter smile can make you look younger and
                        more vibrant. At ASH Dental, our expert teeth whitening treatments not only help you
                        achieve a radiant smile but also contribute to improved overall dental health by removing
                        surface stains that can potentially lead to more significant oral health issues.
                    </p>
                    <br />
                </div>
                <img className='col-md-4 col-sm-12 pt-5 mt-5 mb-md-0 mb-3' src="/Images/ServicesLandscape/TW1.webp" alt="Teeth whitening" style={{ height: '100%' }} />
            </div>
            &nbsp;
        </div>
    )
}

export default TeethWhitening;

// ******************************************************************* EOF ******************************************************************************