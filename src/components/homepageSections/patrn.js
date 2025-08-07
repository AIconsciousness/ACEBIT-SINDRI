import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { 
  Quote, 
  Star, 
  Award, 
  Users, 
  Heart, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building,
  Target,
  Zap
} from "lucide-react";

// Import real faculty photos
import jituhod from "../../assets/images/faculty/jituhod.webp";
import pksharma from "../../assets/images/faculty/pksharma.webp";
import prashantmalvia from "../../assets/images/faculty/prashantmalvia.webp";
import sanjay_shukla from "../../assets/images/faculty/sanjay_shukla.webp";

const PatronageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('right');

  const patrons = [
    {
      id: 1,
      name: "Prof. Pankaj Rai",
      position: "Director",
      institution: "BIT Sindri",
      location: "Dhanbad, Jharkhand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "I wish to express my appreciation and thanks to the professors and students whose many long hours of efforts in organizing activities made this association get significance and its true worth.",
      rating: 5,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Prof. Jitu Kujur",
      position: "Head of Department",
      institution: "Civil Engineering, BIT Sindri",
      location: "Dhanbad, Jharkhand",
      image: jituhod,
      quote: "I extend heartfelt gratitude to the professors and students whose dedicated efforts and countless hours organizing activities have bestowed significance upon this association.",
      rating: 5,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Prof. P.K Sharma",
      position: "Professor Incharge",
      institution: "ACE BIT Sindri",
      location: "Dhanbad, Jharkhand",
      image: pksharma,
      quote: "I deeply appreciate the unwavering commitment of professors and students who dedicated countless hours to organizing activities.",
      rating: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Prashant Ranjan Malviya",
      position: "Assistant Professor Incharge",
      institution: "ACE BIT Sindri",
      location: "Dhanbad, Jharkhand",
      image: prashantmalvia,
      quote: "I want to express my deepest gratitude to both students and faculty for their invaluable contributions to our academic community. Thank you for your tireless efforts and involvement in our activities and events.",
      rating: 5,
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % patrons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, patrons.length]);

  const nextPatron = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % patrons.length);
    setIsAutoPlaying(false);
  };

  const prevPatron = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + patrons.length) % patrons.length);
    setIsAutoPlaying(false);
  };

  const goToPatron = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentPatron = patrons[currentIndex];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm sm:text-lg font-bold mb-4 sm:mb-6 md:mb-8 text-white animate-slide-up shadow-lg">
            <Award className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-pulse" />
            Our Esteemed Patrons
            <Award className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 animate-pulse" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-4 sm:mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            LEADERSHIP
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              & GUIDANCE
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4" style={{animationDelay: '0.4s'}}>
            Meet the distinguished leaders who guide and inspire our academic excellence and innovation
          </p>
        </div>

        {/* Main Patronage Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 relative overflow-hidden animate-slide-up" style={{animationDelay: '0.6s'}}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentPatron.color} opacity-10 transition-all duration-1000`}></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Patron Image */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden ring-4 sm:ring-6 md:ring-8 ring-white/20 shadow-2xl transition-all duration-1000 hover:scale-105 transform ${
                      direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                    }`}>
                      <img 
                        src={currentPatron.image} 
                        alt={currentPatron.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Star className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    
                    {/* Auto-play Indicator */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Patron Content */}
                <div className="lg:col-span-2">
                  <div className="text-center lg:text-left">
                    {/* Quote Icon */}
                    <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r ${currentPatron.color} rounded-full flex items-center justify-center shadow-lg animate-pulse transform ${
                        direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                      }`}>
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-relaxed italic transform transition-all duration-1000 px-2 sm:px-0 ${
                      direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                    }`}>
                      "{currentPatron.quote}"
                    </blockquote>

                    {/* Patron Info */}
                    <div className={`space-y-3 sm:space-y-4 transform transition-all duration-1000 ${
                      direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                    }`}>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">
                        {currentPatron.name}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-gray-300 text-sm sm:text-base">
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                          <span className="font-semibold">{currentPatron.position}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                          <span>{currentPatron.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                          <span>{currentPatron.location}</span>
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center lg:justify-start mt-4 sm:mt-6">
                        {[...Array(currentPatron.rating)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${index * 0.1}s`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 space-x-4 sm:space-x-8">
            {/* Previous Button */}
            <button
              onClick={prevPatron}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2 sm:space-x-3">
              {patrons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPatron(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "bg-yellow-500 scale-125 shadow-lg" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPatron}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
            </button>
          </div>

          {/* Patron Counter */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-300 text-sm sm:text-lg">
              {currentIndex + 1} of {patrons.length} Patrons
            </p>
            <div className="mt-2">
              <div className="w-24 sm:w-32 h-1 bg-white/20 rounded-full mx-auto">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
                  style={{ width: `${((currentIndex + 1) / patrons.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">4</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">Esteemed Patrons</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">20+</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">5.0</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">100%</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">Satisfaction</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PatronageSection;
