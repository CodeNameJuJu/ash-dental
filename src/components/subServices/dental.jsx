import React from 'react';
import "../../Main.css";
import { Link, useLocation } from 'react-router-dom';


function Dental() {
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
            <nav class="navbar nav-bg navbar-expand-sm "> <button class="navbar-toggler" type="button" data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="sub-nav-item">
                            <Navigate name={'Teeth Whitening'} path={'/teethWhitening'} /> </li>
                        <li class="sub-nav-item"><Navigate name={'Crowns and Veneers'} path={'/crowns'} />  </li>
                        <li class="sub-nav-item"> <Navigate name={'Dental Implants'} path={'/dental'} />  </li>
                        <li class="sub-nav-item"><Navigate name={'Orthodontics'} path={'/orthodontics'} /> </li>
                        <li class="sub-nav-item"> <Navigate name={'General Dentistry'} path={'/generalDentistry'} />  </li>
                        <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            &nbsp;

            <div class="row serv-top">
                <div class=" col-7 text-center">
                    <h1 class="gold text-start">Dental Implants</h1>
                    <h3 class="brown  text-start">Journey to a Confident Smile</h3>
                    <br/>
                    <p class="lead text-start">Dental implants are more than just a procedure; they represent a transformative journey to restore
                    your confident smile.</p>
                        <br/>
                        <p class="lead text-start">Dental implants are innovative solutions to restore missing teeth. Implants work by securely
                        anchoring artificial teeth into the jaw, mimicking the natural structure for unparalleled stability and
                        aesthetics.Our dental professionals harness the latest advancements in dental implantology,
                        offering cutting-edge solutions tailored to each individual. From single-tooth implants to full-arch
                        rehabilitation, we employ state-of-the-art techniques and technologies, including 3D x-ray, 3D
                        printing and advanced diagnostic software, to ensure the utmost precision in every procedure. </p>
                        <br/>
                        <p class="lead text-start" >At
                            ASH Dental, dental implantology is not just a service; it&#39;s a dedication to providing you with a
                            permanent, natural-looking solution that enhances both your oral health and confidence.</p> 
                        <br/>
                        <p class="lead text-start gold" >Your journey to a radiant smile is marked by excellence, comfort, and results that redefine dental
                        care… because detail matters.</p> 
                        <br/>

                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/Dental/1.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>

            <br>
                
            </br>
        </div>
    )
}

export default Dental;