import React from 'react';
import { FaCalendar, FaCertificate, FaHome } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

import Footer from '../components/Footer';

const ProgramDetails = () => {
    const { id } = useParams();
    const program = useLoaderData();

    // const handleDownload = () => {
    //     fetch('').then(res => {
    //         res.blob().then(blob => {
    //             const fileURL = window.URL.createObjectURL(blob);
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'sample.pdf';
    //             alink.click();
    //         })
    //     })
    // }

  return (
    <>
      <div className="program-details">
        <h1>{program.program}</h1>
        <h3>{program.title}</h3>
        <p>{program.info}</p>
        <div className="total-info">
            <div className="quick-info">
                <div className="icon">
                    <FaHome />
                </div>
                <div className="info">
                    <h3>Faculty</h3>
                    <p>{program.faculty}</p>
                </div>
            </div>
            <div className="quick-info">
                <div className="icon">
                    <FaCertificate />
                </div>
                <div className="info">
                    <h3>Degree</h3>
                    <p>{program.certification}</p>
                </div>
            </div>
            <div className="quick-info">
                <div className="icon">
                    <FaCalendar />
                </div>
                <div className="info">
                    <h3>Expected Duration</h3>
                    <p>{program.duration}</p>
                </div>
            </div>
        </div>
        <h1 style={{ marginTop: '40px' }}>Program Details</h1>
        <div className="details">
            <div className="detail">
                <p><b>Expected Duration</b>: {program.duration}</p>
                <p style={{ marginTop: '15px' }}>{program.details}</p>
                <h3 style={{ marginTop: '15px' }}>Curriculum</h3>
                <p>{program.curriculum}</p>
            </div>
            <img src={program.imageURL} alt={program.program} />
        </div>
        <h1 style={{ marginTop: '40px' }}>Admission Requirements</h1>
        <div className="requirements">
            <p>Entry or admission into {program.program} program in this institution calls for the following requirements listed below: </p>
            <p style={{ marginTop: '20px' }}><b>Direct entry</b> applicants are those who have not attended a post-secondary institution or have completed fewer than 24 credit hours at a recognized university or college.</p>
            <p>Click on the button below to download the PDF that gives more information on the requirements needed for direct entry</p>
            <button style={{ padding: '8px 12px', background: '#0b8219', border: 0, color: '#fff', cursor: 'pointer', marginTop: '10px' }}>Download PDF</button>
            <p style={{ marginTop: '20px' }}><b>Advanced entry</b> applicants are those who have completed one year (24 credit hours) or more of studies in another faculty at the University of Manitoba or another recognized post-secondary institution.</p>
            <p>Click on the button below to download the PDF that gives more information on the requirements needed for direct entry</p>
            <button style={{ padding: '8px 12px', background: '#0b8219', border: 0, color: '#fff', cursor: 'pointer', marginTop: '10px' }}>Download PDF</button>
        </div>
        <p style={{ marginTop: '20px' }}>Note that meeting these requirements does not guarantee acceptance into the program.</p>
      </div>
        <Footer />
    </>
  )
}

export default ProgramDetails

export const programDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`http://localhost:4000/undergraduatePrograms/${id}`);
    if (!res.ok) {
        throw Error("Could not find that program");
    }
    return res.json();
}
