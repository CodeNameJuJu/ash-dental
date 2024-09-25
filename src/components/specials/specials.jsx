import "../../Main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'

const imageIndexMapping = {
    "banner": "/Images/ServicesLandscape/AshSpecialsBanner.jpg",
    "banner2": "/Images/ServicesLandscape/ClearAlignerBanner.jpg",
    "banner3": "/Images/ServicesLandscape/ClearAlignerBanner2.jpg",
};

export const Specials = () => {

    return (
        <div className="container-fluid p-0">
            <img src={imageIndexMapping["banner"]} alt="banner" className="img-fluid mob-test" style={{ maxHeight: '615px' }} />
            <div className='ps-4 ms-4 pe-4 me-4'>
                <div >
                    <h1 className='pt-4 mt-3 text-color-gold text-start'>Transform Your Smile with ClearCorrect Aligners</h1>
                    <h2 class="brown text-start">Join Us for ClearCorrect Day at ASH Dental</h2>
                    <h3 class="text-start">Special offer: R700</h3>
                    <br></br>
                    <div className=''>
                        <p className="lead text-start">We’re excited to invite you to our exclusive <span class="b">ClearCorrect Day</span>  on <span class="b">28 September 2024!</span>
                            This is a unique opportunity to explore how ClearCorrect aligners can help you achieve a
                            straighter, more confident smile discreetly and comfortably.
                        </p>
                        <br></br>
                    </div>
                </div>
                &nbsp;
                <h2 class="gold text-start">Event Details :</h2>
                <div>
                    <p class="lead text-start">
                        <ol className="nonumber">
                            <li className="card-text lead "><span class="b">Date:</span> 28 September 2024</li>
                            <li className="card-text lead "><span class="b">Time:</span> 08:00 - 12:00</li>
                            <li className="card-text lead "><span class="b">Location:</span>ASH Dental, Suite 3&amp;4, Ash Medical Suite, 
                                177 Garsfontein Rd, Ashlea Gardens, Pretoria, 0081.</li>
                            <li className="card-text lead ">Clear Aligner Consultation Offer Only <span class="b">R700</span></li>
                        </ol>
                    </p>
                </div>
                &nbsp;
                <br></br>
                <br></br>
                <div className='text-center ' >
                    <h2 className=' text-color-gold text-start'>Why choose ClearCorrect?</h2>
                    <br></br>
                        <p className="lead text-start">At ASH Dental, we proudly offer ClearCorrect clear aligners as a superior solution for
                            achieving a straighter, more confident smile. ClearCorrect stands out among other clear
                            aligner options due to its exceptional combination of discretion, comfort, and effectiveness.
                            These nearly invisible aligners are custom-made to fit your teeth perfectly, ensuring precise
                            and gradual movement for optimal results. Crafted from high-quality, durable materials,
                            ClearCorrect aligners provide a comfortable fit that seamlessly integrates into your lifestyle.
                            Their removable design allows you to enjoy your favorite foods and maintain your regular
                            oral hygiene routine without interruption. Backed by a global leader in dental innovation,
                            ClearCorrect offers flexible and personalized treatment plans tailored to your unique needs.
                        </p>
                        <br></br>
                </div>
                &nbsp;

                <h2 class="gold text-start">What to Expect During Your Consultation:</h2>
                <div>
                    <p class="lead text-start">
                        <ol className="nonumber">
                            <li className="card-text lead "><span class="b">Comprehensive Examination:</span> Our experienced dentist will conduct a thorough
                                 examination of your teeth and gums.</li>
                            <li className="card-text lead "><span class="b">Digital Scan:</span> Our experienced dentist will take a 3D scan of your teeth using cutting-
                                    edge digital technology. This process is quick, painless, and provides a detailed
                                    model of your teeth.</li>
                            <li className="card-text lead "><span class="b">Digital Photographs:</span> We’ll take high-quality digital photographs of your teeth from
                                    multiple angles. These images will help us document your current smile and plan
                                    your treatment effectively.
                                </li>
                            <li className="card-text lead "><span class="b">Personalized Treatment Plan:</span> After the scan, the dentist will assess your teeth and
                                    create a treatment plan tailored specifically to your needs. You’ll even receive a
                                    mock-up of your future smile!
                                </li>
                            <li className="card-text lead "><span class="b">Exclusive Offer:</span> During your consultation, enjoy a<span class="b"> 20% discount on
                                    your treatment</span>
                                 plan quote, making it easier than ever to start your journey to a perfect smile.
                                </li>
                        </ol>
                    </p>
                </div>
             </div>
            &nbsp;
                <div>
                    <img src={imageIndexMapping["banner2"]} alt="banner" className="img-fluid mob-test" style={{ maxHeight: '550px' }} />
                </div>

            &nbsp;
            <div className=' ps-4 ms-4 pe-4 me-4'>
                <h2 class="gold text-start">Potential Outcomes:</h2>
                <h3 class="brown text-start">ClearCorrect aligners can deliver a range of positive outcomes, including:</h3>
                <p class="lead text-start">
                    <ol>
                        <li className="card-text lead "><span class="b">Straighter Teeth:</span> ClearCorrect effectively corrects misalignments, such as crooked
                            or crowded teeth, resulting in a more uniform and aesthetically pleasing smile.
                        </li>
                        <li className="card-text lead "><span class="b">Improved Oral Health:</span> By aligning your teeth properly, ClearCorrect reduces the risk
                            of oral health issues like tooth decay, gum disease, and abnormal wear of the tooth
                            enamel, as straighter teeth are easier to clean and maintain.
                        </li>
                        <li className="card-text lead "><span class="b">Enhanced Confidence:</span> A straighter smile often leads to increased self-esteem and
                            confidence, allowing you to smile, speak, and interact with others more comfortably.
                        </li>
                        <li className="card-text lead "><span class="b">Correction of Bite Issues:</span> ClearCorrect can address various bite issues, including
                            overbite, underbite, crossbite, and open bite, improving both the functionality and
                            appearance of your teeth.
                        </li>
                        <li className="card-text lead "><span class="b">Discreet Treatment:</span> The nearly invisible nature of ClearCorrect aligners allows you
                            to straighten your teeth without the noticeable appearance of metal braces, making it
                            a preferred option for those seeking a more subtle orthodontic solution.
                        </li>
                        <li className="card-text lead "><span class="b">Comfortable and Convenient:</span> ClearCorrect aligners are custom-made for a snug fit
                            and are removable, allowing you to eat, drink, and maintain your oral hygiene routine with ease.
                        </li>
                        <li className="card-text lead "><span class="b">Predictable Results:</span> Using advanced digital technology, ClearCorrect provides a
                            clear treatment plan from start to finish, so you can see how your teeth will gradually
                            shift into place and what your final smile will look like.
                        </li>
                    </ol>
                </p>
            </div>
            &nbsp;
            <div className=' ps-4 ms-4 pe-4 me-4'>
                <h2 class="gold text-start">Book Your Spot Today!</h2>
                <h3 class="text-start">Spaces are limited, so make sure to book your consultation as soon as possible to secure your place.</h3>
                
                    <p class="lead text-start">
                        <ol className="nonumber">
                            <li className="card-text lead "><span class="b">Phone:</span> 012 111 1715</li>
                            <li className="card-text lead "><span class="b">Email:</span> info@ashdental.co.za</li>
                            <li className="card-text lead "><span class="b">WhatsApp:</span> 084 850 3501</li>
                            <li className="card-text lead ">Clear Aligner Consultation Offer Only <span class="b">R700</span></li>
                        </ol>
                        We can’t wait to help you achieve the smile you’ve always wanted!
                    </p>
                </div>
            &nbsp;
                <div>
                    <img src={imageIndexMapping["banner3"]} alt="banner" className="img-fluid mob-test" style={{ maxHeight: '615px' }} />
                </div>    
        </div>
    )
}

export default Specials;

// ******************************************************************* EOF ******************************************************************************