import React from "react";
import Circle from "../img/Group_9505_1_igrazo.webp";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
const Dottedline = () => {
  return (
    <div className="DottedAnis">
      <Container>
        <div className="dottedRow">
          <Row>
            <Col lg={6} sm={12} md={6}>
              <div className="FirstDotted">
                <div className="UpdateMove">
                  <div className="Tooltip">
                    <div className="RecentUpdate">
                      <img src={Circle}></img>
                      <p className="dashedTitle">Regular updates</p>
                    </div>

                    <div className="TooltipBox FirstRecent">
                      <div className="Tooltipcontent">
                        <h4 className="Tooltipheading">Regular updates</h4>
                        <p className="Tooltipsubheading">
                          Our team will share the development status of the
                          product promptly!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  class="DottedCircle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="517.435"
                  height="214.679"
                  viewBox="0 0 517.435 214.679"
                >
                  <path
                    class="circleAnim"
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
            </Col>
          </Row>

          <div className="SecondDotted">
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img src={Circle} className="circleImg Active"></img>
                  <p className="dashedTitle">Enquire</p>
                </div>

                <div className="TooltipBox FirstChild">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Enquire</h4>
                    <p className="Tooltipsubheading">
                      Get to know about our Multi-delivery Super App.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img src={Circle} className="circleImg"></img>
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
                  <img src={Circle} className="circleImg"></img>
                  <p className="dashedTitle">Develop</p>
                </div>

                <div className="TooltipBox">
                  <div className="Tooltipcontent">
                    <h4 className="Tooltipheading">Develop</h4>
                    <p className="Tooltipsubheading">
                      We begin developing your Wooberly SuperDelivery app with
                      care!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashedImg">
              <div className="Tooltip">
                <div className="MobileAlign">
                  <img src={Circle} className="circleImg"></img>
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
                  <img src={Circle} className="circleImg"></img>
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

      {/* <svg
        class="gcPitchCircle"
        xmlns="http://www.w3.org/2000/svg"
        width="517.435"
        height="214.679"
        viewBox="0 0 517.435 214.679"
      >
        <path
          class="circleAnim"
          id="Path_22043"
          data-name="Path 22043"
          d="M736.788,4203.706c-2.095-91.911-73.479-203.5-258.915-214.167-193.74,8.469-254.8,132.026-257.521,207.977"
          transform="translate(-219.853 -3989.038)"
          fill="none"
          stroke="#9e9e9e"
          stroke-width="1"
          stroke-dasharray="7 3"
        ></path>
      </svg> */}
    </div>
  );
};
export default Dottedline;
