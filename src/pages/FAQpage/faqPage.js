import React, {useState} from "react";
import './faqPageStyle.css';
import { Link } from "react-router-dom";


function Faq() {
    return(
        <>
             <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
              <a className="navbar-brand" href="index.html">
                Start Bootstrap
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="faq.html">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownBlog"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                      <li>
                        <a className="dropdown-item" href="blog-home.html">
                          Blog Home
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-post.html">
                          Blog Post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownPortfolio"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Portfolio
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                      <li>
                        <a className="dropdown-item" href="portfolio-overview.html">
                          Portfolio Overview
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="portfolio-item.html">
                          Portfolio Item
                        </a>
                      </li>
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
                <h1 className="fw-bolder">Frequently Asked Questions</h1>
                <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
              </div>
              <div className="row gx-5">
                <div className="col-xl-8">
                  {/* FAQ Accordion 1 */}
                  <h2 className="fw-bolder mb-3">Price &amp; Time &amp; Support</h2>
                  <div className="accordion mb-5" id="accordionExample">
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How long does it take to build a website or app?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse show"
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        The development time varies depending on the complexity of the project.
                         <strong>A simple website</strong> may take <code>2-4 weeks</code>, while a <strong>complex web or mobile application</strong> 
                     can take <code>several months</code>. We provide a detailed timeline after discussing your
                           project requirements.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How much does it cost to develop a website or mobile app?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse"
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        The cost depends on various factors such as <code>features, design complexity,
                         and required integrations.</code> Contact us for a free consultation, and we'll
                          provide a custom quote based on your needs.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                           Do you provide website maintenance and support?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse"
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                        Yes! We offer website and app maintenance, security updates,
                         bug fixes, and ongoing support to ensure your digital platforms run smoothly.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Accordion 2 */}
                  <h2 className="fw-bolder mb-3">More Questions</h2>
                  <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                           Can you help with e-commerce website development?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse show"
                        id="collapseOne2"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                        Absolutely! We build high-performance e-commerce
                         websites and apps with features like <code>secure payments,
                          product management, and order tracking.</code>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingTwo2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          Do you provide custom software solutions for businesses?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse"
                        id="collapseTwo2"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                        Yes! We develop custom software solutions for businesses in various industries, <code>
                         including finance, healthcare, logistics, and retail.</code>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header" id="headingThree2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree2"
                          aria-expanded="false"
                          aria-controls="collapseThree2"
                        >
                          Can you integrate third-party services like payment gateways or CRMs?
                        </button>
                      </h3>
                      <div
                        className="accordion-collapse collapse"
                        id="collapseThree2"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                        Yes! We integrate various third-party services, including payment gateways (<code>Google-Pay, PayPal, etc.</code>), 
                        <strong>CRM systems, ERP software, and APIs to enhance your business operations.</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card border-0 bg-light mt-xl-5">
                    <div className="card-body p-4 py-lg-5">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <div className="h6 fw-bolder">Have more questions?</div>
                          <p className="text-muted mb-4">
                            Email us at <br />
                            <a href="#!">bisolutionsbis@gmail.com</a>
                          </p>
                          {/* <div className="h6 fw-bolder">Follow us</div> */}
                          <div className="h6 fw-bolder">Or Call Us</div>

                          {/* <a className="fs-5 px-2 link-dark" href="#!">
                            <i className="bi-twitter faq-icons" />
                          </a>
                          <a className="fs-5 px-2 link-dark" href="#!">
                            <i className="bi-facebook faq-icons" />
                          </a>
                          <a className="fs-5 px-2 link-dark" href="#!">
                            <i className="bi-linkedin faq-icons" />
                          </a>
                          <a className="fs-5 px-2 link-dark" href="#!">
                            <i className="bi-youtube faq-icons" />
                          </a> */}
                         <div type="" class="">(+995) 599-38-32-23 </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
        </>
    )
}

export default Faq;