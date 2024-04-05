import "@components/Projects/project.css";
import { useRef, useEffect } from "react";
import { ourprojects } from "@components/DummyData/dummydata";
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
const Project: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  const handleScroll = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        playVideo();
      } else {
        pauseVideo();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section id="project">
        <div className="right-effects"></div>
        <div className="left-effects"></div>
        <div id="heading">
          <h1>Our Projects</h1>
        </div>

        {/* <div id="project__section_box">
          <div id="project__box" className="meta__video">
            <a href="https://www.metadogeunity.in/" target="_blank">
              <h1>
                1. <span>Games</span>
              </h1>
              <h2>2D and 3D Games on Blockchain</h2>
              <div id="project__para">
                <p>
                  Play to earn games are a popular genre of blockchain-based
                  gaming that allows players to earn cryptocurrencies or NFTs by
                  participating in the game. They blend entertainment with
                  financial incentives, creating an engaging gaming experience.
                  Our team has built over 300+ games with blockchain
                  integration, NFT rewards, cross-platform play, hypercasual 2D
                  games, 3D options, in-game purchases with cryptocurrency, play
                  and earn mechanics, community, governance and social media
                  integration.
                </p>
              </div>
              <h2>ERC4337-Powered 2D and 3D Games</h2>
              <p>
                Our team has worked with various projects offering them ERC
                4337, the future of gaming. This has enabled the games to offer
                secure storage, automatic wallet integration, one-click
                transactions, gas fee elimination, enhanced security, and batch
                transactions.
              </p>
              <div className="project-img">
                <video
                  ref={videoRef}
                  src="./images/videos.mp4"
                  className="video"
                  loop
                  playsInline
                  preload="auto"
                ></video>
              </div>
            </a>
          </div>
        </div> */}


        <div id="project__section_box">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            loop={true}
            navigation={{
              nextEl: null,
              prevEl: null,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
             pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {ourprojects.map((item) => (
              <SwiperSlide>
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
                    <h2>{item.SuperSub}</h2>
                    <div id="project__para">
                      <p>
                        {item.SuperSubheading}
                      </p>
                    </div>
                    {item.video ? (
                      <div className="project-img">
                        <video
                          // ref={videoRef}
                          src={item.video}
                          className="video"
                          loop
                          // playsInline
                          controls
                          // preload="auto"
                        ></video>
                      </div>
                    ) : (
                      <div className="project-img">
                        <img src={item.Image} alt="" height='50%' width='50%'/>
                      </div>
                    )}



                  </a>

                </div>  </SwiperSlide>))}

          </Swiper>
        </div>

        {/* <div id="view_all_btn">
          <a onClick={() => navigate("/projects")}>
            View all Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div> */}
      </section>
    </>
  );
};

export default Project;
