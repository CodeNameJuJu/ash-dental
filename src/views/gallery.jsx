import React from 'react';
import LazyLoad from 'react-lazyload';
import '../Main.css';

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
                    {/* Image 1 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-378.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 2 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-69.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 3 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-370.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 4 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-358.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 5 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-3691.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 6 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-38.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                </div>
            </div>
            {/* Second set of images */}
            <div className="container">
                <h2 className="brown mt-4 pt-4 mb-4 pb-4">Smile in Progress</h2>
                <div className="row mb-5 pb-5">
                    {/* Image 1 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-43.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 2 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-228.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 3 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-223.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 4 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-231.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 5 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-267.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 6 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/Low/ASH DENTAL_content_MARCH'24-1061.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 7 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-31.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 8 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-18.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 9 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-44.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 10 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/Practice/High/ASH DENTAL_content_MARCH'24-83.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                </div>
            </div>
            {/* Last set of images */}
            <div className="container">
                <h2 className="brown mt-4 pt-4 mb-4 pb-4">Transforming Smiles, One Patient at a Time</h2>
                <div className="row">
                    {/* Image 1 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/FacesCloseUpsLandscape/tannie1.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 2 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/FacesCloseUpsLandscape/tannie2.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 3 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/FacesCloseUpsLandscape/mond1.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                    {/* Image 4 */}
                    <div className="col-lg-6 mb-3">
                        <LazyLoad height={200} once>
                            <img src="../Images/FacesCloseUpsLandscape/tannie3.jpg" className="img-fluid gallery-image" alt="Placeholder" />
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

// ******************************************************************* EOF ******************************************************************************
