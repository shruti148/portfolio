import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHRUTI
              <br />
              <span>DHAMECHA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>

            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
            </h2>
            <div className="landing-education">
              <h4>🎓 Education</h4>
              <p>M.S. Computer Science, University of Southern California (2026)</p>
              <p>B.E. Information Technology, Mumbai University (Ranked 1st, Academic Excellence Award)</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
