import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <ContactInfo />
              <ContactForm />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={
            <>
              <ContactInfo />
              <ContactForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;