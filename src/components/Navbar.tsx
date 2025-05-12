import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-16 w-[200px] overflow-hidden">
              <img 
                src="./images/IMG_5128.PNG" 
                alt="Zar's Tiki Shack" 
                className="h-[140%] w-full object-cover object-center scale-[1.08]"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="font-medium text-tiki-dark hover:text-tiki-blue">About</Link>
            <Link to="/#menu" className="font-medium text-tiki-dark hover:text-tiki-blue">Menu</Link>
            <Link to="/catering" className="font-medium text-tiki-dark hover:text-tiki-blue">Catering</Link>
            <Link to="/#contact" className="font-medium text-tiki-dark hover:text-tiki-blue">Contact</Link>
            <Link to="/#contact">
              <Button className="bg-tiki-pink hover:bg-tiki-pink/90 text-white rounded-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/#about" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#menu" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/catering" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </Link>
              <Link 
                to="/#contact" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-tiki-pink hover:bg-tiki-pink/90 text-white rounded-full mx-4">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
