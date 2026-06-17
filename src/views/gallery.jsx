import React from 'react';
import LazyLoad from 'react-lazyload';
import '../Main.css';
import SEO from '../components/seo';
import CdnImage from '../components/cdnImage';

const imageIndexMapping = {
    "ASH DENTAL_content_MARCH'24-378.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-378.webp",
    "ashdental_dentalchair.jpeg": "https://ik.imagekit.io/siftan/Images/Practice/High/ashdental_dentalchair.jpeg",
    "ASH DENTAL_content_MARCH'24-69.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-69.webp",
    "ASH DENTAL_content_MARCH'24-370.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-370.webp",
    "ASH DENTAL_content_MARCH'24-358.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-358.webp",
    "ASH DENTAL_content_MARCH'24-3691.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-3691.webp",
    "ASH DENTAL_content_MARCH'24-38.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-38.webp",
    "ashdentalpractice.jpeg": "https://ik.imagekit.io/siftan/Images/Practice/High/ashdentalpractice.jpeg",
    "ASH DENTAL_content_MARCH'24-43.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-43.webp",
    "ASH DENTAL_content_MARCH'24-228.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-228.webp",
    "ASH DENTAL_content_MARCH'24-223.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-223.webp",
    "ASH DENTAL_content_MARCH'24-231.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-231.webp",
    "ASH DENTAL_content_MARCH'24-267.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-267.webp",
    "ASH DENTAL_content_MARCH'24-1061.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-1061.webp",
    "ASH DENTAL_content_MARCH'24-31.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-31.webp",
    "ASH DENTAL_content_MARCH'24-18.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-18.webp",
    "ASH DENTAL_content_MARCH'24-44.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-44.webp",
    "ASH DENTAL_content_MARCH'24-83.webp": "https://ik.imagekit.io/siftan/Images/Practice/High/ASH DENTAL_content_MARCH'24-83.webp",
    
    "lippecombo.webp": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/lippecombo.jpg",
    "tanniecombo.webp": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/tanniecombo.jpg",
    "snorcombo.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/snorcombo.jpg",
    "mond2.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/mond2.jpg",
    "NewTeethGum.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/NewTeethGum.jpg",
    "NewTeeth22.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/NewTeeth22.jpg",
    "smileRestore2.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/smileRestore2.jpg",
    "brightsmile.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/brightsmile.jpg",
    "SmileBeforeAfter.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/SmileBeforeAfter.jpg",
    "TopView.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/TopView.jpg",
    "SmileMakeOver.jpg": "https://ik.imagekit.io/siftan/Images/FacesCloseUpsLandscape/SmileMakeOver.jpg",

    
    
    
};

function Gallery() {
    return (
        <div className="text-center container top-pad">
            <SEO
                title="Gallery"
                description="Explore our gallery of dental transformations, practice facilities, and smile makeovers at ASH Dental in Pretoria East."
                path="/gallery"
            />
            <h1 className='text-color-gold mt-4 pt-4'>Gallery</h1>
                    
            <a href="#facility" className="gold mt-4 pt-4 mx-2"><button  href="#facility" className="gallery-button" >Facility</button></a>
                <a href="#smile-gallery" ><button  href="#smile-gallery" className="gallery-button">Smile Gallery</button></a>
                <br></br>
                    <p className="lead text-start ms-2 mt-3 pt-3 mb-4 pb-4">
                        Explore our gallery and witness the transformative journeys we've embarked on with our patients. Each image tells a story of precision, artistry,
                        and the pursuit of dental excellence. Join us on a visual tour that reflects the harmonious blend of design, technology,
                        and the personalized touch that defines ASH Dental.
                    </p>

                    {/* First set of images */}
                    <div className="container">
                        <h2 className="brown mt-4 pt-4 mb-4 pb-4" id="facility">Where Relaxation Meets Results</h2>
                        <div className="row mb-5 pb-5">
                            {/* Dynamically load images for the first set */}
                            {Object.keys(imageIndexMapping).slice(0, 6).map((imageName, index) => (
                                <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                                    <LazyLoad height={200} once>
                                        <CdnImage src={imageIndexMapping[imageName]} className="img-fluid gallery-image" alt={imageName.replace(/\.\w+$/, '')} />
                                    </LazyLoad>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second set of images */}
                    <div className="container " id="smile-in-progress">
                        <h2 className="brown mt-4 pt-4 mb-4 pb-4">Smile in Progress</h2>
                        <div className="row mb-5 pb-5">
                            {/* Dynamically load images for the second set */}
                            {Object.keys(imageIndexMapping).slice(6, 16).map((imageName, index) => (
                                <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                                    <LazyLoad height={200} once>
                                        <CdnImage src={imageIndexMapping[imageName]} className="img-fluid gallery-image" alt={imageName.replace(/\.\w+$/, '')} />
                                    </LazyLoad>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last set of images */}
                    <div className="container">
                        <h2 className="brown mt-4 pt-4 mb-4 pb-4" id="smile-gallery">Transforming Smiles, One Patient at a Time</h2>
                        <div className="row">
                            {/* Dynamically load images for the third set */}
                            {Object.keys(imageIndexMapping).slice(16).map((imageName, index) => (
                                <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                                    <LazyLoad height={250} width={250} once>
                                        <CdnImage src={imageIndexMapping[imageName]} className="img-fluid teeth" alt={imageName.replace(/\.\w+$/, '')} />
                                    </LazyLoad>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                );
}

                export default Gallery;
