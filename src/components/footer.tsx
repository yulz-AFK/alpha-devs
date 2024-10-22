import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import parayaLogo from "../images/PARAYA.png";

export function FooterComponent() {
  return (
    <div className="">
      <footer className="text-[black] py-12 mx-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ userSelect: 'none' }}>
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="mb-4">
                We connect volunteers with meaningful opportunities to make a
                difference in their communities and beyond.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/BAYANi/61566885762838/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:text-white" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:text-white" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:text-white" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:underline hover:text-white">
                    About the Developers
                  </a>
                </li>
                <li>
                  <a href="/opportunities" className="hover:underline hover:text-white">
                    Find Opportunities
                  </a>
                </li>
                <li>
                  <a href="/organizations" className="hover:underline hover:text-white">
                    For Organizations
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="hover:underline hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/testimonials" className="hover:underline hover:text-white">
                    Volunteer Stories
                  </a>
                </li>
                <li>
                  <a href="/partners" className="hover:underline hover:text-white">
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href="/donate" className="hover:underline hover:text-white">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src={parayaLogo} 
                alt="Description of the image" 
                style={{ width: '100%', height: 'auto', marginTop: '-30px' }} // Adjust styles as needed
              />
            </div>
          </div>
          <div className="mt-8 border-t border-[#041e25] pt-6 text-center text-sm text-[black]" style={{ userSelect: 'none' }}>
            <p>
              &copy; {new Date().getFullYear()} Paraya. All rights reserved.
            </p>
            <p className="mt-2">
              <a href="/privacy" className="hover:underline hover:text-white">
                Privacy Policy
              </a>
              {" | "}
              <a href="/terms" className="hover:underline hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}