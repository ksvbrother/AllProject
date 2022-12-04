import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Container, Button } from "react-bootstrap";
import SlideImgone from "../img/slide.png";
import SlideImgtwo from "../img/slideimage.webp";
import SlideImgthree from "../img/slideimagethree.webp";
import Arrow from "../img/Vector.svg";

const SwiperAcc = () => {
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
  // const Content = [
  //   {
  //     head: "RTL Support ",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit ante dictum orci fringilla, eget suscipit libero suscipit. Maecenas molestie purus ligula, vitae malesuada neque aliquet nec. Aenean sed fermentum quam. Vivamus rhoncus diam non ante euismod, at cursus mi vestibulum.",
  //   },

  //   {
  //     head: "In-app chats ",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit ante dictum orci fringilla, eget suscipit libero suscipit. Maecenas molestie purus ligula, vitae malesuada neque aliquet nec. Aenean sed fermentum quam. Vivamus rhoncus diam non ante euismod, at cursus mi vestibulum.",
  //   },
  //   {
  //     head: "Multiple stop",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit ante dictum orci fringilla, eget suscipit libero suscipit. Maecenas molestie purus ligula, vitae malesuada neque aliquet nec. Aenean sed fermentum quam. Vivamus rhoncus diam non ante euismod, at cursus mi vestibulum.",
  //   },
  //   {
  //     head: "Schedule a ride",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit ante dictum orci fringilla, eget suscipit libero suscipit. Maecenas molestie purus ligula, vitae malesuada neque aliquet nec. Aenean sed fermentum quam. Vivamus rhoncus diam non ante euismod, at cursus mi vestibulum.",
  //   },
  // ];

  // const get = () => {
  //   return (
  //     <div>
  //       {Content.map((item) => {
  //         return (
  //           <div>
  //             <p>{item.head}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  var head = [
    "RTL Support",
    "In-app chats",
    "Multiple stop",
    "Schedule a ride",
  ];

  var text = [
    "That is when you turn to Lorem Ipsum. In your mind, something says “This, again? Maybe it’s time for a change, time for something new”. Oh boy, we couldn’t agree more.",
    "This post is for those who still need a filler text but crave something more entertaining, more relevant, or just plain more. Read on for some cool alternatives to Lorem Ipsum for the next time you’re deep in your wireframe tool",
    "Arrested Development has grown to have a huge cult following. The show surrounds the Bluth family as they navigate the rough waters of bankruptcy and financial ruin. And so, perhaps it should come as no surprise that someone out there took the time to",
    "Even if the product isn’t necessarily about cats or pets in general, it can still be a great alternative to Lorem Ipsum. It certainly would make the prototype feel younger and more casual than good old Latin.",
  ];

  console.table(head);

  const paginationone = {
    clickable: true,
    renderBullet: function one(index, className) {
      return ('<span class=" page ' +
        className +
        '">' +
        "<div class='AccSlide'>" +
        "<div class='slideAcc'>" +
        "<div class='acchead '>" + (head[index])
        +
        "</div>" +
        "<div class='SlideArrow'>" +
        "<img src='" +
        Arrow +
        "' class='arrowimg'>" +
        "</div>" +
        "</div>" +
        "<div>" +

        "<p class='accorsub none' >" +
        (text[index]) +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div> " +

        "</span>"
      )
    }
  }


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

  const DriverSlide = [
    {
      img: SlideImgthree,
    },
    {
      img: SlideImgthree,
    },
    {
      img: SlideImgthree,
    },
    {
      img: SlideImgthree,
    },
  ];

  return (
    <div className="swiperaccordion">
      <Container>
        <div className="SliderSection">
          <div className="accordionAbsolute">
            <div>
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

          <div>
            <Swiper
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={paginationone}
              modules={[Autoplay, EffectFade, Pagination]}
              className="mySwiper one"
            >
              {(rider ? DriverSlide : RiderSlide).map((getimg, index) => {
                return (
                  <SwiperSlide>
                    <div className="sliderContent" key={index}>
                      <img src={getimg.img}></img>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <a
          href="https://www.w3schools.com/"
          target="_blank"
          className="morefeatures"
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
      </Container>
    </div>
  )
}


export default SwiperAcc;
