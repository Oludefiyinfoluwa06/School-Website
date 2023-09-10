import React from 'react'

const ApplyNow = () => {
  return (
      <form className='apply'>
          <h3 style={{ marginBottom: '20px' }}>Apply Now</h3>
        <div className="input-box">
            <label>Firstname</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <label>Lastname</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <select style={{ width: '100%', border: 0, margin: '0 0 20px 0', fontSize: '15px', outline: 'none', borderBottom: '2px solid #cfcfcf', paddingBottom: '40px' }}>
                <option value="select">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div className="input-box">
            <label>Email</label>
            <input type="email"/>
        </div>
        <div className="input-box">
            <label>Phone Number</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <label>Nationality</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <label>State</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <label>Home Address</label>
            <input type="text"/>
        </div>
        <div className="input-box">
            <label>How did you know about us</label>
            <textarea></textarea>
        </div>
        <div className="input-box">
            <label>Upload your WAEC or NECO Result</label>
            <input type="file" style={{ borderBottom: 0 }} />
          </div>
          
          <button style={{ padding: '10px 17px', background: '#0b8219', border: 0, color: '#fff', marginTop: '20px' }}>Apply Now</button>
    </form>
  )
}

export default ApplyNow
