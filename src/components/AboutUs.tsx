import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-900 mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-sky-800 mb-4">Your Trusted Partner in Textile Solutions</h3>
            <p className="text-gray-600 mb-6">
              Since our establishment, FabricTech has been at the forefront of textile innovation, 
              specializing in manufacturing and supplying premium interlining fabrics. Our commitment 
              to quality and customer satisfaction has made us a leading name in the textile industry.
            </p>
            <p className="text-gray-600">
              With state-of-the-art manufacturing facilities and a dedicated team of experts, 
              we ensure that every product meets the highest standards of quality and durability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-sky-50 p-6 rounded-lg">
              <Award className="text-sky-600 mb-3" size={32} />
              <h4 className="font-semibold text-sky-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">ISO certified manufacturing process</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-lg">
              <Users className="text-sky-600 mb-3" size={32} />
              <h4 className="font-semibold text-sky-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Skilled professionals with years of experience</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-lg">
              <Globe className="text-sky-600 mb-3" size={32} />
              <h4 className="font-semibold text-sky-900 mb-2">Global Reach</h4>
              <p className="text-gray-600">Serving clients worldwide</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-lg">
              <TrendingUp className="text-sky-600 mb-3" size={32} />
              <h4 className="font-semibold text-sky-900 mb-2">Innovation</h4>
              <p className="text-gray-600">Continuous research and development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;