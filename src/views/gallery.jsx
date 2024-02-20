import React from 'react';
import '../Main.css';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
    return (
        <div className="text-center row">
            <h1 className='text-color-gold'>Gallery</h1>
            <p className="lead col-md-12 col-sm-10 text-start mb-4 pb-4">
                Explore our gallery and witness the transformative journeys we've embarked on with our patients. Each image tells a story of precision, artistry,
                and the pursuit of dental excellence. Join us on a visual tour that reflects the harmonious blend of design, technology,
                and the personalised touch that defines ASH Dental.
            </p>
            <h3 className='brown mt-4 pt-4'>Transformations</h3>
            <div className="container mt-4 pt-4 mb-4 pb-4">
                {/* First Row */}
                <div className="row">
                    {/* Image 1 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/FacesCloseUpsLandscape/tannie1.jpg" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                    {/* Image 2 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/FacesCloseUpsLandscape/tannie2.jpg" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                </div>
                {/* First Row */}
                <div className="row">
                    {/* Image 1 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/FacesCloseUpsLandscape/mond1.jpg" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                    {/* Image 3 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/FacesCloseUpsLandscape/tannie3.jpg" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                </div>
                <h3 className='brown mt-4 pt-4 mb-4 pb-4'>Practice</h3>
                {/* Image Grid */}
                {/* Second Row */}
                <div className="row mb-5 pb-5">
                    {/* Image 1 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/Technology/Teeth whitening (2).png" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                    {/* Image 2 */}
                    <div className="col-md-6 mb-2">
                        <img src="../Images/Dental/5.png" className="img-fluid" alt="Placeholder" style={{ height: '450px', width: '600px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
