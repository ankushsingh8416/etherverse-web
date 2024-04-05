import { ourprojects } from "@components/DummyData/dummydata";
import "@components/Projects/project.css";

const AllProject = () => {
  return (
    <>
      <section id="project">
        <div className="right-effects"></div>
        <div className="left-effects"></div>

        <div id="project__section_box">
          {ourprojects.map((item) => (
            <div id="project__box">
              <a href={item.url} target="_blank">
                <h1>
                  {item.No} <span>{item.Heading}</span>{" "}
                </h1>
                <h2>{item.SubHeading}</h2>
                <div id="project__para">
                  <p>
                    {item.Content}
                  </p>
                </div>
                <div className="project-img">
                  <img src={item.Image} alt="" />
                </div>
              </a>
            </div>))}
        </div>
      </section>
    </>
  );

}
export default AllProject;

