import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function FacialAesthetics() {

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
            <div>
                <nav class=" navbar nav-bg navbar-expand-sm navbar-second">
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
                        <i class="fa fa-bars" style={{ 'font-size': '25px' }}></i>
                    </button>

                    <div class={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="sub-nav-item">
                                <Navigate name={'Teeth Whitening'} path={'/teethWhitening'} /> </li>
                            <li class="sub-nav-item"><Navigate name={'Crowns and Veneers'} path={'/crowns'} />  </li>
                            <li class="sub-nav-item"> <Navigate name={'Dental Implants'} path={'/dental'} />  </li>
                            <li class="sub-nav-item"><Navigate name={'Orthodontics'} path={'/orthodontics'} /> </li>
                            <li class="sub-nav-item"> <Navigate name={'General Dentistry'} path={'/generalDentistry'} />  </li>
                            <li class="sub-nav-item"> <Navigate name={'Facial Aesthetics'} path={'/FacialAesthetics'} /> </li>
                            <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            &nbsp;
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <h1 className='text-color-gold text-start'>Facial Aesthetics</h1>
                    <h2 class="brown text-start">A better version of you</h2>

                    <p className="lead  text-start text-start">We do not believe in simply changing faces, but rather in unveiling and optimising the existing potential locked within. 
                            We do this so that our patients may be the best versions of themselves today and preserving it for tomorrow. The industry is continually evolving, with new products 
                            and treatments being developed all the time. We go to great lengths sourcing the best products and implementing the latest treatment methods available so that you too may
                            benefit from modern anti-ageing and facial aesthetic technologies.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start">Lines and fine wrinkles appear when we frown, squint and laugh. It is then important to note that not all lines and fine wrinkles are necessarily bad and that is why we aim to treat only the ones that causes us to look tired, stressed and older than our age. 
                            Think of the treatment as a very specific muscle relaxant which causes the muscles responsible for the lines and fine wrinkles to take a break and allow the ‘good’ muscles to do some lifting – making us all look crisp and fresh.
                        </p>
                    <br />
                </div>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/facialastet.jpg" alt="FacialAesthetics" style={{ height: '600px' }} />
            </div>
            <br></br>
            &nbsp;

            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/fa1.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '600px' }} />
                <div className='col-md-8 col-sm-12'>
                     &nbsp; 
                    <h2 class="brown text-start ">Botulinum Toxin Treatments</h2>
                    <p className="lead  text-start text-start">Take back your youthful appearance without undergoing any form of surgery with Botulinum toxin treatment. 
                            It’s delightful convenient and non-invasive, with quick procedure times and short recovery. It’s also inexpensive compared to other treatment options,
                             with little to no preparation.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start">It’s the easiest way to plump up your features and get rid of unwanted lines, wrinkles, sagginess or sunken eyes.
                         Patients also opt for Botox and dermal fillers over surgery because the results are more subtle and natural, with no scarring.
                         Be sure to follow our pre-treatment and post-treatment instructions carefully for optimal treatment
                        </p>
                    <br />
                </div>
            </div>
            <br></br>
            &nbsp;
            <br></br>

            <div className='row'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/fa7.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '500px' }} />
                <div className='col-md-8 col-sm-12'>
                     &nbsp; 
                    <h2 class="brown text-start ">Dermal Fillers</h2>
                    <p className="lead  text-start text-start">Reduce and totally remove signs of ageing with the use of dermal fillers, giving you smoother, 
                            fuller, more youthful facial aesthetics. Ageing causes the loss of collagen and elasticity in the skin, making it harder for your skin 
                            to repair itself and snap back into place. But with dermal fillers, we can smooth out those wrinkles, lift sagging skin, and restore volume to your face.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start">They also induce collagen production, which helps your appearance age slower. The effects are 
                           long-lasting, lasting 8 to 10 months before you’ll need to undergo treatment again. Like Botox, our dermal fillers have only a short recovery
                          time, and the treatment itself takes only 10 to 30 minutes. We’re renowned as one of the best Botox and filler practitioners in Pretoria.
                        </p>
                    <br />
                </div>
            </div>

            &nbsp;

            <div className='row mb-3'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/fa5.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '600px' }} />
                <div className='col-md-8 col-sm-12'>
                     &nbsp; 
                    <h2 class="brown text-start ">Threads</h2>
                    <p className="lead  text-start text-start">There’s more than one way to reduce the telltale signs of ageing, and while some measures require 
                        surgery, many choose to opt for less invasive solutions such as threading. To reverse the clock, doctors can re-tighten your facial aesthetics
                         by smoothing out wrinkles, sagging skin and bags under your eyes with the use of threading, which not only makes you look younger for around 
                         18 months but also encourages your skin to increase its production of natural collagen, reducing the effects of ageing on your skin overall.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start">Threading isn’t just used for facelifts either; it’s often used to cosmetically alter the
                             appearance of your face as well, lifting your eyebrows, cheeks and neck, filling out your lips or even straightening and/or lifting your 
                            nose. With so many options available to you, it’s never been easier to look and feel comfortable in your own skin.
                        </p>
                    <br />
                </div>
            </div>

            &nbsp;

            <div className='row mb-4'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/fa3.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '450px' }} />
                <div className='col-md-8 col-sm-12'>
                    <h2 class="brown text-start mt-4">Sculptra</h2>

                    <p className="lead  text-start text-start">What is Sculptra? It is not a dermal filler, neither is it a skin booster. Sculptra 
                        is a biostimulator. The main molecule is called Poly-L-Lactic Acid (PLLA). This molecule, when injected into the skin, causes the 
                        cells that produce collagen (fibroblasts) to increase in numbers and in their activity of collagen, elastin and hyaluronic acid production.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start">2-3 treatments are needed depending on the sagging, volume-loss and skin quality. 
                        Results is visible from 3 months onward and maintenance thereafter every 25 months.
                        </p>
                    <br />
                </div>
            </div>
            &nbsp;

            <br></br>
            <div className='row mt-4'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/fa6.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '500px' }} />
                <div className='col-md-8 col-sm-12'>
                    <h2 className='brown text-start'>Chemical Peels</h2>
                    <p class="lead text-start"> With a chemical peel a chemical agent is applied to the skin, causing controlled injury to the skin. After injury the skin heels itself, leaving 
                        you with rejuvenated, more vibrant skin. Indications for a chemical peel:</p>
                    <br/>
                    <ol className="nonumber">
                            <li className="card-text lead ">Photo damage and pigmentation</li>
                            <li className="card-text lead ">Anti-ageing and rejuvenation</li>
                            <li className="card-text lead ">Reducing the appearance of the fine lines and wrinkles</li>
                            <li className="card-text lead ">Improve skin tone and texture</li>
                            <li className="card-text lead ">Lighter, brighter skin</li>
                            <li className="card-text lead ">Open pores</li>
                            <li className="card-text lead ">Acne and acne scarring</li>
                            <li className="card-text lead ">Acne and acne scarring</li>
                        </ol>
                        <p class="lead text-start">Downtime and flaking of the skin is dependant on the dept of the chemical peel.</p>
                </div>
            </div>

            <br></br>
            <div className='row mt-4'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src="/Images/ServicesLandscape/microneedle.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '500px' }} />
                <div className='col-md-8 col-sm-12'>
                    <h2 className='brown text-start'>Microneedling</h2>
                    <p class="lead text-start">Also known as collagen induction therapy is a cosmetic procedure that involves repeatedly puncturing the skin with
                        tiny, sterile needles. Multiple active products can be used to puncture in the skin like Vitamin C, hyaluronic acid and retinol to name a few.
                         The following areas are treated and improved when doing microneedling:</p>
                    <br/>
                    <ol className="nonumber">
                            <li className="card-text lead ">Fine lines and wrinkles</li>
                            <li className="card-text lead ">Sagging skin</li>
                            <li className="card-text lead ">Acne skin</li>
                            <li className="card-text lead ">Stretch marks</li>
                            <li className="card-text lead ">Enlarged pores</li>
                            <li className="card-text lead ">Sun damage</li>
                            <li className="card-text lead ">Hyperpigmentation</li>
                        </ol>
                </div>
            </div>
            <br></br>
            &nbsp;
            <br></br>

            <div className='row mb-3'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3 pt-4' src="/Images/ServicesLandscape/skinbooster.jpg" alt="FacialAesthetics" style={{ width: '100%', height: 'auto', maxWidth: '500px', maxHeight: '600px' }} />
                <div className='col-md-8 col-sm-12'>
                     &nbsp; 
                    <h2 class="brown text-start ">Skin Boosters</h2>
                    <p className="lead  text-start text-start">Skin boosters are an injectable treatment that is designed to deliver deep skin hydration.
                         We refer to them as injections for skin quality, as they promote a natural glow and radiance. For initial treatment, we recommend having 
                         two sessions at six-week intervals, with subsequent maintenance treatments twice a year.
                        </p>
                        <br></br>
                        <p className="lead  text-start text-start pt-3">Mild bumps and redness are visible for the first 2 days, but recovery time is low.</p>
                        <h4 class="brown text-start pt-3">Chair time: 60 min</h4>

                    <br />
                </div>
            </div>


            &nbsp;
            <br></br>
            <div className=' row text-center'>
                <h2 class=" gold card-title ">What can I expect?</h2>
                <h4 class=" brown card-title ">15 Minute Treatment</h4>
                <p className="lead">Firstly, Dr. Karl will begin by listening to your concerns, followed by a discussion on all the available options to best treat each concern. Treatment options may include the use of neuromodulators, but for optimal results, Dr. Karl uses a multidisciplinary approach.</p>
                <p className="lead">The discussion may then be followed by a quick cleanse of the areas to be treated and the application of a topical anaesthetic. After removal of the anaesthetic, Dr. Karl will do a facial mapping and carefully apply the treatment to each area. Within 15 minutes there is no visible sign that any treatment was done, making this the perfect lunchtime ‘shopping run’. There are a few simple rules which Dr. Karl will discuss with you – they exist to prevent movement of the product and ensure a longer lasting effect.</p>
                <p className="lead">In 3-4 days you will notice some changes starting to take place. It will still be possible to frown, however, it will be much harder. Lines that used to show will now be gone. After 2-4 weeks the treatment will have its maximum effect – so keep this in mind when booking prior to your Big day! And because we are all different, the effect of the product lasts between 3 and 6 months regardless of the amount being used – Dr. Karl therefor strongly recommends visits every 4 to 7 months using moderate quantities. Less really is more in this case!</p>
            
            </div>

            &nbsp;

        </div>

    )
}

export default FacialAesthetics;

// ******************************************************************* EOF ******************************************************************************