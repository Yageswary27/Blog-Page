import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-blue-700 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">IT</span>
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-blue-700' : 'text-blue-700'}`}>
            TechNova
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/services" 
            className={`font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            <Search size={20} />
          </button>
          <button className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-gray-700'
          }`}>
            <Globe size={20} />
          </button>
          <Link 
            to="/subscribe" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 inset-x-0 z-50 transition-all duration-300 ease-in-out">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  <Search size={18} className="mr-2" />
                  Search
                </button>
              </div>
              <div className="mt-3 px-3">
                <button className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 flex items-center">
                  <Globe size={18} className="mr-2" />
                  Change Language
                </button>
              </div>
              <div className="mt-3 px-2">
                <Link 
                  to="/subscribe" 
                  className="block w-full bg-blue-600 text-white px-3 py-2 rounded-md text-center font-medium hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <SearchBar onSearch={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;