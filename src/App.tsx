import Header from "@components/Header/header";
import "./App.css";
import TechExpertise from "@components/TechExpertise/tech";
import Service from "@components/Service/service";
import Industry from "@components/Industry/industry";
import Process from "@components/Ourprocess/process";
import Project from "@components/Projects/project";
import Owner from "@components/Owner/owner";

function App() {
  return (
    <>
      <Header />
      <Service />
      <Project />
      <TechExpertise />
      <Industry />
      <Process />
      <Owner />
    </>
  );
}

export default App;
