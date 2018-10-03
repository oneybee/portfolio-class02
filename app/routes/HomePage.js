/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class HomePage extends Component {
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
                    transform: "translateY(-50%)",
                    color: "#B8B8B8"
                  }}
                >
                  <span
                    style={{
                      marginRight: "14%",
                      height: "100%",
                      color: "#1106ff"
                    }}
                  >
                    Work
                  </span>
                  <a
                    href="work"
                    style={{ textDecoration: "none", color: "#B8B8B8" }}
                  >
                    <span style={{ marginRight: "14%" }}>About</span>
                  </a>
                  <span style={{ marginRight: "14%" }}>Resume</span>
                </div>
              </Column>
            </Row>
          </div>
        </div>

        <div
          style={{
            marginBottom: "100px",
            paddingRight: "30px",
            paddingLeft: "30px"
          }}
        >
          <div
            style={{
              paddingRight: "15px",
              paddingLeft: "15px",
              marginTop: "100px",
              marginBottom: "100px",
              textAlign: "center"
            }}
          >
            <span
              style={{
                fontFamily: "Lora",
                fontSize: "4.75vw",
                color: "#1106FF",
                display: "block",
                lineHeight: "1.175em"
              }}
            >
              Jessie Van
            </span>
            <span
              style={{
                display: "block",
                lineHeight: "1.35em",
                fontFamily: "Work Sans",
                fontWeight: 300,
                color: "#c5c5c5",
                fontSize: "19px"
              }}
            >
              Hi! I'm a Product Designer based in Oakland, California.
            </span>
          </div>
        </div>

        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Row>
            <Column col={6} mCol={12}>
              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginBottom: "30px"
                }}
              >
                <img
                  src="http://www.jessievan.com/images/grid-projects/MBTV.png"
                  style={{ width: "100%" }}
                />
              </div>
            </Column>
            <Column col={6} mCol={12}>
              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginBottom: "30px"
                }}
              >
                <img
                  src="http://www.jessievan.com/images/grid-projects/Coleman@2x.png"
                  style={{ width: "100%" }}
                />
              </div>
            </Column>
            <Column col={6} mCol={12}>
              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginBottom: "30px"
                }}
              >
                <img
                  src="http://www.jessievan.com/images/grid-projects/Razorfish-App.png"
                  style={{ width: "100%" }}
                />
              </div>
            </Column>
            <Column col={6} mCol={12}>
              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginBottom: "30px"
                }}
                className="home-col"
              >
                <img
                  src="http://www.jessievan.com/images/grid-projects/IOT-Window@2x.png"
                  style={{ width: "100%" }}
                />
              </div>
            </Column>
          </Row>
        </div>

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
                  <p>
                    <span>Jessie Van</span>
                  </p>
                  <p>
                    <span>Product Designer</span>
                  </p>
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
                  <p>
                    <span>Oakland, California</span>
                  </p>
                  <p>
                    <span>94609</span>
                  </p>
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
                  <p>
                    <span>415 425 7633</span>
                  </p>
                  <p>
                    <span>jessievan@me.com</span>
                  </p>
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
                  <p>
                    <span>Jessie Van</span>
                  </p>
                  <p>
                    <span>Product Designer</span>
                  </p>
                </div>
              </Column>
            </Row>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
