import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(timelineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        maxHeight: "100%",
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Splunk (a Cisco company)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Investigated and resolved performance and reliability issues in large-scale distributed systems, analyzing cross-node latency and service-level bottlenecks affecting 200,000+ daily users. Probed distributed system logs using advanced telemetry tools to troubleshoot and pinpoint the root cause of three critical system performance bottlenecks, contributing to a 10ms reduction in API response time.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Assistant, AI Systems Lab</h4>
                <h5>USC Viterbi School of Engineering</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed a high-performance RESTful inference service using C++17 and JavaScript, integrating AI models to meet evolving business requirements for real-time applications. Improved system latency by 20% through refactoring data pipelines and model routing logic, meeting strict reliability and security standards for time-sensitive customer experience applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Aarvi Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed machine learning anomaly detection pipelines with AWS Lambda and Azure Functions for real-time monitoring, identifying five data quality issues during SQL validation processes. Transformed raw IoT sensor readings into actionable insights, achieving a 25% reduction in inference latency by streamlining data pipelines and optimizing serverless function execution times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
