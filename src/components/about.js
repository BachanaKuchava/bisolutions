import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../assets/images/img1.jpg';
import BISOLUTIONS from '../assets/images/BISOLUTIONS1.png';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Innovation, Expertise, and Limitless Possibilities</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={BISOLUTIONS} className='aboutUS-img'/>
          </Col>
          <Col sm={6}>
          <p className='aboutUS-p'>
          At BI Solutions, we don’t just develop software we build the future. our company is a powerhouse of innovation, offering cutting-edge solutions across the tech industry. From startups to large enterprises, we help businesses bring ideas to life with custom-built websites, mobile apps, VR games, immersive virtual tours, and much more.

With a fully assembled team of industry experts, we’ve successfully delivered numerous projects, setting new standards in design, development, and technology integration. Whether you need a brand-new digital solution or improvements to an existing project, BI Solutions is your ultimate tech partner.
</p>
            {/* <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;