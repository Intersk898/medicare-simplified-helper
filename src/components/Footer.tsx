import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg">Mazari Health</h3>
            <p className="text-gray-600 text-sm">
              Your trusted Medicare insurance partner in California, helping you navigate your healthcare journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/medicare-basics" className="hover:text-primary transition-colors">Medicare Basics</a></li>
              <li><a href="/coverage-options" className="hover:text-primary transition-colors">Coverage Options</a></li>
              <li><a href="/resources" className="hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Los Angeles, CA</li>
              <li>Phone: (213) 322-3542</li>
              <li>Email: info@mazarihealth.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>8 a.m. to 8 p.m.</li>
              <li>7 days a week</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col space-y-4">
            <div className="text-sm text-gray-600">
              <p>California License #6010059 Mazari Health Insurance Services, LLC.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                Copyright © {new Date().getFullYear()} Mazari Health. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="/report-fraud" className="hover:text-primary transition-colors">Report Suspected Fraud, Waste & Abuse</a>
                <a href="/accessibility" className="hover:text-primary transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;