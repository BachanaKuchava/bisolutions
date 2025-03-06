import { useState } from "react";
import React from "react";
import AppHero from "../components/hero";
import { Container, Row, Col } from "react-bootstrap";
import mallOne from "../assets/images/vr1.jpg";
import mallTwo from "../assets/images/vr4.jpg";
import mallThree from "../assets/images/vr5.jpg";
import mallFour from "../assets/images/vr3.jpg";
import StartupsSlider from "../components/startupsSlider";
function StartUps() {
  return (
    <>
      {/* <AppHero /> */}
      <StartupsSlider />
      <div className="startUp-block">
        <Container className="py-5">
          <Row className="align-items-center mt-5">
            {/* Text Column */}
            <Col md={7}>
              <h2>
                <a href="/VRMALLstartup.rar" download>VR MALL</a> The future of shopping is here
              </h2>
              <div>
                <p>

                
                Welcome to VR MALL, a revolutionary shopping experience. Explore
                a fully interactive virtual world. Discover stores, connect with
                others, and shop like never before.</p>
                <p>

                
                <span>Visualize Before You Buy</span>, Augmented Reality
                Preview: See products in your own space. Use AR to visualize
                items at home. </p>

                <p><span>Real-Time Product View</span>: View
                products in real space, in real time. Make informed purchasing
                decisions</p>
              </div>
            </Col>

            {/* Image Column */}
            <Col md={5} className="text-center">
              {/* Fully responsive image */}
              <img
                src={mallOne}
                alt="Placeholder"
                className="img-fluid"
                // "img-fluid" makes the image scale to 100% width of its parent
              />
            </Col>
          </Row>

          <Row className="align-items-center" style={{ marginTop: "100px" }}>
            <hr className="" style={{ marginBottom: "50px" }}></hr>
            <Col md={5} className="text-center">
              {/* Fully responsive image */}
              <img
                src={mallTwo}
                alt="Placeholder"
                className="img-fluid"
                // "img-fluid" makes the image scale to 100% width of its parent
              />
            </Col>

            {/* Text Column */}
            <Col md={7}>
              <h2>
              <a href="/VRMALLstartup.rar" download>VR MALL </a>for Every Segment
              </h2>
              <div>
                <p>
                <span>Construction & Hardware</span> Explore materials like tiles and
                furniture. Test them in your virtual home. </p>
               <p> <span>Real Estate Showcases</span>
                Tour apartments and houses under construction. Customize your
                dream home virtually. </p>
              <p>  <span>Interactive & Social </span>
                Connect with other users and developers. Experience the mall together</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center" style={{ marginTop: "100px" }}>
            <hr className="" style={{ marginBottom: "50px" }}></hr>

            {/* Text Column */}
            <Col md={7}>
              <h2>
              <a href="/VRMALLstartup.rar" download>VR MALL</a> is First to Market
              </h2>
              <div>
                <p>
                <span>Innovative Concept</span>We offer a unique virtual 
                shopping experience.
                </p>
                <p>
                <span>Broad Appeal</span>VR MALL caters to diverse 
                interests and needs.
                </p>
                <p>
                <span>Adaptive Design</span>VOur mall adapts to various product segments.

                </p>.
              </div>
            </Col>

            {/* Image Column */}
            <Col md={5} className="text-center">
              {/* Fully responsive image */}
              <img
                src={mallThree}
                alt="Placeholder"
                className="img-fluid"
                // "img-fluid" makes the image scale to 100% width of its parent
              />
            </Col>
          </Row>
          <Row className="align-items-center" style={{ marginTop: "100px" }}>
            <hr className="" style={{ marginBottom: "50px" }}></hr>
            <Col md={5} className="text-center">
              {/* Fully responsive image */}
              <img
                src={mallFour}
                alt="Placeholder"
                className="img-fluid"
                // "img-fluid" makes the image scale to 100% width of its parent
              />
            </Col>
            {/* Text Column */}
            <Col md={7}>
              <h2>
              <a href="/VRMALLstartup.rar" download>VR MALL</a> Unprecedented Advertising 
               Opportunities
              </h2>
              <div>
              <p>
                <span>High Visibility</span> - Reach a wide audience of engaged shoppers.

                </p>
                <p>
                <span> Interactive Ads</span> - Create immersive brand experiences.
                </p>
                <p>
                <span>Targeted Marketing</span> - Connect with the right customers.
                </p>
                
              </div>
              <a href="/VRMALLstartup.rar" className="text-danger fs-3 download" download>See full Information About VR MALL</a>
            </Col>

       
      
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StartUps;
