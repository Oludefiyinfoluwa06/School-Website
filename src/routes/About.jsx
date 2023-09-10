//components
import AboutInfo from "../components/AboutInfo";
import AboutParts from "../components/AboutParts";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="pages">
        <h2 className="title">About us</h2>
      </div>
      <AboutInfo />
      <MissionVision />
      <AboutParts />
      <Footer />
    </>
  )
}

export default About