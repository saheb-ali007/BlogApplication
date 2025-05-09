import React from 'react';
// Optional: Import icons if you want to use them (e.g., from react-icons)
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-100">
      <div className="container mx-auto">
        {/* Top Section: Logo/Brand and Navigation (optional) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-gray-700">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            YourLogo
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-white transition duration-300">Home</a>
            <a href="#" className="hover:text-white transition duration-300">Blogs</a>
          </nav>
        </div>

        {/* Middle Section: Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-center md:text-left">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="/faq" className="hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Column 2: Contact Info (Example) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p><i>Team-B</i></p>
            <p>ABC Road</p>
            <p>Dhaka-1200, Bangladesh</p>
            <p>Email: <a href="mailto:teamb@info.com" className="hover:text-white transition duration-300">teamb@info.com</a></p>
            <p>Phone: <a href="tel:+8801234567890" className="hover:text-white transition duration-300">(+88) 01234-567-890</a></p>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Replace with actual links and icons */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-300">
                {/* <FaTwitter size={24} />  <- Example using react-icons */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> {/* Placeholder SVG */}
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.775-.023-1.15-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition duration-300">
                {/* <FaGithub size={24} /> */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> {/* Placeholder SVG */}
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Add more social links */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; {currentYear} Team-B. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;