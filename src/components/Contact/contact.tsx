import "@components/Contact/contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
      <div className="left-effects"></div>
        <div className="right-effects"></div>
        <div className="left_contact">
          <p className="contact_content">
            Get in touch and let me know how i can help. Fill out the form and
            i’ll be in touch as soon as possible.
          </p>

          <div className="contact-info">
            <div>
              <div className="address">
                <h4>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  Address:
                </h4>
                <p>941 Saqrqorish Road, alandalos, grnata, wa 47122-4194</p>
              </div>

              <div className="address">
                <h4>
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  Phone:
                </h4>
                <p>(01) 234 567 789 </p>
                <p>(09) 765 432 200</p>
              </div>

              <div className="address">
                <h4>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  Email:
                </h4>
                <a href="javascript:;">info@jack.com</a>
                <a href="javascript:;">info@jack.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="right_contact">
          <form action="" id="form">
            <label htmlFor="Name">Name :</label>
            <div className="inputBox">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <input type="text" placeholder="Enter Your Name" required />
            </div>

            <label htmlFor="Email">Email :</label>
            <div className="inputBox">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input type="email" placeholder="Enter Your Email" required />
            </div>
{/* 
            <label htmlFor="Phone">Phone :</label>
            <div className="inputBox">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <input type="text" placeholder="Phone Number" />
            </div> */}

            <label htmlFor="Message">Message :</label>
            <div className="inputBox" id="textarea">
              <span>
                <i className="fa-solid fa-message"></i>
              </span>
              <textarea name="" id="" placeholder="Messages" required></textarea>
            </div>
            <button type="submit">Submit</button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;
