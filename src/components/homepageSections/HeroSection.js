import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Play, Users, Award, BookOpen, ChevronDown, Building, GraduationCap, Globe } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: GraduationCap, title: "Quality Education", desc: "Hands-on learning experiences" },
    { icon: Globe, title: "Industry Connect", desc: "Bridge academia and industry" },
    { icon: Users, title: "Community", desc: "Strong alumni network" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Container className="py-20">
          <Row className="justify-content-center">
            {/* Centered Content */}
            <Col lg={8} className="text-center text-white">
              <div className="animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium mb-6 animate-slide-up">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Premier Civil Engineering Association
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Welcome to
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Association of Civil Engineers
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
                  Building the future through innovation, collaboration, and excellence in civil engineering at 
                  <span className="text-yellow-400 font-semibold"> BIT Sindri, Dhanbad</span>
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                      <div>
                        <div className="font-semibold text-sm">{feature.title}</div>
                        <div className="text-xs text-gray-400">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-yellow-400 hover:to-orange-400 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                    <Play size={20} className="mr-2 group-hover:animate-pulse" />
                    Explore About Us
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>

                  <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Users size={20} className="mr-2" />
                    Join Our Community
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default HeroSection;
