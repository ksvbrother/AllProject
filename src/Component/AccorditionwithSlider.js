import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Container, Button } from "react-bootstrap";
import SlideImgone from "../img/slide.png";
import SlideImgtwo from "../img/slideimage.webp";
import SlideImgthree from "../img/slideimagethree.webp";
import Arrow from "../img/Vector.svg";
import "../index.css";

const AccorditionwithSlider = () => {
  const [rider, SetRider] = useState(false);
  const [driver, SetDriver] = useState(true);
  const Rider = () => {
    SetDriver(true);
    SetRider(false);
  };
  const Driver = () => {
    SetRider(true);
    SetDriver(false);
  };

  const Swipertwo = () => {
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
        disableOnInteraction: false,
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
  };

  const Swiperone = () => {
    const riderhead = [
      "RTL Support",
      "In-app chats",
      "Multiple stop",
      "Schedule a ride",
    ];
    const ridertext = [
      "That is when you turn to Lorem Ipsum. In your mind, something says This, again? Maybe it’s time for a change, time for something new Oh boy, we couldn’t agree more.",
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
        disableOnInteraction: false,
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
  };

  return (
    <div className="swiperaccordion Relative">
      <Container>
        <div className="SliderSection Relative">
          <div className="accordionAbsolute">
            <h2 className="Accsmall">Features & Functionalities</h2>
            <h3 className="AccHead"> Rider & Driver</h3>

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
          </div>
        </div>

        <div className="renderSlider">
          {rider ? <>{Swipertwo()} </> : <> {Swiperone()}</>}
          <div className="morefeatures">
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noopener"
              className=""
            >
              More features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                style={{ marginLeft: "6px" }}
              >
                <g
                  id="Group_1778"
                  data-name="Group 1778"
                  transform="translate(-0.127 -0.127)"
                >
                  <circle
                    id="Ellipse_4"
                    data-name="Ellipse 4"
                    cx="10"
                    cy="10"
                    r="10"
                    transform="translate(0.127 0.127)"
                    fill="#0014ff"
                  />
                  <g id="_46" data-name="46" transform="translate(4.431 3.798)">
                    <path
                      id="Vector"
                      d="M0,0,3.563,3.563,0,7.127"
                      transform="translate(4.169 2.766)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      strokeDasharray="0 0"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccorditionwithSlider;
