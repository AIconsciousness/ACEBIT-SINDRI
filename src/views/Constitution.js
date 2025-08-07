import React from "react";
import { Container } from "react-bootstrap";
import { 
  Download, 
  FileText, 
  Award,
  Shield,
  Users,
  Target,
  BookOpen,
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";
import BannerImg from "../assets/images/constitution.svg";
import MainImg from "../assets/images/0001.jpg";

const Constitution = () => {
  const sections = [
    {
      title: "Preamble",
      description: "Foundation principles and objectives of the Association of Civil Engineers",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Membership",
      description: "Guidelines for membership eligibility, rights, and responsibilities",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Governance",
      description: "Organizational structure, roles, and decision-making processes",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Code of Conduct",
      description: "Professional ethics and behavioral standards for all members",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Activities & Events",
      description: "Framework for organizing academic and cultural activities",
      icon: Calendar,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Amendments",
      description: "Procedures for constitutional changes and updates",
      icon: BookOpen,
      color: "from-teal-500 to-green-500"
    }
  ];

  const highlights = [
    { label: "Established", value: "2017" },
    { label: "Active Members", value: "400+" },
    { label: "Events Organized", value: "100+" },
    { label: "Years of Excellence", value: "7+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Official Document
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block">ACE BITS</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  CONSTITUTION
                </span>
              </h1>
              <div className="space-y-2 mb-8">
                <p className="text-xl text-slate-300 flex items-center">
                  <Award className="w-5 h-5 mr-3 text-yellow-400" />
                  Association of Civil Engineers
                </p>
                <p className="text-lg text-slate-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  B.I.T Sindri, Dhanbad
                </p>
                <p className="text-lg text-slate-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-3 text-green-400" />
                  Established 2017
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drive.google.com/file/d/13GrwttLjVEwl3Syfn-0tLmq_WdcHbWqQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Constitution
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 border backdrop-blur-sm" style={{backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.3)'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                  <FileText className="w-5 h-5 mr-2" />
                  View Details
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative rounded-3xl p-8 border backdrop-blur-sm" style={{backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)'}}>
                <img 
                  src={BannerImg} 
                  alt="Constitution" 
                  className="w-full h-64 object-contain filter brightness-110"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Constitution Sections */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Constitutional
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Framework
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our constitution establishes the fundamental principles, governance structure, and operational guidelines that guide the Association of Civil Engineers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Section Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Section Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Read More Button */}
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-2">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Constitutional Document Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Official Document
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Preview
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                The ACE BITS Constitution serves as the foundational document that outlines our mission, vision, organizational structure, and operational procedures. It ensures transparency, accountability, and excellence in all our activities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Comprehensive governance framework</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Clear member rights and responsibilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Professional code of conduct</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-slate-600">Event organization guidelines</p>
                </div>
              </div>

              <a 
                href="https://drive.google.com/file/d/13GrwttLjVEwl3Syfn-0tLmq_WdcHbWqQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <FileText className="w-5 h-5 mr-2" />
                Access Full Document
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <img 
                  src={MainImg} 
                  alt="Constitution Document" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Professional Community
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Become part of the Association of Civil Engineers and contribute to the advancement of civil engineering education and research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Users className="w-5 h-5 mr-2" />
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30">
                <FileText className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Constitution;