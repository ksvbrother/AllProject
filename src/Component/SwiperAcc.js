import React, { Component, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Container, Col, Row, Nav, Tab, Button } from "react-bootstrap";
import SlideImgone from "../img/slide.png";
import SlideImgtwo from "../img/slideimage.webp";
import SlideImgthree from "../img/slideimagethree.webp";
import Arrow from "../img/Vector.svg";

const accordiondata = [
  [
    {
      head: "RTL Support",
      text: "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
    },
    {
      head: "In-app chats",
      text: "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
    },
    {
      head: "Multiple stop",
      text: "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
    },
    {
      head: "Schedule a ride",
      text: "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
    },
  ],
  [
    {
      head: "Schedule a ride",
      text: "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
    },
    {
      head: "Multiple stop",
      text: "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
    },
    {
      head: "In-app chats",
      text: "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
    },
    {
      head: "RTL Support",
      text: "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
    },
  ],
];

class SwiperAcc extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "0",
    };
  }

  TabActive = (index) => {
    this.setState({
      brand: index === "first" ? 0 : 1,
    });
  };

  Swipertwo() {
    const DriverSlide = [
      {
        img: SlideImgthree,
      },
      {
        img: SlideImgtwo,
      },
      {
        img: SlideImgone,
      },
      {
        img: SlideImgtwo,
      },
    ];

    const driverhead = [
      "Schedule a ride",
      "Multiple stop",
      "In-app chats",
      "RTL Support",
    ];

    const drivertext = [
      "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
      "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
      "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
      "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
    ];
    const mySwipertwo = {
      pagination: {
        clickable: true,

        renderBullet: function (index, className) {
          return (
            '<div class=" page ' +
            className +
            '">' +
            "<div class='progressBar'>" +
            "<div class='progressBarValue'>" +
            "" +
            "</div>" +
            "</div>" +
            "<div class='AccSlide'>" +
            "<div class='slideAcc'>" +
            "<div class='acchead'>" +
            driverhead[index] +
            "</div>" +
            "<div class='SlideArrow'>" +
            "<img src='" +
            Arrow +
            "'  alt = 'rider' class='arrowimg'>" +
            "</img>" +
            "</div>" +
            "</div>" +
            "<p class='accorsub none' >" +
            drivertext[index] +
            "</p>" +
            "</div>" +
            "</div>"
          );
        },
      },
      autoplay: {
        delay: 8000,
      },
      modules: [Autoplay, Pagination, EffectFade],
      className: "mySwiper1 opacity",
      loop: true,
      effect: "fade",
    };

    return (
      <Swiper {...mySwipertwo} id="swipertwo">
        {DriverSlide.map((getimg, index) => {
          return (
            <SwiperSlide>
              <div className="sliderContent" key={index}>
                <img src={getimg.img} alt="driver"></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  Swiperone() {
    console.table(accordiondata[(0, 0)]);
    const riderhead = [
      "RTL Support",
      "In-app chats",
      "Multiple stop",
      "Schedule a ride",
    ];
    const ridertext = [
      "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
      "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
      "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
      "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
    ];
    const RiderSlide = [
      {
        img: SlideImgone,
      },
      {
        img: SlideImgtwo,
      },
      {
        img: SlideImgthree,
      },
      {
        img: SlideImgtwo,
      },
    ];

    const mySwiperone = {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<div class=" page ' +
            className +
            '">' +
            "<div class='progressBar'>" +
            "<div class='progressBarValue'>" +
            "" +
            "</div>" +
            "</div>" +
            "<div class='AccSlide'>" +
            "<div class='slideAcc'>" +
            "<div class='acchead'>" +
            riderhead[index] +
            "</div>" +
            "<div class='SlideArrow'>" +
            "<img src='" +
            Arrow +
            "'  alt = 'rider' class='arrowimg'>" +
            "</img>" +
            "</div>" +
            "</div>" +
            "<p class='accorsub none' >" +
            ridertext[index] +
            "</p>" +
            "</div>" +
            "</div>"
          );
        },
      },

      autoplay: {
        delay: 8000,
      },
      modules: [Autoplay, Pagination, EffectFade],
      className: "mySwiper  opacity",
      loop: true,

      effect: "fade",
    };

    return (
      <Swiper {...mySwiperone} id="swiperone">
        {RiderSlide.map((getimg, index) => {
          return (
            <SwiperSlide>
              <div className="sliderContent" key={index}>
                <img src={getimg.img} alt="rider"></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  render() {
    return (
      <div className="swiperaccordion">
        <Container>
          <Tab.Container defaultActiveKey="first" onSelect={this.TabActive}>
            <Row className="Relative">
              <Col lg={12} xs={12} className="AccordionSection">
                <div className="SliderSection">
                  <div className="accordionAbsolute">
                    <div>
                      <h2 className="Accsmall">Features & Functionalities</h2>
                      <h3 className="AccHead"> Rider & Driver</h3>
                    </div>
                    {this.state.brand}
                  </div>
                </div>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">{this.props.tab1}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">{this.props.tab2}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={12} xs={12} className="SliderSwiper  Relative">
                <Tab.Content>
                  <Tab.Pane eventKey="first">{this.Swiperone()}</Tab.Pane>
                  <Tab.Pane eventKey="second">{this.Swipertwo()}</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>



          {/* <p> {accordiondata[0]}</p> */}
          {/* <div className="SliderSection">
          <div className="accordionAbsolute">
            <div>
              <h2 className="Accsmall">Features & Functionalities</h2>
              <h3 className="AccHead"> Rider & Driver</h3>
            </div>
          </div>
        </div>
        <div className="ButtonGroup">
          <Button
            className={`${rider ? "off" : "on"} BtnRider`}
            onClick={Rider}
          >
            Rider
          </Button>
          <Button
            className={`${driver ? " offdriver" : "ondriver"} BtnDriver`}
            onClick={Driver}
          >
            Driver
          </Button>
        </div>
        <div>
          {rider ? <div>{SwiperTwo()}</div> : <div> {SwiperOne()}</div>}
        </div> */}
        </Container>
      </div>
    );
  }
}

export default SwiperAcc;
