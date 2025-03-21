// Portfolio.js
import React from "react";
import xsIgrace from '../../assets/images/port1.PNG';
import spNews from '../../assets/images/port2.PNG';
import Ammo from '../../assets/images/port3.PNG';
import SolarValley from '../../assets/images/port4.PNG';
import Guda from '../../assets/images/port5.PNG';
import Translate from '../../assets/images/port6.PNG';

function Portfolio() {
  return (
    <div className="d-flex flex-column h-100 portfolio">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-3">
            <a className="navbar-brand" href="/">Start Bootstrap</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Blog
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                    <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Portfolio
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="/portfolio-overview">Portfolio Overview</a></li>
                    <li><a className="dropdown-item" href="/portfolio-item">Portfolio Item</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <section className="py-5">
          <div className="container px-3 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Our Work</h1>
              <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {/* Project 1 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={xsIgrace} alt="Project Alpha" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      xsigrace.si <code>Ecommerce</code>
                    </h3>
                    <p className="card-text text-secondary">
                      XS Igrače is a Slovenian toy company with an advanced e-commerce platform offering automated delivery and tracking,
                      an AI-integrated admin panel, and Photoshop integration. Payment options include Slovenian bank, Google Pay, and PayPal.
                    </p>
                    <a href="https://xsigrace.si/en" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={spNews} alt="Project Beta" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      spnews.io <code>News|Radio</code>
                    </h3>
                    <p className="card-text text-secondary">
                      SP News is a Georgian news website with a comprehensive blog system and live radio streaming.
                      Its modern admin panel streamlines content management and enhances user experience.
                    </p>
                    <a href="https://spnews.io/ge" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={Ammo} alt="Project Gamma" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      ammoexchange.com <code>Trading Platform</code>
                    </h3>
                    <p className="card-text text-secondary">
                    U.S. Ammo Exchange (USAE) is an innovative trading platform revolutionizing the U.S. ammunition industry. It connects the world's largest suppliers directly to consumers, eliminating middlemen and ensuring consistent availability without pre-set prices. The platform allows users to safely and securely buy, hold, and trade ammunition, providing a comprehensive marketplace for legally allowed ammunition buyers and sellers.                    </p>
                    <a href="https://www.ammoexchange.com/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={Guda} alt="Project Gudabooks" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      gudabooks.ge <code>Ecommerce</code>
                    </h3>
                    <p className="card-text text-secondary">
                    Gudabooks.ge is an online bookstore offering over 200 audiobooks and 1,000 e-books across genres like classical and contemporary literature, biographies, and fairy tales. Users can enjoy these books via the "Guda" app on Android and iOS devices.                     </p>
                    <a href="https://gudabooks.ge/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
          

              {/* Project 5 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={SolarValley} alt="Project Delta" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      solarvalley.ge <code>Company Website</code>
                    </h3>
                    <p className="card-text text-secondary">
                    ​Solar Valley is a Georgian company specializing in the design, installation, and maintenance of solar energy systems. They offer a range of products and services, including photovoltaic panels, inverters, and energy storage solutions, tailored to both residential and commercial clients. Their mission is to promote sustainable energy practices in Georgia by providing high-quality, eco-friendly solutions that reduce energy costs and environmental impact.                    </p>
                    <a href="https://solarvalley.ge/ka/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 6 Card */}
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top img-fluid mx-auto d-block" src={Translate} alt="Project Translate" />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      translate.ge <code>Translation App</code>
                    </h3>
                    <p className="card-text text-secondary">
                      Translate.ge provides a modern, user-friendly translation service designed to break language barriers and facilitate communication.
                    </p>
                    <a href="https://translate.ge/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section Button */}
        <section className="py-5 bg-light">
          <div className="container px-3 my-5 text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <a className="btn btn-lg btn-primary" href="/#contact">
              Contact us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
