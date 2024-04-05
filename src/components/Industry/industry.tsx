import "@components/Industry/industry.css";
import { industryContent } from "@components/DummyData/dummydata";
const industry = () => {
  return (
    <>
      <section id="industry">
        <div className="right-effects"></div>
        <div className="left-effects"></div>
        <div id="heading">
          <h1>Industries We Serve</h1>
        </div>
        <div id="serv">
          {industryContent.map((item) => (
            <div className="cardBox">
              <div className="card">
                <img width="50" height="50" src={item.Img} alt="property" />
                <h5>{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default industry;
