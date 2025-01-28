import React from "react";
import { useInView } from 'react-intersection-observer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ourstory1 from "../../asstes/img/our-story/1.jpg";
import ourstory2 from "../../asstes/img/our-story/2.jpg";
import ourstory3 from "../../asstes/img/our-story/3.jpg";
import gallery_img from "../../asstes/img/gallery/1.jpg";
import gallery_img2 from "../../asstes/img/gallery/2.jpg";
import gallery_img3 from "../../asstes/img/gallery/3.jpg";
import gallery_img4 from "../../asstes/img/gallery/4.jpg";
import gallery_img5 from "../../asstes/img/gallery/5.jpg";
import gallery_img6 from "../../asstes/img/gallery/6.jpg";
import gallery_img7 from "../../asstes/img/gallery/7.jpg";
import gallery_img8 from "../../asstes/img/gallery/8.jpg";
import gallery_img9 from "../../asstes/img/gallery/9.jpg";
import gallery_img10 from "../../asstes/img/gallery/10.jpg";
import gallery_img11 from "../../asstes/img/gallery/11.jpg";
import gallery_img12 from "../../asstes/img/gallery/12.jpg";

function Gallery() {
  const students = [
    { id: 1, img: ourstory1, title: "Aerobics " },
    { id: 2, img: ourstory2, title: "Crossfit" },
    { id: 3, img: ourstory3, title: "Yoga" },
  ];
  const ImageData = [
    { id: 1, img: gallery_img, imgsecond: gallery_img },
    { id: 2, img: gallery_img2, imgsecond: gallery_img2 },
    { id: 3, img: gallery_img3, imgsecond: gallery_img3 },
    { id: 4, img: gallery_img4, imgsecond: gallery_img4 },
    { id: 5, img: gallery_img5, imgsecond: gallery_img5 },
    { id: 6, img: gallery_img6, imgsecond: gallery_img6 },
    { id: 7, img: gallery_img7, imgsecond: gallery_img7 },
    { id: 8, img: gallery_img8, imgsecond: gallery_img8 },
    { id: 9, img: gallery_img9, imgsecond: gallery_img9 },
    { id: 10, img: gallery_img10, imgsecond: gallery_img10 },
    { id: 11, img: gallery_img11, imgsecond: gallery_img11 },
    { id: 12, img: gallery_img12, imgsecond: gallery_img12 },
  ];

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>

      <div className="section-full site-bg-gray-light p-t120 p-b90">
        <Container>
          <div className="our-story-title-outer"></div>
          <Row className="justify-content-center">
            <Col lg={6} md={12}>
              <div className="section-head left wt-small-separator-outer">
                <h2>Our Story</h2>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="two-part-content">
                <div className="our-story-title">
                  <span>30 Years Of Experience in fitness</span>
                  <p>Train with the best experts in bodybuilding field.</p>
                </div>
                <div className="our-story-btn">
                  <a href="about-1.html" className="site-button site-btn-effect">
                    Learn More
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="section-content">
            <div className="our-story-block-outer">
              <Row className="d-flex justify-content-center">
                {students.map((ram) => {
                  return (
                    <Col lg={4} md={6} className="m-b30" key={ram.id}>
                      <div
                        className={`our-story-block ${storyInView ? 'animate__animated animate__slideInLeft' : ''}`}
                        ref={storyRef}
                      >
                        <div className="wt-media">
                          <img src={ram.img} alt="" />
                        </div>
                        <div className="our-story-content">
                          <span>{ram.title}</span>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="section-full p-t120 p-b90 bg-cover gallery-outer-full">
        <Container>
          <div className="section-head center wt-small-separator-outer when-bg-dark">
            <div className="wt-small-separator site-text-secondry">
              <div className="sep-leaf-left"></div>
              <div>Our Gallery</div>
            </div>
            <h2 className="wt-title">Powerful Ways To Do Excercise</h2>
          </div>
          <div className="section-content">
            <Row
              className={`mfp-gallery no-gutters row clearfix d-flex justify-content-center flex-wrap m-b30 ${galleryInView ? 'animate__animated animate__slideInRight' : ''}`}
              ref={galleryRef}
            >
              {ImageData.map((rp) => {
                return (
                  <Col lg={2} md={6} sm={6} key={rp.id}>
                    <div className="gallery-style-1">
                      <img src={rp.img} />
                      <div className="wt-info">
                        <a href={rp.imgsecond} className="mfp-link">
                          <i></i>
                        </a>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Gallery;
