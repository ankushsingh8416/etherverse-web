import "@components/Blog/blog.css";
import {useNavigate } from "react-router-dom";

function Blog() {
    const navigate= useNavigate();
  return (
    <>
      <div id="blog">
      <div className="left-effects"></div>
        <div className="right-effects"></div>
        <div id="heading">
          <h1>The Blog</h1>
        </div>
        <div className="blog_box">
          <div className="blogs" onClick={()=>navigate("/Blog1")}>
            <img src="./images/blogimg1.jpg" alt="" />
            <div className="blog_content">
              <h2>Building Future Technology Solutions </h2>
              <p>
                Ether Verse is a cutting-edge technology company that
                specializes in providing services in blockchain, AI & machine
                learning, metaverse, Unity game development, and digital
                marketing. With its innovative solutions, Ether Verse is helping
                businesses across various industries build the future they
                envision.
              </p>
            </div>
          </div>

          <div className="blogs" onClick={()=>navigate("/Blog2")}>
            <img src="./images/blogimg2.jpg" alt="" />
            <div className="blog_content">
              <h2>
                Ether Verse is into Blockchain Development, Play 2 Earn Games,
                AI, and Metaverse.
              </h2>
              <p>
                Discover the latest developments in blockchain technology,
                including decentralized applications, smart contracts, and
                supply chain solutions. Learn how blockchain is revolutionizing
                industries and creating new opportunities for innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
