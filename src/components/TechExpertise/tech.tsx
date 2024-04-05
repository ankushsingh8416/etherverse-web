import { data } from "@components/DummyData/dummydata";
import "./tech.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TechExpertise = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="skils" id="skils">
        <div id="heading">
          <h1>Our Blockchain Tech Expertise</h1>
        </div>

        <div className="skils-container">
        {data.map((item) => (

            <div className="skill__box">
              <img src={item.icon} alt="icon" loading="lazy" width="80px"/>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        
      </section>
    </>
  );
};

export default TechExpertise;
