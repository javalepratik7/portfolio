import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Walstar Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a real-time education platform using React.js, Node.js, and WebSockets for live communication.
              Integrated secure RESTful APIs with JWT authentication and Zoom APIs for automated meeting creation.
              Used AWS (S3, SES, SNS) for media storage and notifications while developing responsive UI with React.js and Redux.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Full Stack Developer</h4>
                <h5>GlobalBees Brands Private Limited</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed internal automation systems for tracking multi-platform stock movement and sales performance. Built a centralized inventory dashboard consolidating stock, sales, and PO data across platforms like Amazon and Flipkart. Reduced manual database and spreadsheet checks by centralizing operational data into a single platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
