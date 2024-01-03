import React from 'react';
import '../Main.css';
import { technologyData } from '../data/technologyData';

/* Maak components vir die Services page wat in die cards gaan gebruik vir elke employee */

function Tech({ name, displayName, image, desc }) {
    return (
        <div className='row mt-2 pt-2 mb-2 pb-2'>
            <img className='col-sm-4 mb-5 pb-5' src={image} alt={name} />
            <div className='col-sm-8'>
                <section>
                    <h3 className='section-title mb-2 h1 text-center header-col'>{name}</h3>
                </section>
                <p>{desc}</p>
            </div>
        </div>
    );
}

function Technology() {

    const TechData = technologyData;

    return (
        <div className='container'>
            <section>
                <br />
                <br />
                <h1 className='section-title mb-2 text-center'>Our Technology!</h1>
            </section>
            <div>
                {TechData.map((right, index) => (
                    <div className='mb-5 pb-5' key={index} >
                        <Tech
                            name={right.displayName}
                            image={right.image}
                            desc={right.desc}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Technology;