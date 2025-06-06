import React from 'react';
import LazyLoad from 'react-lazyload';
import '../Main.css';

// Define image index mapping with absolute paths
const imageIndexMapping = {
    "/Images/Practice/High/ASH DENTAL_content_MARCH'24-358.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-358.webp",
    "/Images/Technology/Teeth whitening.webp": "../Images/Technology/Teeth whitening.webp",
    "/Images/Technology/Teeth whitening (3).webp": "../Images/Technology/Teeth whitening (3).webp",
    "/Images/Technology/18.webp": "../Images/Technology/18.webp",
    "/Images/Technology/17.webp": "../Images/Technology/17.webp",
    "/Images/Technology/planmeca-viso-g3.webp": "../Images/Technology/planmeca-viso-g3.webp",
    "/Images/Technology/20.webp": "../Images/Technology/20.webp",
    "/Images/Technology/21.webp": "../Images/Technology/21.webp",
    "/Images/Technology/22.webp": "../Images/Technology/22.webp",
    "/Images/Technology/23.webp": "../Images/Technology/23.webp",
    "/Images/Technology/24.webp": "../Images/Technology/24.webp",
    "/Images/Technology/25.webp": "../Images/Technology/25.webp",
    "/Images/Technology/26.webp": "../Images/Technology/26.webp",
    "/Images/Technology/27.webp": "../Images/Technology/27.webp",
    "/Images/Technology/SmileFy_Software.webp": "../Images/Technology/SmileFy_Software.webp",
    "/Images/Practice/Low/ASH DENTAL_content_MARCH'24-3011.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-3011.webp",
    // Add more mappings as needed
};


/* Component for displaying technology details */
function Tech({ name, image, desc, desc2, desc3 }) {
    return (
        <LazyLoad height={200} once>
            <div className='row ms-0 ps-0 mb-4 pb-4'>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src={imageIndexMapping[image]} alt={name} style={{ height: '350px', width: '400px' }} />

                <div className='col-md-8 col-sm-12'>
                    <section className='pb-1'>
                        <h3 className='text-color-gold text-start'>{name}</h3>
                    </section>
                    <p className="lead text-start">{desc}</p>
                    <br />
                    {desc2 && <p className="lead text-start">{desc2}</p>}
                    <br />
                    {desc3 && <p className="lead text-start">{desc3}</p>}
                </div>
            </div>
        </LazyLoad>
    );
}

/* Component for displaying technology details */
function Tech2({ name, image, desc, desc2 }) {
    return (
        <LazyLoad height={200} once>
            <div className='row ms-0 ps-0 mb-4 pb-4'>
                <div className='col-md-8 col-sm-12'>
                    <section className='pb-1'>
                        <h3 className='text-color-gold text-start'>{name}</h3>
                    </section>
                    <p className="lead text-start">{desc}</p>
                    <br />
                    {desc2 && <p className="lead text-start">{desc2}</p>}
                </div>
                <img className='col-md-4 col-sm-12 mb-md-0 mb-3' src={imageIndexMapping[image]} alt={name} style={{ height: '350px', width: '400px' }} />
            </div>
        </LazyLoad>
    );
}

