import React, { useState } from 'react';
import "../../Main.css";
import { Link } from 'react-router-dom';

function SkinHealthBeauty() {

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
                        <li class="sub-nav-item"> <Navigate name={'Skin, Health & Beauty'} path={'/skinHealthBeauty'} /> </li>
                        <li class="sub-nav-item"> <Navigate name={'24 Hour Emergencies'} path={'/emergencies'} /> </li>
                    </ul>
                </div>
            </nav>
            {/* Content starts here */}
            &nbsp;
            <div className='row top-pad'>
                <div className='col-md-8 col-sm-12'>
                    <h1 className="gold text-start">Skin, Health &amp; Beauty</h1>
                    <br />
                    <p className="lead text-start">
                        True confidence begins with healthy skin. Our Skin, Health &amp; Beauty division offers a
                        curated selection of treatments designed to restore, rejuvenate, and enhance your natural
                        glow. Whether you&#39;re preparing for a special event or addressing long-term skin concerns,
                        our evidence-based treatments are tailored to your unique skin journey.
                    </p>
                    <br />
                    <p className="lead text-start">
                        Led by qualified professionals and backed by clinical expertise, our treatments combine
                        science and artistry to deliver visible, lasting results.
                    </p>
                    <br />
                    <h2 className="mt-4 cntr fw-bold gold mb-3">Skin Treatments</h2>
                    <div>
                        <ul className="list-unstyled">
                            {[
                                { title: 'Consultation (45 min)', price: 'R400' },
                                { title: 'Dermaplaning (30 min)', price: 'R500' },
                                { title: 'Eyebrow Tint & Shape (20 min)', price: 'R250' },
                                { title: 'Eyebrow Tint, Shape & Eyelash Tint (30 min)', price: 'R300' },
                                {
                                    title: 'Deep Cleanse (30 min – 1 Hour)',
                                    desc: 'Treatment includes cleansing, extractions, mask, moisturiser, SPF',
                                    price: 'R700',
                                },
                                {
                                    title: 'Superficial Chemical Peel – Face Only (45 min)',
                                    desc: 'Treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, Mesoestetic superficial chemical peel, mask, moisturizer, SPF',
                                    price: 'R900',
                                },
                                {
                                    title: 'Superficial Chemical Peel – Face & Neck (45 min)',
                                    desc: 'Treatment includes cleanse, eyelash tint, eyebrow tint and shape extractions, Mesoestetic superficial chemical peel, mask, moisturizer, SPF.',
                                    price: 'R1300',
                                },
                                {
                                    title: 'Superficial Chemical Peel – Face, Neck & Décolleté (1 Hour)',
                                    desc: 'Treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, Mesoestetic superficial chemical peel, mask, massage, moisturizer, SPF',
                                    price: 'R1600',
                                },
                                {
                                    title: 'Medium-Depth Chemical Peel (TCA) – Face Only (1 Hour)',
                                    desc: 'Treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, Mesoestetic TCA chemical peel, mask, massage, moisturizer, SPF.',
                                    price: 'R2500',
                                },
                                {
                                    title: 'Glow-Up – Face, Neck & Décolleté (1 Hour 30 Min)',
                                    desc: 'The go-to treatment before any event. Includes cleansing, eyelash tint, eyebrow tint and shape, Mesoestetic superficial chemical peel, dermaplaning, jelly mask, massage, moisturiser, SPF',
                                    price: 'R2350',
                                },
                                {
                                    title: 'Radiance – Face, Neck & Décolleté (90 Min)',
                                    desc: 'This is a gentle, yet effective treatment designed to target dull, pigmented, uneven skin tones and enhance luminosity with little -to no down time. This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions (if necessary), Mesoestetic superficial chemical peel, dermaplaning, Mesoestetic ampoule, jelly mask, massage, moisturizer and SPF.',
                                    price: 'R3500',
                                },                                                               {
                                    title: 'MIRONEEDLING FACE ONLY (1 HOUR) ',
                                    desc: 'This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, dermaplaning, microneedling with a Mesoestetic solution, mask, moisturizer, SPF',
                                    price: 'R2400',
                                },                                                     {
                                    title: 'MICRONEEDLING FACE & NECK (1 HOUR 30 MIN) )',
                                    desc: 'This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, dermaplaning, microneedling with a Mesoestetic solution, mask, moisturizer, SPF.',
                                    price: 'R2700',
                                },                                                             {
                                    title: 'MICRONEEDLING FACE, NECK & DECOLLETE (2 HOURS) ',
                                    desc: 'This treatment includes cleanse, eyelash tin, eyebrow tint and shape, extractions, dermaplaning, microneedling with a Mesoestetic solution, mask, moisturizer, SPF.',
                                    price: 'R3000 ',
                                },                                                      {
                                    title: 'MICRONEEDLING & CHEMICAL PEEL COMBO FACE ONLY (1 HOUR 30 MIN) ',
                                    desc: 'This treatment is for the committed skin enthusiast as it requires dedication and patience. This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, dermaplaning, Mesoestetic superficial chemical peel, jelly mask, massage, moisturizer, SPF.',
                                    price: 'R2600',
                                },                                                           {
                                    title: 'MICRONEEDLING & CHEMICAL PEEL COMBO FACE & NECK (2 HOURS) ',
                                    desc: 'This treatment is for the committed skin enthusiast as it requires dedication and patience. This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, dermaplaning, Mesoestetic superficial chemical peel, jelly mask, massage, moisturizer, SPF.',
                                    price: 'R2900',
                                },                                                          {
                                    title: 'MICRONEEDLING & CHEMICAL PEEL COMBO FACE, NECK & DECOLLETE (2 HOURS 30 MIN) ',
                                    desc: 'This treatment is for the committed skin enthusiast as it requires dedication and patience. This treatment includes cleanse, eyelash tint, eyebrow tint and shape, extractions, dermaplaning, Mesoestetic superficial chemical peel, jelly mask, massage, moisturizer, SPF.',
                                    price: 'R3200',
                                },                        {
                                    title: 'NCTF EYE SKIN BOOSTER (45 MIN) ',
                                    desc: 'A highly specialized and concentrated solution designed to target sallow skin, fine lines, improving hydration and luminosity around the eye area.',
                                    price: 'R2500',
                                },
                            ].map((treatment, idx) => (
                                <li key={idx} className="mb-3 border-bottom pb-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-1 brown">{treatment.title}</h5>
                                        <span className="bigger fw-bold gold text-primary">{treatment.price}</span>
                                    </div>
                                    {treatment.desc && (
                                        <p className="mb-0 text-muted" style={{ fontSize: '1rem' }}>{treatment.desc}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <img
                    className='col-md-4 col-sm-12 mb-md-0 mb-3'
                    src="/Images/FacesCloseUpsPortrait/SkinHealthBeauty.jpeg"
                    alt="Skin Health & beauty"
                    style={{ height: '700px', objectFit: 'cover', borderRadius: '10px' }}
                />
            </div>
            &nbsp;
            <br></br>

            <div class="row serv-top text-center">

                <h3 class="brown text-start" >Welcome to a Thoughtful Approach to Skin Health</h3>
                <p class="lead text-start">Your skin tells a story that’s uniquely yours—and we’re here to listen. At the heart of our
                    philosophy is a commitment to care, precision, and respect for your personal journey.
                    Whether you’re looking to restore balance, refresh your glow, or simply take a quiet moment
                    for yourself, our treatments are tailored with intention and sensitivity.
                </p>
                &nbsp;
                <p class="lead text-start">We warmly invite you to discover what feels right for you, at your own pace.</p>
                <br></br>
            </div>

            <br></br>
        </div>
    )
}

export default SkinHealthBeauty;

// ******************************************************************* EOF ******************************************************************************