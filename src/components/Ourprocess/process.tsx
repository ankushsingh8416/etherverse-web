import "@components/Ourprocess/process.css";
import { useState } from "react";
const Process = () => {
  const [sectionOne, SetsectionOne] = useState(false);
  const [sectionTwo, SetsectionTwo] = useState(false);
  const [sectionThree, SetsectionThree] = useState(false);
  const [sectionFour, SetsectionFour] = useState(false);
  const [sectionFive, SetsectionFive] = useState(false);
  return (
    <>
      <section id="process">
        <div className="right-effects"></div>
        <div className="left-effects"></div>

        <div id="heading">
          <h1>Our Process</h1>
        </div>
        <p className="process__para">
          Our 5-step process is designed to be a collaborative journey, bringing
          your innovative ideas to life while ensuring a seamless and
          client-focused experience from start to finish.
        </p>

        <div className="container">
          <div className="left__process">
            <div className="border">
              <img
                width="250"
                height="250"
                src="./images/blockchain.png"
                alt="blockchain"
              />
            </div>
          </div>

          <div className="right__process">
            <div
              className="first__wrap"
              onClick={() => {
                SetsectionOne(!sectionOne);
                SetsectionFour(false);
                SetsectionThree(false);
                SetsectionTwo(false);
                SetsectionFive(false);
              }}
            >
              <div className="content__pro">
                <h6>1. Connect & Explore </h6>
              </div>
            </div>
            {!sectionOne && (
              <>
                <div className="process__content">
                  <p>
                    Begin your journey with Ether Verse by getting in touch with
                    us. Reach out, share your vision, and discover how our
                    innovative solutions can transform your ideas into reality. 
                  </p>
                </div>
              </>
            )}
            <div
              className="first__wrap"
              onClick={() => {
                SetsectionTwo(!sectionTwo);
                SetsectionOne(true);
                SetsectionThree(false);
                SetsectionFour(false);
                SetsectionFive(false);
              }}
            >
              <div className="content__pro">
                <h6>2. Discovery & Consultation</h6>
              </div>
            </div>
            {sectionTwo && (
              <>
                <div className="process__content">
                  <p>
                    Schedule an initial discovery call with our experienced
                    team. Together, we'll delve deep into your requirements,
                    understand your objectives, and set the foundation for a
                    customized solution. 
                  </p>
                </div>
              </>
            )}
            <div
              className="first__wrap"
              onClick={() => {
                SetsectionThree(!sectionThree);
                SetsectionTwo(false);
                SetsectionFour(false);
                SetsectionFive(false);
                SetsectionOne(true);
              }}
            >
              <div className="content__pro">
                <h6>3. Tailored Proposals & Pricing </h6>
              </div>
            </div>
            {sectionThree && (
              <>
                <div className="process__content">
                  <p>
                    After our consultation, you'll receive a comprehensive
                    proposal and pricing structure. This document outlines our
                    commitment to bringing your vision to life, complete with
                    transparent costs and timelines. {" "}
                  </p>
                </div>
              </>
            )}
            <div
              className="first__wrap"
              onClick={() => {
                SetsectionFour(!sectionFour);
                SetsectionThree(false);
                SetsectionTwo(false);
                SetsectionOne(true);
                SetsectionFive(false);
              }}
            >
              <div className="content__pro">
                <h6>4. Seamless Onboarding </h6>
              </div>
            </div>
            {sectionFour && (
              <>
                <div className="process__content">
                  <p>
                    Once you're ready to proceed, we'll seamlessly onboard you
                    into the Ether Verse experience. Expect a smooth transition,
                    detailed project planning, and clear communication
                    throughout. {" "}
                  </p>
                </div>
              </>
            )}
            <div
              className="first__wrap"
              onClick={() => {
                SetsectionFive(!sectionFive);
                SetsectionFour(false);
                SetsectionThree(false);
                SetsectionTwo(false);
                SetsectionOne(true);
              }}
            >
              <div className="content__pro">
                <h6>5. Prototype & Feedback Loop</h6>
              </div>
            </div>
            {sectionFive && (
              <>
                <div className="process__content">
                  <p>
                    As a testament to our dedication to swift progress, we'll
                    swiftly deliver the first prototype of your project, based
                    on the proposal. Your feedback and vision refinement are
                    crucial, and we'll work closely with you to ensure your
                    satisfaction. {" "}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Process;
