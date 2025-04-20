
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-tiki-dark">Zar's <span className="text-tiki-blue">Tiki</span> Shack</span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-tiki-dark hover:text-tiki-blue">About</a>
            <a href="#menu" className="font-medium text-tiki-dark hover:text-tiki-blue">Menu</a>
            <a href="#catering" className="font-medium text-tiki-dark hover:text-tiki-blue">Catering</a>
            <a href="#contact" className="font-medium text-tiki-dark hover:text-tiki-blue">Contact</a>
            <Button className="bg-tiki-pink hover:bg-tiki-pink/90 text-white rounded-full">
              Book Now
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#menu" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#catering" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </a>
              <a 
                href="#contact" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-tiki-pink hover:bg-tiki-pink/90 text-white rounded-full mx-4">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
