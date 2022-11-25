import React, { useEffect, useState, useRef } from "react";
import { Container, Table, Accordion, Row, Col } from "react-bootstrap";
import Arrow from "../img/Group 1778.svg";
import Avail from "../img/Group 9282.svg";
import NotAvail from "../img/Group 9282 (1).svg";
import TabLogo from "../img/Group 11663.svg";
import "../index.css";

const AccTable = () => {
  return (
    <div className="accordionTable">
      <Container>
        <div>
          <h2 className="heading">Pricing Comparison</h2>
          <p className="sub_heading">
            Check out our pricing and its nuances. We assure you that our prices
            slide right into budget!
          </p>
        </div>
        <div className="TableSection">
          <div className="gridSection">
            <div className="TableHeadingOne">
              <img src={TabLogo} className="TableImg"></img>

              <div className="tableHead">
                <p>Let's build your startup!</p>
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  className="contactus"
                >
                  Contact us
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
                      <g
                        id="_46"
                        data-name="46"
                        transform="translate(4.431 3.798)"
                      >
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

            <div className="TableHeadingTwo">
              <p className="tabletitle">Meds</p>
            </div>
            <div className="TableHeadingThree">
              <p className="tabletitle"> Meds Pro</p>
            </div>
          </div>
          <div className="tableSection">
            <Accordion defaultActiveKey={["0"]}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Benefits</Accordion.Header>
                <Accordion.Body>
                  <Table className="table-borderless ColColor">
                    <tbody>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <div>
                            {" "}
                            <img src={Avail}></img>
                          </div>
                        </td>
                        <td>
                          <div>
                            <img src={Avail}></img>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>100% source code</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>Multi domain license</p>
                        </td>
                        <td>
                          <img src={NotAvail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Customer App Features</Accordion.Header>
                <Accordion.Body>
                  <Table className="table-borderless ColColor ">
                    <tbody>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <div>
                            {" "}
                            <img src={Avail}></img>
                          </div>
                        </td>
                        <td>
                          <div>
                            <img src={Avail}></img>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>100% source code</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>Multi domain license</p>
                        </td>
                        <td>
                          <img src={NotAvail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Delivery partner app features
                </Accordion.Header>
                <Accordion.Body>
                  <Table className="table-borderless ColColor ">
                    <tbody>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <div>
                            {" "}
                            <img src={Avail}></img>
                          </div>
                        </td>
                        <td>
                          <div>
                            <img src={Avail}></img>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>100% source code</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>Multi domain license</p>
                        </td>
                        <td>
                          <img src={NotAvail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Admin panel features</Accordion.Header>
                <Accordion.Body>
                  <Table className="table-borderless ColColor ">
                    <tbody>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <div>
                            {" "}
                            <img src={Avail}></img>
                          </div>
                        </td>
                        <td>
                          <div>
                            <img src={Avail}></img>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>100% source code</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>Multi domain license</p>
                        </td>
                        <td>
                          <img src={NotAvail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Store panel features</Accordion.Header>
                <Accordion.Body>
                  <Table className="table-borderless ColColor ">
                    <tbody>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <div>
                            {" "}
                            <img src={Avail}></img>
                          </div>
                        </td>
                        <td>
                          <div>
                            <img src={Avail}></img>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>100% source code</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>Multi domain license</p>
                        </td>
                        <td>
                          <img src={NotAvail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <p>3 months</p>
                        </td>
                        <td>
                          <p>6 months</p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          <p>One-time fee</p>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                        <td>
                          <img src={Avail}></img>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccTable;
