import "@components/Footer/footer.css";
import Modal from "@components/Modal/Modal";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [OpenModal, setOpenModal] = useState(false)
  const [emailError, setEmailError] = useState("");
   const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setLoading(false);
        setEmail("");
        setEmailError("Thank you for subscribing!");

      } else if (!email) {
        setLoading(false);
        setEmailError("Please enter a valid email address");

      } else {
        setLoading(false);
        setEmailError("An error occurred or you already have subscribed!");

      }
    } catch (error) {
      setLoading(false);
      setEmailError(
        "There was an error subscribing to the newsletter. Hit me up info@etherverse.in and I'll add you the old fashioned way :("
      );

    }
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setEmailError("")
  };
  return (
    <>
      <section id="footer">
        <div className="left__content">
          <p>
            We're a tech company that specializes in blockchain gaming, AI, and
            Unity game development. Our innovative solutions help businesses
            grow. Experience our exceptional service today.
          </p>

          <ul id="social">
            <li>
              <a href="https://discord.gg/Acb3NqBYQV" target="_blank">
                <i className="fa-brands fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/VerseEther" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ether-verse/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/etherverse1" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ether_verse/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@media_83810" target="_blank">
                <i className="fa-brands fa-medium"></i>
              </a>
            </li>
          </ul>

          <div className="btn__service">
            <a onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
              <i className="fa-solid fa-phone"></i> Contact us now
            </a>
          </div>
        </div>
        <div className="center__content">
          <ul>
            <h2>
              <b>Company</b>
            </h2>
            <li>
              <a onClick={() =>navigate("/about")} style={{cursor:"pointer"}}>About us</a>
            </li>
            {/* <li>
              <a onClick={() => handleScroll("project")} style={{cursor:"pointer"}}>Our Projects</a>
            </li> */}
            {/* <li>
              <a href="javascript:;">Blog</a>
            </li> */}
          </ul>

          <ul>
            <h2>
              <b>Legal</b>
            </h2>
            <li>
              <a href="javascript:;">Terms & Conditions</a>
            </li>
            <li>
              <a href="javascript:;">Privacy Policy</a>
            </li>
            <li>
              <a  onClick={() =>navigate("/faq")}style={{cursor:"pointer"}} >FAQ</a>
            </li>
          </ul>
        </div>
        <div className="right__content">
          <div id="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <form action="">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" onClick={handleSubscribe}> {loading ? (
                <i className="fa-solid fa-spinner fa-spin-pulse"></i>
              ) : (
                <>Subscribe</>

              )}</button>
              <p style={{ color: "red", fontSize: "12px", marginBottom: ".5rem" }}>{emailError}</p>
            </form>
            <p className="subs__content">
              Don't Miss a Beat: Subscribe to Our Newsletter Today!
            </p>
          </div>
        </div>
      </section>
      <div className="last__footer">
        <p>© Copyright 2023 EtherVerse. All Rights Reserved</p>
      </div>
      <Modal OpenModal={OpenModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default footer;
