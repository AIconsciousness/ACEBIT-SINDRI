import React from "react";
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
  Globe
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/acebitsindri", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com/AceSindri/", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "ℹ️" },
    { name: "Events", href: "/events", icon: "📅" },
    { name: "Gallery", href: "/gallery", icon: "🖼️" },
    { name: "Team", href: "/core", icon: "👥" },
            { name: "Contact", href: "/contact", icon: "📞" }
  ];

  const contactInfo = [
    { icon: MapPin, text: "B.I.T. Sindri, Dhanbad, Jharkhand", color: "text-red-500" },
    { icon: Mail, text: "acebitsindri@gmail.com", color: "text-blue-500" },
    { icon: Phone, text: "+91 6203112525 (President)", color: "text-green-500" },
    { icon: Phone, text: "+91 7505198506 (Prof. Incharge)", color: "text-green-500" }
  ];

  const features = [
    { icon: Building, title: "Quality Education", desc: "Hands-on learning experiences" },
    { icon: Users, title: "Strong Community", desc: "400+ general members" },
    { icon: Award, title: "Excellence", desc: "5+ years of leadership" },
    { icon: Globe, title: "Industry Connect", desc: "Bridge academia and industry" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">ACE BITS</h3>
                <p className="text-gray-400 text-sm">Civil Engineers Association</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Association of Civil Engineers at BIT Sindri, fostering excellence in civil engineering 
              through innovation, collaboration, and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-yellow-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-yellow-400" />
              Contact Info
            </h4>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${info.color}`}>
                    <info.icon size={16} />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              Why Choose Us
            </h4>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">{feature.title}</div>
                    <div className="text-xs text-gray-400">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institute Vision Card */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl border border-white/10 animate-slide-up">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Globe className="w-6 h-6 mr-2 text-yellow-400" />
              Institute Vision
            </h4>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto">
              To provide valuable human resources for the industry and society through excellence 
              in technical education and scientific research for sustainable development.
            </p>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-4 border border-yellow-500/30">
              <p className="text-yellow-400 font-semibold text-lg">
                "Building the future, one engineer at a time"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 animate-fade-in">
              © {currentYear} Association of Civil Engineers, BIT Sindri. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm animate-fade-in">
              Made with <Heart size={16} className="mx-1 text-red-500 animate-pulse" /> by ACE Team
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-3xl transition-all duration-300 z-50 group"
      >
        <div className="group-hover:animate-bounce">
          ↑
        </div>
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </footer>
  );
};

export default Footer;
