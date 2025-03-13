import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppHero from '../../components/hero';
import AppAbout from '../../components/about';
import AppServices from '../../components/services';
import AppWorks from '../../components/works';
import AppPricing from '../../components/pricing';
import AppBlog from '../../components/blog';
import AppContact from '../../components/contact';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Remove the hash from the URL after scrolling
        window.history.replaceState(null, '', location.pathname);
      }
    }
  }, [location]);

  return (
    <>
      <div id="home">
        <AppHero />
      </div>
      <div id="about">
        <AppAbout />
      </div>
      <div id="services">
        <AppServices />
      </div>
      {/* Uncomment if needed */}
      {/* <div id="works">
        <AppWorks />
      </div> */}
      <div id="pricing">
        <AppPricing />
      </div>
      <div id="blog">
        <AppBlog />
      </div>
      <div id="contact">
        <AppContact />
      </div>
    </>
  );
}

export default Layout;
