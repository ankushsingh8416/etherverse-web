import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import About from '@components/About/about';
import Navbar from '@components/Navbar/navbar';
import Footer from '@components/Footer/footer';
import Faq from '@components/FAQ/Faq';
import Blog from "@components/Blog/blog";
import Blog2 from '@components/pages/blog2';
import Blog1 from '@components/pages/blog1';
import Contact from '@components/Contact/contact';

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTopOnNavigation />
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
);
