import React from 'react';
import "../../Main.css";
import { Link, useLocation } from 'react-router-dom';


function TeethWhitening() {
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

            <div class="row serv-top">
                <div class=" col-7 text-center">
                    <h1 class="gold text-start">Teeth Whitening</h1>
                    <h3 class="brown text-start ">Illuminate Your Radiance</h3>
                    <br/>
                    <p class="lead text-start">Our Teeth Whitening services are a symphony of artistry and science, meticulously designed to
                        unveil the true brilliance of your smile. We believe that a radiant smile is a personal expression, and
                        our approach goes beyond mere aesthetics. Each Teeth Whitening journey begins with a
                        personalized treatment plan, acknowledging your unique dental needs and preferences. Our
                        experienced dental professionals blend artistry with precision, ensuring stunning yet natural-looking
                        results.</p>
                        <br/>
                        <p class="lead text-start">Leveraging advanced technology and safe whitening agents, our procedures are crafted to remove
                            stains and discoloration effectively, prioritizing your dental health and comfort.</p>
                        <br/>
                        <p class="lead text-start" >Our commitment to enduring and beautiful results, combined with the latest in whitening
                        technology.</p> 
                        <br/>
                        <p class="lead text-start">Illuminate your unique radiance by scheduling a consultation and discovering the art of Teeth
                            Whitening at ASH Dental.</p>
                        <br/>

                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/ServicesLandscape/TW1.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>

            <br>
                
            </br>
            &nbsp;
        </div>
    )
}

export default TeethWhitening;