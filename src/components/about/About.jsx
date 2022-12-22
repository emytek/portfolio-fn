import "./about.css";
import Award from "../../img/award.png";
import CV from "../../img/CV.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="/img/emy4.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        A versatile software developer passionate about web technologies.
        </p>
        <p className="a-desc">
          Experienced with a strong foundation in software engineering and programming principles in 
          developing, testing, and debugging code; designing user interfaces, <br />
          <strong>Education:</strong><p>Masters in Geographic Information System- MGIS | Msc</p>
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2022</h4>
            <p className="a-award-desc">
              Web Technologies: Javascript, React js, Node js, Express, MongoDB, Vue js, MySql, Next js, Nuxt.
            </p>
            <a href={CV} className="bn">Download CV </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
