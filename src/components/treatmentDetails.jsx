import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { treatmentData } from '../data/treatmentData';

function TreatmentDetails() {

    const [sliderValue, setSliderValue] = useState(75); // Initialize slider position

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const { treatId } = useParams();

    // Fetch the data for the specified treatment member
    const treatment = treatmentData[treatId];

    if (!treatment) {
        return <div>Treatment not found.</div>;
    }

    return (
        <div className='container  mt-5 pt-5 mb-5 pb-5'>
            <div className='row d-flex justify-content-center'>
                <div className='row col-sm-8 ml-5 pl-5'>
                    <section>
                        <h2 className='container text-center section-title mb-2'>{treatment.name}</h2>
                    </section>
                    <p>{treatment.bio}</p>
                    <Link className="nav-link pt-5" to="/services" title='Home'>
                        Treatments
                    </Link>
                    <Link className="nav-link pb-5" to="/" title='Home'>
                        Home
                    </Link>
                    <p> Slide the bar to see some magic</p>
                    <input className="slider mb-5"
                        type="range"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        min={0}
                        max={100}
                    />
                </div>
                <div className="row image-cropper-container text-center ">
                    <div className="image-container">
                        <div
                            className="image1"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: `${sliderValue}%`,
                                height: '100%',
                                overflow: 'hidden',
                                zIndex: 1,
                            }}
                        >
                            <img
                                src={treatment.beforeImage}
                                alt={treatment.name}
                            />
                        </div>
                        <div
                            className="image2"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={treatment.afterImage}
                                alt={treatment.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='very-bad-practice-do-not-do-this'></div>
        </div>
    );
}


export default TreatmentDetails;