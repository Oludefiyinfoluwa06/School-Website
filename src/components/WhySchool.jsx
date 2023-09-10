import { whySchool } from "../constants"

const WhySchool = () => {
  return (
    <div className="content">
      <h1>Why School?</h1>
      <div className="reasons">
        {whySchool.map(reason => (
          <div className="reason" key={reason.id}>
            <div className="icon">
              {reason.icon}
            </div>
            <h2>{reason.title}</h2>
            <p>{reason.reason}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhySchool