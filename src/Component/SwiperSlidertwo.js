import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, Pagination, EffectFade, Mousewheel } from "swiper";
import { Container, Col, Row, Nav, Tab, Button } from "react-bootstrap";
import SlideImgone from "../img/slide.png";
import SlideImgtwo from "../img/slideimage.webp";
import SlideImgthree from "../img/slideimagethree.webp";
import Arrow from "../img/Vector.svg";
const SwiperTwo = () => {
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

  var mySwipertwo = {
    pagination: {
      clickable: true,
      pagination: ".swiper-pagination2",
      renderBullet: function one(index, className) {
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
      delay: 4000,
    },
    modules: [Autoplay, Pagination, EffectFade],
    className: "mySwiper1 opacity",
    loop: true,
    effect: "fade",
    autoplayDisableOnInteraction: false,
  };

  return (
    <Swiper {...mySwipertwo}>
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

export default SwiperTwo;
