import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fa fa-rocket',
    title: 'Web Development',
    description: 'We craft high-performance, scalable, and visually stunning websites tailored to your business needs. From e-commerce platforms to corporate websites, we ensure your online presence stands out.'
  },
  {
    id: 2,
    icon: 'fa fa-mobile',
    title: ' Mobile App Development',
    description: 'Turn your ideas into powerful mobile applications. We develop user-friendly, iOS and Android apps that deliver seamless experiences and high performance.'
  },
  {
    id: 3,
    icon: 'fa fa-gamepad',
    title: ' VR & AR Solutions',
    description: 'Step into the future of digital interaction with our VR games, virtual tours, and AR experiences. We create immersive environments for entertainment, education, and business applications.'
  },
  {
    id: 4,
    icon: 'fa fa-microchip',
    title: ' Tech Solutions & Integrations',
    description: 'Need a custom system, automation, or API integration? We provide tailor-made tech solutions, helping businesses optimize their workflow and enhance efficiency.'
  },
  {
    id: 5,
    icon: 'fa fa-american-sign-language-interpreting',
    title: 'Startup & Product Development',
    description: 'Have a brilliant startup idea but don’t know where to start? We provide end-to-end development, strategy, and tech support to turn your concept into a fully functional product.'
  },
  {
    id: 6,
    icon: 'fa fa-database',
    title: ' IT Consulting & Support',
    description: 'Our tech experts analyze, advise, and optimize your digital infrastructure, ensuring your business stays ahead of the competition. We also offer ongoing maintenance and support for existing projects.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;