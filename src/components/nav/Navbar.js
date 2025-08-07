import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Home, Info, Users, Calendar, Image, Award, Settings } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Faculty", href: "/faculty", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Gallery", href: "/gallery", icon: Image },
    { 
      name: "Team", 
      href: "#",
      icon: Award,
      dropdown: [
        { name: "2K23", href: "/team2k23" },
        { name: "2K22", href: "/core" },
        { name: "2K21", href: "/team2k21" },
        { name: "2K20", href: "/team2k20" }
      ]
    },
    { 
      name: "Others", 
      href: "#",
      icon: Settings,
      dropdown: [
        { name: "Constitution", href: "/constitution" },
        { name: "Magazine", href: "/magazine" },
        { name: "Contact Us", href: "/contact" },
        { name: "Laboratory", href: "/lab" }
      ]
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <img
                src={logo}
                alt="ACE Logo"
                className="h-14 w-14 object-contain group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className={`text-2xl font-bold font-heading ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                ACE BITS
              </span>
              <div className={`text-xs font-medium ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Civil Engineers Association
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} scrolled={scrolled} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            className={`lg:hidden p-3 rounded-xl hover:scale-95 transition-all duration-300 ${
              scrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/20 animate-slide-down"
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <MobileNavItem key={index} item={item} onClose={() => setIsOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ item, scrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="relative">
        <button
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
            scrolled 
              ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
              : 'text-white hover:text-yellow-400 hover:bg-white/10'
          }`}
        >
          <item.icon size={18} />
          <span>{item.name}</span>
          <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 animate-scale-in"
          >
            {item.dropdown.map((dropdownItem, index) => (
              <a
                key={index}
                href={dropdownItem.href}
                className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="font-medium">{dropdownItem.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
        scrolled 
          ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
          : 'text-white hover:text-yellow-400 hover:bg-white/10'
      }`}
    >
      <item.icon size={18} />
      <span>{item.name}</span>
    </a>
  );
};

const MobileNavItem = ({ item, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-yellow-400 hover:bg-white/10 rounded-xl transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </div>
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        {isDropdownOpen && (
          <div className="ml-8 mt-2 space-y-1 animate-slide-up">
            {item.dropdown.map((dropdownItem, index) => (
              <a
                key={index}
                href={dropdownItem.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="font-medium">{dropdownItem.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClose}
      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 rounded-xl transition-all duration-300"
    >
      <item.icon size={20} />
      <span className="font-medium">{item.name}</span>
    </a>
  );
};

export default Navbar;
