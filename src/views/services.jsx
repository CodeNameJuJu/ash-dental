import React from 'react';
import { Link } from 'react-router-dom'
import '../Main.css';
import { treatments } from '../data/treatmentData';


/* Maak components vir die Services page wat in die cards gaan gebruik vir elke employee */

function Section({ name, displayName, image, path, bio }) {
    return (
        <div className='row mt-2 pt-2 mb-2 pb-2'>
            <div className='col-sm-8'>
                <section>
                    <h3 className='section-title mb-2 h1 text-center header-col'>{name}</h3>
                </section>
                <p>{bio}</p>
            </div>
            <img className='col-sm-4 mb-5 pb-5' src={image} alt={name} />
            <Link className="nav-link" to={`/services/${path}`} title='Home'>
                Read More
            </Link>
        </div>
    );
}

function Services() {


    // Fetch the data for the specified treatment member
    const treatment = treatments;

    return (
        <div className='container'>
            <section>
                <br />
                <br />
                <h1 className='section-title mb-2 text-center'>Our services!</h1>
            </section>
            <div>
                {treatment.map((treat, index) => (
                    <div className='mb-5 pb-5' key={index}>
                        <Section
                            name={treat.displayName}
                            image={treat.image}
                            bio={treat.bio}
                            path={treat.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services;