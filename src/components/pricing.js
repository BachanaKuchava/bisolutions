import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [ 
   {
    id: 2,
    plan: 'Basic Plan',
    price: '$1,500',
    features: ['5-Page Custom Website', 'Mobile Responsive Design', 'SEO Optimized Structure', 'Free Hosting & Domain (1 Year)', 'Contact Form + Google Maps Integration', 'Social Media Integration', 'Support & Assistance (1 Month)' ],
    link: 'https://www.facebook.com'
  },
  {
    id: 1,
    plan: 'Premium',
    price: '$10,000',
    features: ['Fully Custom Web or SaaS Solution', 'Custom Backend (API, CRM, ERP Integrations)', 'Multi-Language Support', 'AI Chatbot / Automation Integration', 'Enterprise-Level Security (Cloudflare, SSL, Firewall)', 'Dedicated DevOps & Hosting Support'],
    link: 'https://www.google.com'
  },

  {
    id: 3,
    plan: 'Business Plan',
    price: '$4,000',
    features: [' 20-Page Custom Website', 'UI/UX Design', 'Advanced SEO & Performance Optimization', 'Blog + Admin Dashboard', 'E-commerce Integration (Cart, Payments, Product Management)', 'Google Analytics & Meta Pixel Integration'],
    link: 'https://www.twitter.com'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; plans</h2>
          <div className="subtitle">check our pricing & plans </div>
          <div>The prices we present are indicative and for detailed information, please contact us.
            </div> 
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href='' className='btn btn-primary'>See Details</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;