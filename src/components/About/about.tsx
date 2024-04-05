import "@components/About/about.css";
import { aboutcontent } from "@components/DummyData/dummydata";



const About = () => {
  return (
    <>
      <section id="about">
        <div className="left-effects"></div>
        <div className="right-effects"></div>
        <div id="Blockimg">
          <img
            src="./images/Aboutus.webp"
            alt=""
          />
        </div>
        <div className="container">
          {aboutcontent.map((item: any) => (
            <div className="row">
              <div className="about-content">
                <h2>{item.MainHeading}</h2>
                <p> {item.Subheading}</p>
              </div>
              <div id="about__img">
                <img src={item.Image} alt="" width="100%" height="350px"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default About;
