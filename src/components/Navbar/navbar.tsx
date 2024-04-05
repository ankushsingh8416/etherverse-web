import { useNavigate, useLocation } from "react-router-dom";
import "@components/Navbar/navbar.css";
import { useState } from "react";
import Modal from "@components/Modal/Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [OpenModal, setOpenModal] = useState(false);
  // const handleScroll = (targetId: string) => {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "start",
  //     });
  //   }
  // };

  const menuOpen = () => {
    document.getElementById("menu__bar")?.classList.add("active");
  };

  const closemenu = () => {
    document.getElementById("menu__bar")?.classList.remove("active");
  };

  return (
    <>
      <header className="fixed">
        <div className="container">
          <div className="logo">
            <img src="./images/etherverse.png" alt="" />
          </div>
          <div className="link">
            <nav>
              <ul id="menu__bar">
                <li>
                  <a
                    onClick={() => {
                      navigate("/");
                      closemenu();
                    }}
                    className={pathname === "/" ? "active" : ""}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/about");
                      closemenu();
                    }}
                    className={pathname === "/about" ? "active" : ""}
                  >
                    About us
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      navigate("/faq");
                      closemenu();
                    }}
                    className={pathname === "/faq" ? "active" : ""}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/Blog");
                      closemenu();
                    }}
                    className={pathname === "/Blog" ? "active" : ""}
                  >
                    Blog{" "}
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      navigate("/Contact");
                      closemenu();
                    }}
                    className={pathname === "/Contact" ? "active" : ""}
                  >
                    Contact
                  </a>
                </li>
                {/*
   <li>
                <a onClick={closemenu}>Services</a>
              </li>
              <li>
                <a href="javascript:;" onClick={closemenu}>Contact us</a>
              </li>
              
              <li>
                <a href="javascript:;" onClick={closemenu}>Blog</a>
              </li> */}
                <span id="cross" onClick={closemenu}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
                <div className="button">
                  <a
                    onClick={() => setOpenModal(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <i className="fa-brands fa-rocketchat"></i>
                    </span>
                    Talk to us
                  </a>
                </div>
              </ul>
            </nav>
          </div>
          <div className="button">
            <a onClick={() => setOpenModal(true)} style={{ cursor: "pointer" }}>
              <span>
                <i className="fa-brands fa-rocketchat"></i>
              </span>
              Talk to us
            </a>
          </div>

          <div id="menu__bar-icon" onClick={menuOpen}>
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </header>
      <Modal OpenModal={OpenModal} setOpenModal={setOpenModal} />
    </>
  );
};
export default Navbar;
