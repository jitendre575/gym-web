import React from "react";
import teamimg from "../../asstes/img/team3/pic1.jpg";
import teamimg2 from "../../asstes/img/team3/pic2.jpg";
import teamimg3 from "../../asstes/img/team3/pic3.jpg";
import teamimg4 from "../../asstes/img/team3/pic4.jpg";
import teamimg5 from "../../asstes/img/team3/pic5.jpg";
import mediaimg from "../../asstes/img/video/media2.jpg";
import clientlogo from "../../asstes/img/client-logo-bg.png";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaPlay,
  FaTwitter,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
const data = [
  {
    img: teamimg,
    title: "Ronan",
    subtitle: "Caradio Trainer",
    icone1: <FaFacebookF />,
    icone2: <FaTwitter />,
    icone3: <FaLinkedinIn />,
    icone4: <FaPinterest />,
  },


  
  {
    img: teamimg2,
    title: "Brayden",
    subtitle: "Boxing Trainer",
    icone1: <FaFacebookF />,
    icone2: <FaTwitter />,
    icone3: <FaLinkedinIn />,
    icone4: <FaPinterest />,
  },
];
const data2 = [
  {
    img: teamimg3,
    title: "Marco",
    subtitle: "Dumbbell Trainer",
    icone1: <FaFacebookF />,
    icone2: <FaTwitter />,
    icone3: <FaLinkedinIn />,
    icone4: <FaPinterest />,
  },
  {
    img: teamimg4,
    title: "Devin",
    subtitle: "Fitness Trainer",
    icone1: <FaFacebookF />,
    icone2: <FaTwitter />,
    icone3: <FaLinkedinIn />,
    icone4: <FaPinterest />,
  },
];
function Trener() {
  return (
    <>
      <div className="section-full p-t120 p-b90 site-bg-gray-light">
        <Container>
          <div className="wt-separator-two-part">
            <Row className="row wt-separator-two-part-row">
              <Col lg={6} md={12} wt-separator-two-part-left>
                {/* <!-- TITLE START--> */}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left"></div>
                    <div>Our Trainer</div>
                  </div>
                  <h2 className="wt-title">We have Expert Team Members</h2>
                </div>
                {/* <!-- TITLE END--> */}
              </Col>

              <Col lg={6} md={12} classNameName="wt-separator-two-part-right">
                <p>
                  Our event unites athletic professionals and enthusiasts to
                  pursue a great goal. We create and promote initiatives that
                  enable people to become and remain physically active
                  regardless and challenge inequality of access to physical
                  activity.
                </p>
                <a href="about-1.html" className="site-button site-btn-effect">
                  View All Trainer
                </a>
              </Col>
            </Row>
          </div>

          <div className="section-content">
            <div className="team3-outer">
              <Row classNameName="justify-content-center">
                <Col lg={7} md={12} sm={12}>
                  <div>
                    <Row>
                      {data.map((user) => (
                        <Col lg="6" col-md-6 col-sm-12 m-b30>
                          <div className="wt-team-3">
                            <div className="wt-media">
                              <img src={user.img} alt="" />
                            </div>

                            <div className="wt-info">
                              <div className="team-detail">
                                <h3 className="m-t0 team-name">{user.title}</h3>
                                <span className="team-position">
                                  {user.subtitle}
                                </span>
                              </div>
                              <div className="team-social-center">
                                <ul className="team-social-bar">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone1}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone2}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone3}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone4}</i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  <div classNameName=" pt-4">
                    <Row>
                      {data2.map((user) => (
                        <Col lg="6" col-md-6 col-sm-12 m-b30>
                          <div className="wt-team-3">
                            <div className="wt-media">
                              <img src={user.img} alt="" />
                            </div>

                            <div className="wt-info">
                              <div className="team-detail">
                                <h3 className="m-t0 team-name">{user.title}</h3>
                                <span className="team-position">
                                  {user.subtitle}
                                </span>
                              </div>
                              <div className="team-social-center">
                                <ul className="team-social-bar">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone1}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone2}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone3}</i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i>{user.icone4}</i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Col>

                <Col lg={5} md={6} sm={12} className=" m-b30">
                  <div className="wt-team-3">
                    <div className="wt-media">
                      <img src={teamimg5} alt="" />
                    </div>

                    <div className="wt-info">
                      <div className="team-detail">
                        <h3 className="m-t0 team-name">Antonio</h3>
                        <span className="team-position">Bodybuilding Coach</span>
                      </div>
                      <div className="team-social-center">
                        <ul className="team-social-bar">
                          <li>
                            <a href="javascript:void(0);">
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i>
                                <FaTwitter />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i>
                                <FaLinkedinIn />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i>
                                <FaPinterest />
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* <!-- OUR TEAM SECTION END -->  
       <!-- Video SECTION START --> */}
      <div className="section-full p-t120 p-b90 popup-sec">
        <Container>
          {/* <!-- TITLE START--> */}
          <div className="section-head center wt-small-separator-outer when-bg-dark">
            <div className="wt-small-separator site-text-secondry">
              <div className="sep-leaf-left"></div>
              <div>About Info</div>
            </div>
            <h2 className="wt-title">Who we are</h2>
          </div>
          {/* <!-- TITLE END--> */}

          <div className="section-content">
            <div className="video-section-three-outer m-b30">
              <div className="video-section-three">
                <img src={mediaimg} alt="" />
                <a
                  href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                  className="mfp-video play-now-video"
                >
                  <i classNameName="icon-">
                  
                  </i>
                  <span className="ripple"></span>
                </a>
              </div>
              <div className="video-text">Free Consultation</div>
            </div>
          </div>
        </Container>
      </div>
      {/* <!-- Video SECTION END -->             
            
            
                        <!--GET IN TOUCH--> */}
      <div
        className="section-full bg-white p-tb120 after-bg2-outer popup-sec-in"
        //  style="background-image:url(images/background/bg-dott.png)"
      >
        <Container>
          <Row>
            <Col lg={5} md={12}>
              <div className="getintouch-img">
                <div className="wt-media">
                  <img src={clientlogo} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div className="getintouch-content">
                <h2 className="wt-title m-b30">
                  We are ready to help you to get perfect fitness!
                </h2>
                <a href="contact.html" className="site-button site-btn-effect">
                  Get in touch
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* {/* <!--GET IN TOUCH--> */}
    </>
  );
}
export default Trener;
