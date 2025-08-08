import React, { useState, useEffect } from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart,
  Building,
  Users,
  Award,
  Globe,
  ArrowUp,
  Calendar,
  BookOpen,
  Shield,
  Target,
  Star
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/acebitsindri", 
      label: "Facebook", 
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/AceSindri/", 
      label: "Twitter", 
      color: "from-sky-500 to-sky-600",
      hoverColor: "hover:shadow-sky-500/50"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram", 
      color: "from-pink-600 to-rose-600",
      hoverColor: "hover:shadow-pink-500/50"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn", 
      color: "from-blue-700 to-indigo-700",
      hoverColor: "hover:shadow-blue-700/50"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: Building },
    { name: "About", href: "/about", icon: BookOpen },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Gallery", href: "/gallery", icon: Star },
    { name: "Team", href: "/core", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: "B.I.T. Sindri, Dhanbad, Jharkhand", 
      color: "from-red-500 to-pink-500",
      link: "https://maps.google.com/?q=BIT+Sindri+Dhanbad"
    },
    { 
      icon: Mail, 
      text: "acebitsindri@gmail.com", 
      color: "from-blue-500 to-cyan-500",
      link: "mailto:acebitsindri@gmail.com"
    },
    { 
      icon: Phone, 
      text: "+91 6203112525 (President)", 
      color: "from-green-500 to-emerald-500",
      link: "tel:+916203112525"
    },
    { 
      icon: Phone, 
      text: "+91 7505198506 (Prof. Incharge)", 
      color: "from-green-500 to-emerald-500",
      link: "tel:+917505198506"
    }
  ];

  const achievements = [
    { icon: Award, title: "5+ Years", desc: "Of Excellence", color: "from-yellow-500 to-orange-500" },
    { icon: Users, title: "400+", desc: "General Members", color: "from-blue-500 to-indigo-500" },
    { icon: Calendar, title: "100+", desc: "Events Organized", color: "from-green-500 to-emerald-500" },
    { icon: Target, title: "Leading", desc: "Civil Organization", color: "from-purple-500 to-pink-500" }
  ];

  const visionPoints = [
    "Excellence in Technical Education",
    "Sustainable Development Focus", 
    "Industry-Academia Bridge",
    "Innovation & Research Culture"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

      {/* Simple Header Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                <span className="text-white font-black text-2xl">A</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">ACE BIT SINDRI</h2>
                <p className="text-gray-400 text-lg">Association of Civil Engineers</p>
              </div>
            </div>
            
            {/* Social Media Links - Simple */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Quick Navigation */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <span className="inline-flex w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg items-center justify-center mr-3 md:mr-4 shrink-0 ring-1 ring-white/10 shadow">
                <ExternalLink className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-2xl font-bold">Quick Links</h3>
            </div>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <link.icon size={16} className="mr-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <span className="inline-flex w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg items-center justify-center mr-3 md:mr-4 shrink-0 ring-1 ring-white/10 shadow">
                <Mail className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-2xl font-bold">Contact Us</h3>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <info.icon size={16} className="mr-3 mt-1 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <span className="inline-flex w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg items-center justify-center mr-3 md:mr-4 shrink-0 ring-1 ring-white/10 shadow">
                <Award className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-2xl font-bold">Our Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <achievement.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-white truncate">{achievement.title}</h4>
                    <p className="text-sm text-gray-400 truncate">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <span className="inline-flex w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg items-center justify-center mr-3 md:mr-4 shrink-0 ring-1 ring-white/10 shadow">
                <Target className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <div className="space-y-3">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institute Mission Statement */}
        <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg items-center justify-center mr-3 ring-1 ring-white/10 shadow">
                <Globe className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-2xl font-bold text-white">Institute Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto">
              To provide valuable human resources for the industry and society through excellence 
              in technical education and scientific research for sustainable development.
            </p>
            <p className="text-yellow-400 font-semibold text-lg">
              "Building the future, one engineer at a time"
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Association of Civil Engineers, BIT Sindri. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by ACE Team</span>
              <Shield size={16} className="text-green-500 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-3xl transition-all duration-300 z-50 group border border-white/20"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </footer>
  );
};

export default Footer;
