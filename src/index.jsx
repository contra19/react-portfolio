import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Portfolio from './pages/portfolio.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
import './css/styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
