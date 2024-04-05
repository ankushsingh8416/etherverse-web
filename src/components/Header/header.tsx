import React ,{useState} from "react";
import "@components/Header/header.css";
import { TypeAnimation } from "react-type-animation";
import Modal from "@components/Modal/Modal";

const Header: React.FC = () => {
  const [OpenModal, setOpenModal] = useState(false)
  const maxWidth: number = window.screen.width;
  const maxHeight: number = window.screen.height;

  function Random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function Shadows(amount: number): string {
    let shadow = "";
    for (let i = 0; i < amount; i++) {
      shadow +=
        Random(0, maxWidth) +
        "px " +
        Random(0, maxHeight) +
        "px " +
        `rgb(255,${Random(0, 256)},${Random(0, 256)}), `;
    }
    shadow +=
      Random(0, maxWidth) +
      "px " +
      Random(0, maxHeight) +
      "px " +
      `rgb(255,${Random(0, 256)},${Random(0, 256)})`;
    return shadow;
  }

  for (let i = 1; i <= 3; i++) {
    document.documentElement.style.setProperty("--shadows" + i, Shadows(100));
  }
  return (
    <>
      <div id="hero">
        <div id="space">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="btn__fixed">
        <a onClick={() => setOpenModal(true)} style={{cursor:"pointer"}}>
          <i className="fa-solid fa-phone"  ></i> Schedule a call
        </a>
      </div>
        <TypeAnimation
          sequence={[
            "Empowering Tomorrow: Blockchain and AI Synergy Unleashed.",

            "Pioneering Web 3.0: Where Blockchain Meets Artificial Intelligence.",

            "Innovate with Confidence: Expertise in Gaming, Metaverse & AI  Development.",

            "Beyond Boundaries: Crafting Web 3.0 Experiences with Blockchain Mastery.",

            "Code the Future: Unleashing Web 3.0 Potential with AI-Driven Blockchain.",
          ]}
          wrapper="h1"
          style={{  display: "inline-block", color: "red" }}
          repeat={Infinity}
          className="typing-text"
        />

        {/* <img
          src="./images/header.webp"
          alt=""
          height="100%"
          width="100%"
        /> */}
        <div id="ser-box">
          <div>
            <img src="./images/Binance.png" alt="" />
            <h2>Binance</h2>
          </div>

          <div>
            <img src="./images/Binance.png" alt="" />
            <h2>Binance</h2>
          </div>

          <div>
            <img src="./images/Binance.png" alt="" />
            <h2>Binance</h2>
          </div>

          <div>
            <img src="./images/Binance.png" alt="" />
            <h2>Binance</h2>
          </div>
        </div>
      </div>
    <Modal OpenModal={OpenModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Header;
