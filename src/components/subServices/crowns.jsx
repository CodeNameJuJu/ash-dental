import React from 'react';
import "../../Main.css";
import { Link, useLocation } from 'react-router-dom';


function Crowns() {
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
                    <h1 class="gold">Crowns and Veneers</h1>
                    <h3 class="brown  ">Artistry and Precision Unleashed</h3>
                    <br />
                    <p class="lead text-start">Our Crowns and Veneers services embody the perfect blend of artistry and precision, meticulously
                        crafted to revitalize, and enhance your smile. Recognizing the uniqueness of your smile as a personal
                        expression, our approach transcends traditional dentistry.</p>
                    <br />
                    <p class="lead text-start">Whether you seek to restore a damaged
                        tooth or undergo a transformative smile makeover, our personalized treatment plans are tailored to
                        address your distinct dental needs. </p>
                    <br />
                    <p class="lead text-start" >Our dental professionals seamlessly integrate artistic expertise
                        with cutting-edge dental technology, ensuring that our crowns and veneers not only provide lasting
                        restoration but elevate your smile to the highest standard of quality.</p>
                    <br />
                    <br />

                </div>

                <div class="col-5">
                    <div class="serv2-image-block">
                        <img class="serv2-image" src="/Images/ServicesLandscape/Veneers2.png" alt="2 description"></img>
                        <div class="serv2-overlay-block"></div>
                    </div>
                </div>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            <div class="sub-centered-container">
                <div class="sub-centered-inner-container">
                    <div class="sub-image-container">
                        <img src="/Images/ServicesLandscape/Veneers.png" alt="Image description"></img>
                    </div>
                    <div class="sub-text-container">
                        <h2 class="brown cen">Crowning Achievement in Precision:</h2>
                        <p class="lead text-start center ">Our commitment to precision dentistry is evident in the crafting of dental crowns using emax- and
                        sagemax zirconia porcelain. Each crown is meticulously designed using inLab CAD Software by a
                        skilled ceramicist to fit seamlessly with your natural teeth, restoring both function and aesthetics.
                        Whether it's addressing structural damage, discoloration, or other concerns, our crowns offer
                        durability and a natural look. 
                         </p>
                    </div>
                </div>
            </div>
            <div class="sub-centered-container">
                <div class="sub-centered-inner-container">

                    <div class="sub-text-container">
                        <h2 class="gold">Veneers for a Radiant Transformation:</h2>
                        <p class="lead text-start center ">ASH Dental's veneers are a canvas for creating a radiant smile. Tailored to your unique features,
                            veneers address imperfections, such as stains, chips, or gaps, with a focus on achieving a harmonious
                            and natural appearance. Our veneer solutions are personalized to reflect your ideal smile, ensuring a
                            transformative yet authentic result.
                         </p>
                    </div>
                    <div class="sub-image-container">
                        <img src="/Images/ServicesLandscape/Crowns2.png" alt="Image description"></img>
                    </div>
                </div>
            </div>

                &nbsp;

            <div class="crown-container">
                <div class="crown-inner-container">
                    <div class="crown-text-container">
                        <h2 class="gold">Veneers for a Radiant Transformation:</h2>
                        <p class="lead text-start center ">
                            
                        </p>
                        <br></br>           
                        <p class="lead text-start center " >Experience a journey to a revitalized and confident smile that reflects the pinnacle of dental care.
                            Schedule a consultation and discover the artistry behind our Crowns and Veneers services.
                            </p>
                    </div>
                    <div class="crown-image-container">
                        <img src="/Images/FacesCloseUpsPortrait/2.png" alt="Image description"></img>
                    </div>
                </div>
                
            </div>
            &nbsp;
 
            &nbsp;


        </div>




    )
}

export default Crowns;