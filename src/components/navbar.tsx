import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import parayaLogo from "../images/PARAYA.png";
import { useNavigate } from "react-router-dom";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Discover Opportunities", href: "/opportunities" },
    { name: "My Profile", href: "/profile" },
    { name: "Recruit Volunteers", href: "/organizations"},
    { name: "Help Center", href: "/help-center" },
  ];

  const handleSignIn = () => {
    navigate("/authentication");
  };

  return (
    <nav style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)' }} className="shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary mr-2" style={{ color: '#179eb0', userSelect: 'none' }}>
                PARAYA
              </span>
              <img
                src={parayaLogo}
                alt="DYCI Logo"
                width={40}
                height={40}
                className="h-11 w-auto"
                style={{ userSelect: 'none' }}
              />
            </div>
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#fff] hover:text-[#179eb0] px-3 py-2 rounded-md text-base font-medium relative group"
                    style={{ userSelect: 'none' }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#179eb0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="default" onClick={handleSignIn} style={{ userSelect: 'none' }}>Sign In</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
              </a>
            ))}
            <Button variant="default" className="w-full mt-2" onClick={handleSignIn}>
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}