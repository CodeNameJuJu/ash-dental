import React from 'react';
import { Link } from 'react-router-dom'
import '../Main.css';
import { teamMembersDetails } from '../data/teamMembersData';


/* Maak components vir die teams page wat in die cards gaan gebruik vir elke employee */

function Card({ name, displayName, image, path, bio }) {
    return (
        <div className="card border-0 shadow" style={{ width: '100%', textAlign: 'center' }}>
            <img className="card-img-top" height="50%" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-truncate">{bio}</p>
                <Link className="nav-link" to={`/teams/${path}`} title='Home'>
                    Read More
                </Link>
            </div>
        </div>
    );
}

function Teams() {

    const teamMembers = teamMembersDetails;

    return (
        <div className='container'>
            <section>
                <br />
                <br />
                <h2 className='section-title mb-2 text-center'>Meet our team of experts!</h2>
            </section>
            <div className='row card-padding'>
                {teamMembers.map((member, index) => (
                    <div className='col-sm-4 mb-5 pb-5' key={index}>
                        <Card
                            name={member.displayName}
                            image={member.image}
                            bio={member.bio}
                            path={member.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Teams;