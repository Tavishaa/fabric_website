import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=1200",
    title: "Premium Interlining",
    description: "High-quality interlining fabrics for perfect garment structure"
  },
  {
    url: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200",
    title: "Advanced Manufacturing",
    description: "State-of-the-art manufacturing facilities ensuring top quality"
  },
  {
    url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200",
    title: "Quality Control",
    description: "Rigorous quality checks at every production stage"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@yourcompany.com?subject=Inquiry%20About%20Interlining%20Fabrics&body=I%20would%20like%20to%20know%20more%20about%20your%20products.";
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-400 to-blue-500 opacity-90">
          <motion.div
            animate={{
              background: [
                "linear-gradient(to right bottom, #60a5fa, #38bdf8, #60a5fa)",
                "linear-gradient(to right bottom, #38bdf8, #60a5fa, #38bdf8)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          />
        </div>

        <div id="home" className="relative py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center md:text-left text-white"
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Premium Interlining Fabrics for Your Needs
                </motion.h1>
                <motion.p 
                  className="text-xl mb-8 text-blue-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Leading Manufacturer, Supplier, Importer & Trader of High-Quality Interlining Fabrics
                </motion.p>
                <motion.div 
                  className="flex gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="inline-flex items-center bg-blue-50 text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
                  >
                    Get in Touch
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmail}
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <Mail size={20} />
                    Email Us
                  </motion.button>
                </motion.div>
              </motion.div>
              
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={images[currentIndex].url}
                      alt={images[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8"
                    >
                      <h3 className="text-2xl font-bold mb-2 text-white">{images[currentIndex].title}</h3>
                      <p className="text-lg text-blue-50">{images[currentIndex].description}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white transition-colors"
                >
                  <ChevronRight size={24} />
                </motion.button>
                
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about-preview" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-8">About Our Company</h2>
              <p className="text-xl text-blue-800/80 mb-10 leading-relaxed">
                With over two decades of experience in the textile industry, we've established ourselves
                as a leading manufacturer and supplier of premium interlining fabrics. Our commitment
                to quality and innovation has made us a trusted partner for businesses worldwide.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/#/about"
                  className="inline-block bg-gradient-to-r from-blue-500 to-sky-500 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 