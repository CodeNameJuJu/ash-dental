import React from 'react';
import LazyLoad from 'react-lazyload';
import '../Main.css';

const imageIndexMapping = {
    "ASH DENTAL_content_MARCH'24-378.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-378.jpg",
    "ASH DENTAL_content_MARCH'24-69.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-69.jpg",
    "ASH DENTAL_content_MARCH'24-370.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-370.jpg",
    "ASH DENTAL_content_MARCH'24-358.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-358.jpg",
    "ASH DENTAL_content_MARCH'24-3691.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-3691.jpg",
    "ASH DENTAL_content_MARCH'24-38.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-38.jpg",
    "ASH DENTAL_content_MARCH'24-43.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-43.jpg",
    "ASH DENTAL_content_MARCH'24-228.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-228.jpg",
    "ASH DENTAL_content_MARCH'24-223.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-223.jpg",
    "ASH DENTAL_content_MARCH'24-231.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-231.jpg",
    "ASH DENTAL_content_MARCH'24-267.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-267.jpg",
    "ASH DENTAL_content_MARCH'24-1061.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1061.jpg",
    "ASH DENTAL_content_MARCH'24-31.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-31.jpg",
    "ASH DENTAL_content_MARCH'24-18.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-18.jpg",
    "ASH DENTAL_content_MARCH'24-44.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-44.jpg",
    "ASH DENTAL_content_MARCH'24-83.jpg": "../Images/Practice/Low/ASH DENTAL_content_MARCH'24-83.jpg",
    "lippecombo.png": "../Images/FacesCloseUpsLandscape/lippecombo.png",
    "tanniecombo.png": "../Images/FacesCloseUpsLandscape/tanniecombo.png",
    "snorcombo.png": "../Images/FacesCloseUpsLandscape/snorcombo.png",
    "mond2.JPG": "../Images/FacesCloseUpsLandscape/mond2.JPG",
    "tannie1.jpg": "../Images/FacesCloseUpsLandscape/tannie1.jpg",
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
                        <div key={index} className="col-lg-6 mb-3">
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
                        <div key={index} className="col-lg-6 mb-3">
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
                        <div key={index} className="col-lg-6 mb-3">
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
