import React from "react";
import Circle from "../img/Group_9505_1_igrazo.webp";

import "../index.css";
import { Container, Row, Col } from "react-bootstrap";

const ProcessImg = [
  " https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/grocery/Group_9505_1_igrazo.svg",
  " https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/wooberly/Group_9504_zucli4.png",
  "https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/grocery/Group_9505_hjbvrn.svg",
  " https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/grocery/Group_9507_xtyrs1.svg",
  " https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/grocery/Group_9507_xtyrs1.svg",
  " https://res.cloudinary.com/dfpzh53td/f_auto,q_auto/rentallscript-website/grocery/Group_11672_w5gen5.svg",
];

const Dottedline = () => {
  return (
    <div className="DottedAnis">
      <Container>
        <div className="Dottedcontent">
          <h3 className="DottedHeading">Ready, Set & Go!</h3>
          <h4 className="DottedSubHeading">
            How to develop an Uber clone with us?
          </h4>
        </div>
        <div className="dottedRow">
          <div className="FirstDotted">
            <div className="UpdateMove">
              <div className="Tooltip">
                <div className="RecentUpdate">
                  <img
                    src={ProcessImg[0]}
                    alt="We share regular product updates"
                  ></img>
                  <p className="dashedTitle">Regular updates</p>
                </div>

                <div className="TooltipBox FirstRecent">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Regular updates</h4>
                    <p className="Tooltipsubheading">
                      Our team will share the development status of the product
                      promptly!
                    </p>
                  </div>
                </div>
              </div>
              <svg
                width="600.435"
                height="214.679"
                viewBox="0 0 600.435 214.679"
                className="DottedSemiCircleAnim"
              >
                <path
                  className="RotateDashed"
                  id="Path_22043"
                  data-name="Path 22043"
                  d="M736.788,4203.706c-2.095-91.911-73.479-203.5-258.915-214.167-193.74,8.469-254.8,132.026-257.521,207.977"
                  transform="translate(-219.853 -3989.038)"
                  fill="none"
                  stroke="#9e9e9e"
                  stroke-width="1"
                  stroke-dasharray="7 3"
                ></path>
              </svg>
            </div>
          </div>

          <div className="SecondDotted">
            <svg height="50" width="100%" className="StraightLineDot">
              <line
                x1="0"
                y1="30"
                x2="100%"
                y2="30"
                fill="none"
                stroke="#9e9e9e"
                stroke-width="1"
                stroke-dasharray="7 3"
                class="RotateDashed"
              />
            </svg>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img
                    src={ProcessImg[1]}
                    alt="Make an inquiry"
                    className="circleImg Active"
                  ></img>
                  <p className="dashedTitle">Enquire</p>
                </div>

                <div className="TooltipBox FirstChild">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Enquire</h4>
                    <p className="Tooltipsubheading">
                      Get to know about our Uber clone app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img
                    src={ProcessImg[2]}
                    className="circleImg"
                    alt="Share your business ideas"
                  ></img>
                  <p className="dashedTitle">Discover</p>
                </div>

                <div className="TooltipBox">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Discover</h4>
                    <p className="Tooltipsubheading">
                      Communicate your business idea with us in confidence!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img
                    src={ProcessImg[3]}
                    className="circleImg"
                    alt="Coding"
                  ></img>
                  <p className="dashedTitle">Develop</p>
                </div>

                <div className="TooltipBox">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Develop</h4>
                    <p className="Tooltipsubheading">
                      We begin developing your taxi app with care!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img
                    src={ProcessImg[4]}
                    className="circleImg"
                    alt="We test your app"
                  ></img>
                  <p className="dashedTitle">Test</p>
                </div>

                <div className="TooltipBox">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Test</h4>
                    <p className="Tooltipsubheading">
                      We test the product and fix the issues simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img
                    src={ProcessImg[5]}
                    className="circleImg"
                    alt="Launching your uber clone app"
                  ></img>
                  <p className="dashedTitle">Launch</p>
                </div>

                <div className="TooltipBox LastChild">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Launch</h4>
                    <p className="Tooltipsubheading">
                      We assist you to launch your brand into the market!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Dottedline;
