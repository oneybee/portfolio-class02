/**
 *
 * page6
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class page6 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ paddingTop: "65px", paddingBottom: "65px" }}>
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <Row>
              <Column col={6} mCol={6}>
                <img
                  src="http://www.jessievan.com/images/logo.png"
                  style={{ paddingLeft: "15px", width: "50px" }}
                />
              </Column>
              <Column col={6} mCol={6}>
                <div
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    fontFamily: "Work Sans",
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)"
                  }}
                >
                  <span style={{ marginRight: "14%", height: "100%" }}>
                    Work
                  </span>
                  <span style={{ marginRight: "14%" }}>About</span>
                  <span style={{ marginRight: "14%" }}>Resume</span>
                </div>
              </Column>
            </Row>
          </div>
        </div>

        <div
          style={{
            paddingTop: "150px",
            paddingBottom: "100px",
            marginBottom: "50px"
          }}
        >
          <div
            style={{
              marginBottom: "100px",
              paddingRight: "30px",
              paddingLeft: "30px",
              marginLeft: "0px",
              marginRight: "auto",
              display: "block"
            }}
          >
            <p style={{ display: "inline-block", textAlign: "center" }}>
              <span
                style={{
                  fontSize: "10.15vw",
                  fontWeight: 400,
                  color: "#1106FF",
                  display: "block"
                }}
              >
                I enjoy figuring out how to make things work better.
              </span>
            </p>
          </div>
        </div>

        <div style={{ paddingRight: "30px", paddingLeft: "30px" }}>
          <div
            style={{
              marginTop: "20px",
              marginLeft: "-15px",
              marginRight: "-15px"
            }}
          >
            <p
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "#1106FF"
              }}
            >
              <span
                style={{
                  marginBottom: "10px",
                  fontSize: "21px",
                  fontWeight: 300,
                  display: "block"
                }}
              >
                I care about the details and consider the motion design of affordances to be crucial in creating effective, intuitive interfaces. I consider prototyping to be my weapon of choice in thinking through interaction models and new possibilities.
              </span>
              <span
                style={{
                  marginBottom: "10px",
                  fontSize: "21px",
                  fontWeight: 300,
                  display: "block",
                  paddingTop: "8px"
                }}
              >
                I thrive on learning new things — I enjoy exploring new paths to familiar places. I really love snowboarding (I like both park and powder days). I also really enjoy exploring the amazing trails and landscapes around the bay area on my mountain bike. I’ve travelled a lot and enjoy seeing things from a fresh perspective :)
              </span>
            </p>
          </div>
        </div>

        <Row>
          <Column col={6} mCol={6}>
            <img
              src="http://www.jessievan.com/images/about/photo-1.png"
              style={{ width: "100%" }}
            />
          </Column>
          <Column col={6} mCol={6}>
            <img
              src="http://www.jessievan.com/images/about/photo-3.png"
              style={{ width: "100%" }}
            />
          </Column>
        </Row>

        <div
          style={{
            paddingTop: "150px",
            paddingBottom: "150px",
            color: "#fff",
            backgroundColor: "#1106ff",
            fontSize: "15px"
          }}
        >
          <div
            style={{
              paddingRight: "30px",
              paddingLeft: "30px",
              maxWidth: "1440px",
              fontFamily: "Work Sans"
            }}
          >
            <Row>
              <Column col={3} mCol={12}>
                <div
                  style={{
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    lineHeight: "1.55em"
                  }}
                >
                  <p><span>Jessie Van</span></p>
                  <p><span>Product Designer</span></p>
                </div>
              </Column>
              <Column col={3} mCol={12}>
                <div
                  style={{
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    lineHeight: "1.55em"
                  }}
                >
                  <p><span>Oakland, California</span></p>
                  <p><span>94609</span></p>
                </div>
              </Column>
              <Column col={3} mCol={12}>
                <div
                  style={{
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    lineHeight: "1.55em"
                  }}
                >
                  <p><span>415 425 7633</span></p>
                  <p><span>jessievan@me.com</span></p>
                </div>
              </Column>
              <Column col={3} mCol={12}>
                <div
                  style={{
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    lineHeight: "1.55em"
                  }}
                >
                  <p><span>Jessie Van</span></p>
                  <p><span>Product Designer</span></p>
                </div>
              </Column>
            </Row>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default page6;
