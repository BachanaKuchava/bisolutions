import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/comingsoon.png'),
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'startup'
  },
  {
    id: 2,
    image: require('../assets/images/VRMALL3.png'),
    link: 'startup'
  },
  {
    id: 3,
    image: require('../assets/images/VrMALL.png'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'startup'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    {/* <p>{hero.description}</p> */}
                    <Link className="btn btn-primary" to={hero.link}>Learn More <i className="fas fa-chevron-right"></i></Link>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;