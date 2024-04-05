import "@components/Owner/owner.css";

const Owner = () => {
  return (
    <>
<div className="owner_box">
<div className="left-effects"></div>
        <div className="right-effects"></div>
      <div id="owner">
        <div className="owner_img">
          <img src="https://www.metadogeunity.in/images/team/t3.webp" alt="" />
        </div>
        <div className="owner_content">
          <h1>FOUNDER & CEO</h1>
          <p>ASHISH JANGHEL</p>
          <ul className="owner_link">
            <li>
              <a href="https://twitter.com/AshishJanghel13" target="_blank"><i className="fab fa-x-twitter"></i></a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ashish-janghel/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
</div>
    </>
  );
};
export default Owner;
