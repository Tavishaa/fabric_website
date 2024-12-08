import { Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-sky-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 justify-center">
            <Phone className="text-sky-600" size={24} />
            <div>
              <h3 className="font-semibold text-sky-900">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 justify-center">
            <Mail className="text-sky-600" size={24} />
            <div>
              <h3 className="font-semibold text-sky-900">Email</h3>
              <p className="text-gray-600">info@fabrictech.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 justify-center">
            <Clock className="text-sky-600" size={24} />
            <div>
              <h3 className="font-semibold text-sky-900">Business Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;