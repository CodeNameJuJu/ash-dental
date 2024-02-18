import React from 'react';
import '../Main.css';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
    return (
        <div className="text-center">
            {/* Carousel */}
            <div
                id="carouselExample"
                className="carousel slide"
                style={{
                    backgroundImage: `url(/Images/Background%202.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '60vh',
                    overflow: 'hidden'
                }}
            >
                <div className='Car'>
                    <Carousel>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/1.png" text="First slide" alt='Sale1' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/7.png" text="First slide" alt='Sale2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '100%', width: '100%' }} src="/Images/Dental/8.png" text="First slide" alt='Sale3' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            {/* Image Grid */}
            <div className="container mt-4 pt-4 mb-4 pb-4">
                {/* First Row */}
                <div className="row">
                    {/* Image 1 */}
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 2 */}
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x200" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 3 */}
                    <div className="col-md-4 mb-2">
                        <img src="https://via.placeholder.com/400x400" className="img-fluid" alt="Placeholder" />
                    </div>
                </div>
                {/* Second Row */}
                <div className="row">
                    {/* Image 4 */}
                    <div className="col-md-6 mb-2">
                        <img src="https://via.placeholder.com/600x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 5 */}
                    <div className="col-md-6">
                        <div className="row">
                            {/* Nested Row */}
                            <div className="col-md-6 mb-2">
                                <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Placeholder" />
                            </div>
                            <div className="col-md-6 mb-2">
                                <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Placeholder" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Placeholder" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Row */}
                <div className="row">
                    {/* Image 6 */}
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x400" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 7 */}
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 8 */}
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Placeholder" />
                    </div>
                    {/* Image 9 */}
                    <div className="col-md-3 mb-2">
                        <img src="https://via.placeholder.com/300x500" className="img-fluid" alt="Placeholder" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
