import React, { useState } from "react";
import Img1 from "../../asstes/img/workout3/m1.jpg";
import Img2 from "../../asstes/img/workout3/m2.jpg";
import Img3 from "../../asstes/img/workout3/m3.jpg";
import Img4 from "../../asstes/img/workout3/m4.jpg";
import Img5 from "../../asstes/img/workout3/m5.jpg";
import InstaPic from "../../asstes/img/price-table/1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      title: "Standard",
      services: [
        "Service Locker Room",
        "Personal Trainer",
        "Morning Slot",
        "Yoga Classes",
        "Health Checkup",
        "Fitness Assessment",
      ],
      price: "$100",
      period: "Per/month",
      link: "about-1.html",
    },
    {
      id: 2,
      title: "Professional",
      services: [
        "Service Locker Room",
        "Personal Trainer",
        "Evening Slot",
        "Yoga Classes",
        "Health Checkup",
        "Fitness Assessment",
      ],
      price: "$200",
      period: "Per/month",
      link: "about-2.html",
    },
    {
      id: 3,
      title: "Ultimate",
      services: [
        "Private Locker Room",
        "Personal Trainer",
        "Flexible Slot",
        "Yoga Classes",
        "Health Checkup",
        "Fitness Assessment",
      ],
      price: "$300",
      period: "Per/month",
      link: "about-3.html",
    },
  ];

  const workoutItems = [
    {
      id: 1,
      title: "BOXING",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img1,
    },
    {
      id: 2,
      title: "Weight lifting",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img2,
    },
    {
      id: 13,
      title: "workout-media",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img3,
    },
    {
      id: 4,
      title: "Cardio",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img4,
    },
    {
      id: 5,
      title: "YOGA",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img3,
    },
    {
      id: 6,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img1,
    },
    {
      id: 7,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img2,
    },
    {
      id: 8,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img3,
    },
    {
      id: 9,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img3,
    },
    {
      id: 10,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img5,
    },
    {
      id: 11,
      title: "Boxing",
      trainer: "Kevin Crossman",
      time: "12 Wed, 10:00 AM",
      image: Img3,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      {/* Our Pricing Plan section start */}
      <div className="section-full p-t120  card-sec">
        <Container>
          {/* <!-- TITLE START--> */}
          <div className="section-head center wt-small-separator-outer text-center text-white">
            <div className="wt-small-separator site-text-secondry">
              <div className="sep-leaf-left"></div>
              <div>Pricing</div>
            </div>
            <h2>Our Pricing Plan</h2>
          </div>
          {/* <!-- TITLE END--> */}

          <div className="section-content slider-bottom">
            <div className="pricing-block-outer">
          <Row className="no-gutters">
           <Col lg={3}>    <span className=" no-gutters-"><img src={InstaPic}/></span></Col>
                {pricingPlans.map((plan) => (
                   <div key={plan.id}
                    className="col-lg-3 col-md-6 site-bg-primary" >
                    <div className="pricing-table-1">
                  
                      <div className="p-table-title">
                        <h4 className="wt-title">{plan.title}</h4>
                      </div>
                      <div className="p-table-list">
                        <ul>
                          {plan.services.map((service, index) => (
                            <li key={index}> <FaCaretRight /> <span>{service}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-table-price">
                        <span>{plan.price}</span>
                        <p>{plan.period}</p>
                      </div>
                      <div className="p-table-btn">
                        <a  href={plan.link}   className="site-button-secondry site-btn-effect" >
                          Purchas Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
          
          </Row>
            </div>
          </div>
        
        </Container>
      </div>
      {/* Our Pricing Plan section End */}
      <div className="section-full p-t120 site-bg-black workout-box-style3-section">
        <div className="container">
          <div class="wt-separator-two-part">
            <div class="row wt-separator-two-part-row">
              <div class="col-lg-6 col-md-12 wt-separator-two-part-left">
                <div class="section-head left wt-small-separator-outer when-bg-dark">
                  <div class="wt-small-separator site-text-primary">
                    <div class="sep-leaf-left"></div>
                    <div>Our timetable</div>
                  </div>
                  <h2 class="wt-title">Classes and Training</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="owl-carousel workout-slider3  workout-box-style3-outer">
              <Slider {...settings}>
                {workoutItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="workout-box-style3  owl-btn-top-right"
                    >
                      <div className="workout-media">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                        />
                        <div className="workout-time">
                          <span>{item.time}</span>
                        </div>
                      </div>
                      <div className="workout-content">
                        <h3 className="workout-title-large">{item.title}</h3>
                        <div className="workout-title">By {item.trainer}</div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
