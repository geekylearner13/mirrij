
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg"><img src="https://github.com/geekylearner13/mirrij/blob/main/public/assets/Narayan%20Research%20and%20Education%20Logo-edit.png?raw=true" alt="company-logo" /></span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Narayan Research</h3>
                <p className="text-sm text-gray-300">& Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing multidisciplinary research and innovation through the 
              Multidisciplinary International Review Research and Innovation Journal (MIRRIJ).
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-academic-blue-light mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Manuscript Submission: editornarayanaresearch@gmail.com</p>
                  <p className="text-gray-300">General Inquiries: publicationarticle146@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-academic-blue-light mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">+91- 7033113161</p>
                  <p className="text-gray-300">WhatsApp: +91- 7033113161</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-academic-blue-light mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Multidisciplinary International Review Research and Innovation Journal (MIRRIJ)
Narayan Research and Education
<br />
                  Jharkhand<br />
                  India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-academic-blue-light mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Office Hours:</p>
                  <p>10:00 AM – 6:00 PM (IST), Monday to Saturday</p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about-journal" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About MIRRIJ
              </a>
              <a href="/instructions-to-authors" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Submission Guidelines
              </a>
              <a href="/how-to-submit" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Submit Paper
              </a>
              <a href="/current-issue" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Current Issue
              </a>
              <a href="/ethics" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Publication Ethics
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-academic-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-academic-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-academic-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4">
              <h5 className="font-medium text-sm mb-2">Subscribe to Updates</h5>
              <p className="text-xs text-gray-400">
                Get notified about new issues and announcements
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Narayan Research and Education. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/ethics" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/ethics" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/ethics" className="hover:text-white transition-colors">Publication Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;