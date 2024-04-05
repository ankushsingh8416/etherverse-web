import "@components/Service/service.css";
import { servicecontent } from "@components/DummyData/dummydata";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import Modal from "@components/Modal/Modal";

const Service = () => {
  const [OpenModal, setOpenModal] = useState(false)
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section id="service">
        <div className="right-effects"></div>
        <div className="left-effects"></div>
        <div id="heading">
          <h1>Our Services</h1>
        </div>
        <div className="service-content">
          <div
            className="content__box"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {servicecontent.map((item: any) => (
              <div className="content__box_heading">
                <div data-aos="zoom-in">
                  <h4>
                    {/* <span>
                      <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </span> */}

                    <>{item.MainHeading}</>
                  </h4>
                  <p>{item.Subheading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="btn__service">
            <a onClick={() =>setOpenModal(true)} style={{cursor:'pointer'}}>
              <i className="fa-solid fa-phone"></i> Talk to us today
            </a>
          </div>
        <div className="service__sec">
          <h3>Welcome to Ether Verse</h3>
          <div id="service__box__second">
            <div className="service__sec_content">
              <div id="heading">
                <h1>Where We Ignite Evolution</h1>
              </div>
              <p>
                Uncover the potential of blockchain to revolutionize enterprise
                and institutional processes. Ether Verse, a forefront blockchain
                development company, utilizes decentralization and smart
                contracts to craft scalable applications across diverse assets. <br />
                Our team of experts offers premium blockchain development
                services, guaranteeing transparency and efficiency. Dive into
                our proficiency in DeFi, Metaverse, DAOs, Exchanges & wallets,
                cryptocurrencies, NFTs, and more. <br /> Explore the future with Ether
                Verse.
              </p>
              <div className="btn__service">
            <a onClick={() =>setOpenModal(true)} style={{cursor:'pointer'}}>
              <i className="fa-solid fa-phone"></i> Let's work together
            </a>
          </div>
            </div>
            <div className="service__sec_img">
              <img
                src="./images/welcome.webp"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
        
      </section>
      <Modal OpenModal={OpenModal} setOpenModal={setOpenModal} />
    </>
  );
};
export default Service;
