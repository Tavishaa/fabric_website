import { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and display success message
    setIsSubmitted(true);
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <motion.h2
        className="text-2xl font-bold text-primary mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-green-500"
        >
          <h3 className="text-xl">Thank you for contacting us!</h3>
          <p>We will get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'phone', 'productInterest', 'description'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <label className="block text-gray-700 mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              {field !== 'description' ? (
                field === 'productInterest' ? (
                  <select
                    name={field}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-lg transition-all"
                    value={formData[field]}
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    <option value="nonwoven-nonfusible">Non Woven Non Fusible Fabrics</option>
                    <option value="nonwoven-fusible">Non Woven Fusible Interlinings</option>
                    <option value="embroidery-backing">Embroidery Backing Fabrics</option>
                    <option value="knitted-fusible">Knitted Fusible Interlinings</option>
                    <option value="weft-insert">Weft Insert Fusible Interlinings</option>
                    <option value="woven">Cotton and Polyester Woven Interlinings</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <input
                    type={field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-lg transition-all"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                )
              ) : (
                <textarea
                  name={field}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-lg transition-all"
                  value={formData[field]}
                  onChange={handleChange}
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Submit
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default ContactForm;