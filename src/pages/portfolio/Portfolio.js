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
          <div className="container px-5">
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
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Our Work</h1>
              <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
            </div>
            <div className="row gx-5">
              {/* Project 1 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={xsIgrace} alt="Project Alpha" />
                  <div className="card-body">
                    <h3 className="card-title">
                      xsigrace.si <code>Ecommerce</code>
                    </h3>
                    <p className="card-text text-secondary">
                      XS Igrače is a Slovenian toy company with an advanced e-commerce platform that offers automated delivery and tracking,
                      an AI-integrated admin panel, and Photoshop integration for dynamic product displays. To enhance customer convenience,
                      the platform supports multiple payment methods, including Slovenian bank payments, Google Pay, and PayPal.
                    </p>
                    <a href="https://xsigrace.si/en" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://xsigrace.si/en
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={spNews} alt="Project Beta" />
                  <div className="card-body">
                    <h3 className="card-title">
                      spnews.io <code>News|Radio</code>
                    </h3>
                    <p className="card-text text-secondary">
                      SP News is a Georgian news website that offers a comprehensive blog system and live radio streaming, providing users with up-to-date news and engaging content.
                      The platform features a modern admin panel, streamlining content management and enhancing user experience.
                    </p>
                    <a href="https://spnews.io/ge" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://spnews.io/ge
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={Ammo} alt="Project Gamma" />
                  <div className="card-body">
                    <h3 className="card-title">
                      ammoexchange.com <code>Trading Platform</code>
                    </h3>
                    <p className="card-text">
                      A dynamic project that blends creative ideas with modern technology for interactive experiences.
                    </p>
                    <a href="https://www.ammoexchange.com/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://www.ammoexchange.com/
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={SolarValley} alt="Project Delta" />
                  <div className="card-body">
                    <h3 className="card-title">
                      solarvalley.ge <code>Company Website</code>
                    </h3>
                    <p className="card-text">
                      Focused on sustainable energy, this project emphasizes eco-friendly design and robust functionality.
                    </p>
                    <a href="https://solarvalley.ge/ka/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://solarvalley.ge/ka/
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 5 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={Guda} alt="Project Gudabooks" />
                  <div className="card-body">
                    <h3 className="card-title">
                      gudabooks.ge <code>Ecommerce</code>
                    </h3>
                    <p className="card-text">
                      Gudabooks offers a seamless e-commerce experience for book lovers, combining modern design with efficient functionality.
                    </p>
                    <a href="https://gudabooks.ge/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://gudabooks.ge/
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 6 Card */}
              <div className="col-lg-6 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={Translate} alt="Project Translate" />
                  <div className="card-body">
                    <h3 className="card-title">
                      translate.ge <code>Translation App</code>
                    </h3>
                    <p className="card-text">
                      Translate.ge provides a modern, user-friendly translation service designed to break language barriers and facilitate communication.
                    </p>
                    <a href="https://translate.ge/" target="_blank" rel="noreferrer" className="btn btn-primary stretched-link">
                      https://translate.ge/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section Button */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
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
