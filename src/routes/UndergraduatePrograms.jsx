import React from 'react';

// rrd import
import { useLoaderData, Link } from 'react-router-dom';

// component import
import Footer from '../components/Footer';

const UndergraduatePrograms = () => {
    const programs = useLoaderData();

  return (
    <div className='course-programs'>
        <h2 className='u-title'>Programs we offer</h2>
        {programs.map(program => (
            <div className="pro-link">
                <Link to={program.id.toString()} key={program.id}>
                    <p>{program.program}</p>
                    <p><b>Certification</b>: {program.certification}</p>
                </Link>
            </div>
        ))}
        <Footer />
    </div>
  )
}

export default UndergraduatePrograms

// loader function
export const programsLoader = async () => {
    const res = await fetch('http://localhost:4000/undergraduatePrograms');
    if (!res.ok) {
        throw Error("Could not fetch programs");
    }
    return res.json();
}