/* Combined Component for displaying technology details */
function Technology() {

    // Define technology details
    const techDetails = [
        {
            name: "Ceiling Mounted TV’s, State of the Art Speakers & Apple iPads",
            desc: "At ASH Dental, we redefine the dental experience by seamlessly integrating everyday technology to elevate your journey with us. Immerse yourself in a personalized atmosphere with Sonos Speakers, where you have the power to curate your own playlist, turning your dental visit into a musical escape.",
            desc2: "Our ceiling-mounted TVs offer a visual retreat, transporting you to another place while receiving treatment. Embracing modernity, we've gone paperless with iPads for efficient and eco-friendly filing. We believe that your time with us should be more than a dental appointment – it's a guest experience.",
            desc3: "Say goodbye to the traditional dental visit dread; at ASH Dental, you're not just a number; you're our valued guest on a uniquely tailored journey.",
            image: "/Images/Practice/High/ASH DENTAL_content_MARCH'24-358.webp"
        },
        {
            name: "Fläsh Teeth Whitening",
            desc: "ASH Dental brings you the pinnacle of teeth whitening technology with fläsh Teeth Whitening. This innovative solution transcends traditional methods, providing a swift and effective approach to achieving a brighter, whiter smile, harnessing the advanced technology showcased by fläsh Teeth Whitening.",
            image: "/Images/Technology/Teeth whitening.webp"
        },
        {
            name: "Digital Photography: Capturing Precision, Revealing Beauty",
            desc: "Step into the future of dentistry with our advanced digital photography. We utilize high-resolution imaging to capture detailed shots of your teeth, providing an unparalleled level of precision in diagnostics and treatment planning.",
            image: "/Images/Technology/Teeth whitening (3).webp"
        },
        {
            name: "3D Imaging: A Deeper Insight for Comprehensive Care",
            desc: "Our commitment to thorough diagnostics is exemplified through 3-dimensional imaging. Unlike conventional X-rays, this technology provides a comprehensive, three-dimensional view of your oral structures. This allows us to analyze your dental health with unprecedented detail, ensuring a more accurate diagnosis and personalized treatment plans.",
            desc2: "Additionally, our digital intraoral sensor allows for the immediate viewing of X-rays during diagnoses and treatment, enhancing the efficiency of our diagnostic process.",
            image: "/Images/Technology/18.webp"
        },
        {
            name: "Digital Impression and Scanning, Intra Oral Scanner",
            desc: "Step into a new era of dental impressions with the SIRONA prime scan at ASH Dental. Bid farewell to traditional, messy impressions and welcome a more comfortable and efficient experience. Our handheld prime scan device captures precise 3D images of your teeth, eliminating the discomfort associated with conventional impressions.",
            desc2: "Whether you're exploring orthodontic treatments or restorative procedures, prime scan enhances your overall dental experience, ensuring accuracy, comfort, and efficiency.",
            image: "/Images/Technology/17.webp"
        },
        {
            name: "CBCT Scans: Precision Beyond the Surface",
            desc: "ASH Dental goes beyond the surface with Cone Beam Computed Tomography (CBCT) scans. This technology allows us to visualize your teeth, bone structure, and soft tissues in three dimensions. From implant planning to complex oral surgeries and root canals, CBCT scans contribute to our commitment to precision and patient-centric care.",
            image: "/Images/Technology/planmeca-viso-g3.webp"
        },
        {
            name: "NSK Scaler and Polisher: Gentle Yet Effective Dental Care",
            desc: "Experience a new standard of comfort and effectiveness in routine dental cleanings with the NSK Scaler and Polisher at ASH Dental. Our tool ensures a gentle yet thorough cleaning process, efficiently removing plaque and stains to leave your teeth refreshed. With precision and comfort as our priorities, the NSK scaler and polisher redefine the dental care experience, making every hygiene appointment enjoyable.",
            desc2: "Say goodbye to discomfort and hello to a new era of patient-centric dental cleanings at ASH Dental, providing effective calculus and stain removal for a revitalized smile.",
            image: "/Images/Technology/20.webp"
        },
        {
            name: "CEREC CAD/CAM Milling Technology: for Precision and Accurate Fit ",
            desc: "With our CEREC CAD/CAM milling technology, we can design, create, and place crowns or veneers without compromising on quality or aesthetics. This technology enables us to design, craft, and seamlessly place crowns, veneers and bridges in less than a week. The advantages are manifold: fewer appointments, a more natural looking appeal to the tooth and great quality for an aesthetic appeal.",
            desc2: "Experience the convenience of modern dentistry at ASH Dental, where we prioritize efficiency and excellence to deliver a transformative smile in the shortest time possible. This technology ensures accuracy and fit, allowing the ceramicist can customize detail in crowns, veneers and bridges to ensure a natural looking tooth.",
            image: "/Images/Technology/21.webp"
        },
        {
            name: "NSK Surgic Pro: for Efficient Implant Placement and Surgical Removal of Teeth.",
            desc: "NSK Pro Surgic stands as a pinnacle in our arsenal of advanced dental technology at ASH Dental. Specifically designed for efficient implant placement and the surgical removal of teeth, this cutting-edge system ensures precision and ease during dental procedures.",
            desc2: "With NSK Pro Surgic, we elevate the standard of implantology, providing our patients with a seamless and comfortable experience.",
            image: "/Images/Technology/22.webp"
        },
        {
            name: "Co-diagnostix Implant Planning Software",
            desc: "This software enhances our implantology capabilities by offering precise and comprehensive planning for dental implant procedures. Co-Diagnostix enables us to visualize the patient's unique oral anatomy in 3D, facilitating accurate placement of implants for optimal function and aesthetics. ",
            desc2: "With this advanced technology, we ensure a personalized and efficient approach to implant dentistry, providing our patients with exceptional outcomes and a transformed smile.",
            image: "/Images/Technology/23.webp"
        },
        {
            name: "SmartLite® Pro EndoActivator: Comprehensive Cleaning of Root Canals",
            desc: "This technology is employed to ensure thorough and effective root canal procedures. The SmartLite® Pro EndoActivator is specifically designed as an equipment solution for the intracanal activation of irrigating fluids, integral to the meticulous cleaning and disinfection of root canals.",
            desc2: "By facilitating comprehensive cleaning of root canals, the SmartLite® Pro Endo Activator contributes to successful obturation, ultimately leading to lasting results.",
            image: "/Images/Technology/24.webp"
        },
        {
            name: "Advanced Sterilization for Your Safety: Introducing the DAC Premium Autoclave",
            desc: "We prioritize your safety with the use of technology like the DAC Premium Autoclave, ensuring the sterilization of dental instruments. Our commitment to stringent hygiene standards guarantees a safe and sterile environment, providing you peace of mind during your dental experience.",
            image: "/Images/Technology/25.webp"
        },
        {
            name: "Enhancing Procedure Efficiency: DÜRR Suction Machine for Optimal Saliva Removal",
            desc: "The DÜRR suction machine plays a crucial role in maintaining a clean and efficient dental environment. With its powerful suction capabilities, it ensures effective removal of saliva during dental procedures, contributing to a smooth and comfortable experience for our patients. ",
            image: "/Images/Technology/26.webp"
        },
        {
            name: "Precision in Curing: SmartLite® Pro Curing Light",
            desc: "We utilize the Smartlite® Pro Curing Light for the efficient curing of composite and cement materials. This advanced technology ensures the thorough and quick setting of materials, contributing to the longevity and durability of dental restorations.",
            image: "/Images/Technology/27.webp"
        },
        {
            name: "SmileFy, a simulation of your smile",
            desc: "At ASH Dental we use a cutting-edge software program that allows us to create 3D digital smile designs and simulations. This innovative technology allows us to:",
            desc2: "Visualize your dream smile: See what your smile could look like after treatment, ensuring you're fully informed and involved in the planning process. Enhance treatment planning: Plan and predict cosmetic and restorative procedures with greater accuracy, leading to more efficient and predictable outcomes.",
            desc3: "SmileFy is just one example of our commitment to using technology to enhance your dental experience.",
            image: "/Images/Technology/SmileFy_Software.webp"
        },
        {
            name: "Close up with binocular loupes",
            desc: "At ASH Dental, we're dedicated to providing exceptional dental care with the highest level of precision and detail. That's why we've incorporated binocular loupes from Zumax® into our practice. These advanced surgical loupes offer:",
            desc2: "Magnified visualization: Enhanced magnification allows your dentist to see intricate details within the oral cavity, leading to more accurate diagnoses and treatment procedures. Increased efficiency and accuracy: The superior clarity provided by these loupes allows for more precise manoeuvring and manipulation of instruments, leading to efficient and successful treatment outcomes.",
            image: "/Images/Practice/Low/ASH DENTAL_content_MARCH'24-3011.webp"
        },
        // Add more technology details here
    ];

    return (
        <div className='container text-center'>
            <section className='mb-5 pb-5'>
                <br />
                <br />
                <h1 className='text-color-gold text-center'>Cutting-edge dental technology at ASH dental: Advanced tools for precise,
                comfortable, and effective dental treatments.</h1>
                <h3 className='text-color-gold mb-2 text-center brown'>Elevating your Dental Experience</h3>
                <br />
                <br />
                <p className="lead text-start">At ASH Dental, we prioritize your comfort and well-being by integrating the latest
                    advancements in dental technology. Our state-of-the-art tools and equipment enable us to
                    deliver precise diagnostics, tailored dental treatment plans, and exceptional results. By
                    harnessing cutting-edge technology, we ensure a higher level of accuracy and efficiency in
                    every aspect of your care, leading to improved outcomes and a more satisfying dental
                    experience.
                </p>
            </section>
            <br />
            <div>
                {techDetails.map((tech, index) => (
                    <div key={index} className='mb-3 pb-3'>
                        {index % 2 === 0 ? (
                            <Tech {...tech} />
                        ) : (
                            <Tech2 {...tech} />
                        )}
                    </div>
                ))}
            </div>
            <div className='mb-4 pb-4 text-center'>
                <h3 className="gold card-title">
                    Explore the future of dentistry at ASH Dental, where technology and personalized care converge to create smiles that reflect the pinnacle of dental excellence.
                </h3>
                <br />
                <div>
                    <h3 className="gold card-title">
                        Contact us to schedule a consultation and discover the transformative impact of advanced dental technology on your oral health journey.
                    </h3>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Technology;

// ******************************************************************* EOF ******************************************************************************
