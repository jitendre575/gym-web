import react from "react";
import { FaBeer, FaCalendarAlt, FaCommentDots, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTwitter } from 'react-icons/fa';
import author from '../../asstes/img/blog/author/1.jpg'; 
import author2 from '../../asstes/img/blog/author/2.jpg'; 
import logo from '../../asstes/img/logo-1.png'
import { IoIosSend } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";
import { MdNavigateNext } from "react-icons/md";
function Footer() {
  return (
    <>
      {/* <!-- OUR BLOG START --> } */}
      <div className="section-full p-t120 p-b90 after-bg-outer ">
        <div  className="after-bg"

        ></div>
 <Container>
 
          {/* <!-- TITLE START--> */}
          <div className="section-head center wt-small-separator-outer text-center text-white">
            <div className="wt-small-separator site-text-secondry">
              <div className="sep-leaf-left"></div>
              <div>Latest blog</div>
            </div>
            <h2>Our Recent News</h2>
          </div>
          {/* <!-- TITLE END--> */}

          <div className="section-content">
     <Row  className=" justify-content-start blog-post-3-outer">
              {/* <!--Block one--> */}
              <Col lg={6} md={6} className="m-b30">
            
                <div className="blog-post-style-3">
                  <div
                    className="blog-bg bg-cover bg-cover-sec"
                    // style="background-image: url(images/blog/blog-bg/1.jpg);"
                  ></div>
                  <div className="wt-post-meta ">
                    <ul>
                      <li className="post-comment">
                        <i><FaCommentDots /></i>(14)
                      </li>
                      <li className="post-date">
                        <i><FaCalendarAlt /></i>13 Jun
                      </li>
                    </ul>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-author">
                      <div className="post-author-pic">
                        <img src={author} alt="" />
                      </div>
                      <div className="post-author-name">By Sarah Atkins </div>
                    </div>
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        <a href="blog-single.html">
                          Fitness a boost begins at the end of your rest.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="wt-post-readmore ">
                    <a href="blog-single.html" className="site-button-link">
                      Read More<i className="mdnext"><MdNavigateNext /></i>
                    </a>
                  </div>
                </div>
                </Col>

              {/* <!--Block two--> */}
              <Col lg={6} md={6} className="m-b30">   
              <div className="blog-post-style-3">
                  <div
                    className="blog-bg bg-cover bg-cover- "
                    // style="background-image: url(images/blog/blog-bg/2.jpg);"
                  ></div>
                  <div className="wt-post-meta ">
                    <ul>
                      <li className="post-comment">
                        <i><FaCommentDots /></i>(08)
                      </li>
                      <li className="post-date">
                        <i><FaCalendarAlt /></i>18 Jun
                      </li>
                    </ul>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-author">
                      <div className="post-author-pic">
                        <img src={author2} alt="" />
                      </div>
                      <div className="post-author-name">By Donald</div>
                    </div>
                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        <a href="blog-single.html">
                          Give your fitness a boost with our gym.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="wt-post-readmore ">
                    <a href="blog-single.html" className="site-button-link">
                      Read More <i className="mdnext"><MdNavigateNext /></i>
                    </a>
                  </div>
                </div>
                </Col>
      
      
     </Row>
 </div>
      
 </Container>
      </div>
      {/* <!-- OUR BLOG END --> */}
      {/* <!-- FOOTER START --> */}
      <footer className="site-footer footer-light ">
        {/* <!-- FOOTER BLOCKES START -->   */}
        <div className="footer-top">
    <Container>
           <Row>
            <Col lg={3} md={6}>
            <div className="widget widget_about">
                    <h3 className="widget-title">About Us</h3>
                    <p>
                      The longest running gym in Chicago. Owned and operated by a
                      personal trainer with over 25 years experience
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a href="javascript:void(0);"><FaFacebookF  className="ico"/></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><FaTwitter  className="ico"/></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"      ><FaLinkedinIn className="ico" /></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><FaPinterest  className="ico"/></a>
                      </li>
                    </ul>
                  </div>
                
                </Col>
                <Col lg={3} md={6}>
  
                  <div className="widget recent-posts-entry">
                    <h3 className="widget-title">Get in Touch</h3>
                    <ul className="widget_address">
                      <li>
                        <i ><FaMapMarkerAlt /></i>92 Princess Road,
                        parkvenue Greater London, NW18JR, UK
                      </li>
                      <li>
                        <i><FaEnvelope /></i>contact123@gmail.com
                      </li>
                      <li>
                        {" "}
                        <i><FaPhoneAlt /></i>(+291) 912-3456-073
                      </li>
                    </ul>
                  </div>
         
                </Col>
                <Col lg={3} md={6}>
             <div className="widget widget_services">
                    <h3 className="widget-title">Useful links</h3>
                    <ul>
                      <li>
                        <a href="about-1.html">About</a>
                      </li>
                      <li>
                        <a href="gallery-1.html">Gallery</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
           
                </Col>
                <Col lg={3} md={6}>
             
                  <div className="widget widget_newsletter">
                    <h3 className="widget-title">Newsletter</h3>
                    <p>
                      Our newsletters contain useful blog posts, case studies,
                      “how to”s, and ways to help you grow your business.{" "}
                    </p>
                    <div className="newsletter-bx">
                      <form role="search" method="post">
                        <div className="input-group">
                          <input
                            name="news-letter"
                            className="form-control"
                            placeholder="Enter Email Address"
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button type="submit" className="site-button">
                              <i><IoIosSend /></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
            
                </Col>
           </Row>
          </Container>
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}

        <div className="footer-bottom">
       <Container>

            <div className="footer-bottom-info">
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer-copy-right">
                <span className="copyrights-text">
                  © 2024{" "}
                  <a href="https://bugfreecoder.com" target="_blank">
                    BugfreeCoder
                  </a>
                  , All Rights Reserved.x
                </span>
              </div>
              <div className="footer-link">
                <ul className="copyrights-nav">
                  <li>
                    <a href="#l">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>

       </Container>
        </div>
      </footer>
      {/* <!-- FOOTER END --> */}
    </>
  );
}
export default Footer;
