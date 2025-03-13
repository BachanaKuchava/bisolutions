import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import StartUps from './pages/StartUps';
import Layout from './pages/layout/Layout';
import PricingPage from './pages/pricingPage/PricingPage';

function App() {
  return (
    <BrowserRouter>
    
    
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <Routes>

          <Route path='/' element={<Layout />} />
          <Route path='startup' element={<StartUps />} />
          <Route path='pricingPage' element={<StartUps />} />
         
        {/* <StartUps/> */}
        </Routes>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
