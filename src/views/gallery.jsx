import React from 'react';
import LazyLoad from 'react-lazyload';
import '../Main.css';

const imageIndexMapping = {
    "ASH DENTAL_content_MARCH'24-378.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-378.webp",
    "ASH DENTAL_content_MARCH'24-69.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-69.webp",
    "ASH DENTAL_content_MARCH'24-370.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-370.webp",
    "ASH DENTAL_content_MARCH'24-358.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-358.webp",
    "ASH DENTAL_content_MARCH'24-3691.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-3691.webp",
    "ASH DENTAL_content_MARCH'24-38.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-38.webp",
    "ASH DENTAL_content_MARCH'24-43.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-43.webp",
    "ASH DENTAL_content_MARCH'24-228.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-228.webp",
    "ASH DENTAL_content_MARCH'24-223.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-223.webp",
    "ASH DENTAL_content_MARCH'24-231.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-231.webp",
    "ASH DENTAL_content_MARCH'24-267.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-267.webp",
    "ASH DENTAL_content_MARCH'24-1061.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1061.webp",
    "ASH DENTAL_content_MARCH'24-31.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-31.webp",
    "ASH DENTAL_content_MARCH'24-18.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-18.webp",
    "ASH DENTAL_content_MARCH'24-44.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-44.webp",
    "ASH DENTAL_content_MARCH'24-83.webp": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-83.webp",
    "lippecombo.webp": "../Images/FacesCloseUpsLandscape/lippecombo.webp",
    "tanniecombo.webp": "../Images/FacesCloseUpsLandscape/tanniecombo.webp",
    "snorcombo.webp": "../Images/FacesCloseUpsLandscape/snorcombo.webp",
    "mond2.webp": "../Images/FacesCloseUpsLandscape/mond2.webp",
    "NewTeeth.jpg": "../Images/FacesCloseUpsLandscape/NewTeeth.jpg",
    "NewTeeth2.jpg": "../Images/FacesCloseUpsLandscape/NewTeeth2.jpg",
    "tannie1.webp": "../Images/FacesCloseUpsLandscape/tannie1.webp",
};

function Gallery() {
    return (
        <div className="text-center container">
            <h1 className='text-color-gold mt-4 pt-4'>Gallery</h1>
            <p className="lead text-start ms-2 mt-3 pt-3 mb-4 pb-4">
                Explore our gallery and witness the transformative journeys we've embarked on with our patients. Each image tells a story of precision, artistry,
                and the pursuit of dental excellence. Join us on a visual tour that reflects the harmonious blend of design, technology,
                and the personalized touch that defines ASH Dental.
            </p>

            {/* First set of images */}
            <div className="container">
                <h2 className="brown mt-4 pt-4 mb-4 pb-4">Where Relaxation Meets Results</h2>
                <div className="row mb-5 pb-5">
                    {/* Dynamically load images for the first set */}
                    {Object.keys(imageIndexMapping).slice(0, 6).map((imageName, index) => (
                        <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                            <LazyLoad height={200} once>
                                <img src={imageIndexMapping[imageName]} className="img-fluid gallery-image" alt="Placeholder" />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second set of images */}
            <div className="container">
                <h2 className="brown mt-4 pt-4 mb-4 pb-4">Smile in Progress</h2>
                <div className="row mb-5 pb-5">
                    {/* Dynamically load images for the second set */}
                    {Object.keys(imageIndexMapping).slice(6, 16).map((imageName, index) => (
                        <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                            <LazyLoad height={200} once>
                                <img src={imageIndexMapping[imageName]} className="img-fluid gallery-image" alt="Placeholder" />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </div>

            {/* Last set of images */}
            <div className="container">
                <h2 className="brown mt-4 pt-4 mb-4 pb-4">Transforming Smiles, One Patient at a Time</h2>
                <div className="row">
                    {/* Dynamically load images for the third set */}
                    {Object.keys(imageIndexMapping).slice(16).map((imageName, index) => (
                        <div key={index} className="col-lg-6 mb-3 fadeIn-animation">
                            <LazyLoad height={200} once>
                                <img src={imageIndexMapping[imageName]} className="img-fluid teeth" alt="Placeholder" />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;

// ******************************************************************* EOF ******************************************************************************
