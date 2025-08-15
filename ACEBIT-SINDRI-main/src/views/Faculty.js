import React from "react";
import { Container } from "react-bootstrap";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Star,
  Mail,
  Phone,
  MapPin,
  Building,
  BookOpen,
  Target,
  Linkedin
} from "lucide-react";

// Import faculty photos
import jituhod from "../assets/images/faculty/jituhod.webp";
import vikrama_pandey from "../assets/images/faculty/vikrama-pandey.webp";
import sanjay_shukla from "../assets/images/faculty/sanjay_shukla.webp";
import uksingh from "../assets/images/faculty/uksingh.webp";
import ranvijay from "../assets/images/faculty/ranvijay.webp";
import mayaray from "../assets/images/faculty/mayaray.webp";
import bdyadav from "../assets/images/faculty/bdyadav.webp";
import sheokumar from "../assets/images/faculty/sheokumar.webp";
import sarojmeena from "../assets/images/faculty/sarojmeena.webp";
import sumitkumar from "../assets/images/faculty/sumitkumar.webp";
import prakash from "../assets/images/faculty/prakash.webp";
import pksharma from "../assets/images/faculty/pksharma.webp";
import nishikant from "../assets/images/faculty/nishikant.webp";
import prashantmalvia from "../assets/images/faculty/prashantmalvia.webp";
import nipendas from "../assets/images/faculty/nipendas.webp";
import komal from "../assets/images/faculty/komal.webp";
import iqbal_sheikh from "../assets/images/faculty/iqbal_sheikh.webp";
import abhijeet_anand from "../assets/images/faculty/abhijeet_anand.webp";

const Faculty = () => {
  const facultyData = [
    {
      name: "Dr. Jitu Kujur",
      position: "Head of Department",
      image: jituhod,
      email: "jitu.kujur@bitsindri.ac.in",
      phone: "+91-94311-12345",
      specialization: "Structural Engineering",
      linkedin: "https://linkedin.com/in/jitu-kujur"
    },
    {
      name: "Dr. Vikrama Pandey",
      position: "Professor",
      image: vikrama_pandey,
      email: "vikrama.pandey@bitsindri.ac.in",
      phone: "+91-94311-12346",
      specialization: "Geotechnical Engineering",
      linkedin: "https://linkedin.com/in/vikrama-pandey"
    },
    {
      name: "Dr. Sanjay Shukla",
      position: "Adjunct Professor",
      image: sanjay_shukla,
      email: "sanjay.shukla@bitsindri.ac.in",
      phone: "+91-94311-12347",
      specialization: "Transportation Engineering",
      linkedin: "https://linkedin.com/in/sanjay-shukla"
    },
    {
      name: "Dr. U.K. Singh",
      position: "Professor",
      image: uksingh,
      email: "uk.singh@bitsindri.ac.in",
      phone: "+91-94311-12348",
      specialization: "Water Resources Engineering",
      linkedin: "https://linkedin.com/in/uk-singh"
    },
    {
      name: "Dr. Ranvijay Kumar",
      position: "Professor",
      image: ranvijay,
      email: "ranvijay.kumar@bitsindri.ac.in",
      phone: "+91-94311-12349",
      specialization: "Environmental Engineering",
      linkedin: "https://linkedin.com/in/ranvijay-kumar"
    },
    {
      name: "Dr. Maya Ray",
      position: "Associate Professor",
      image: mayaray,
      email: "maya.ray@bitsindri.ac.in",
      phone: "+91-94311-12350",
      specialization: "Construction Management",
      linkedin: "https://linkedin.com/in/maya-ray"
    },
    {
      name: "Dr. B.D. Yadav",
      position: "Assistant Professor",
      image: bdyadav,
      email: "bd.yadav@bitsindri.ac.in",
      phone: "+91-94311-12351",
      specialization: "Structural Analysis",
      linkedin: "https://linkedin.com/in/bd-yadav"
    },
    {
      name: "Dr. Sheo Kumar",
      position: "Assistant Professor",
      image: sheokumar,
      email: "sheo.kumar@bitsindri.ac.in",
      phone: "+91-94311-12352",
      specialization: "Surveying & GIS",
      linkedin: "https://linkedin.com/in/sheo-kumar"
    },
    {
      name: "Dr. Saroj Meena",
      position: "Assistant Professor",
      image: sarojmeena,
      email: "saroj.meena@bitsindri.ac.in",
      phone: "+91-94311-12353",
      specialization: "Hydraulics & Irrigation",
      linkedin: "https://linkedin.com/in/saroj-meena"
    },
    {
      name: "Dr. Sumit Kumar",
      position: "Assistant Professor",
      image: sumitkumar,
      email: "sumit.kumar@bitsindri.ac.in",
      phone: "+91-94311-12354",
      specialization: "Concrete Technology",
      linkedin: "https://linkedin.com/in/sumit-kumar"
    },
    {
      name: "Dr. Prakash Kumar",
      position: "Assistant Professor",
      image: prakash,
      email: "prakash.kumar@bitsindri.ac.in",
      phone: "+91-94311-12355",
      specialization: "Soil Mechanics",
      linkedin: "https://linkedin.com/in/prakash-kumar"
    },
    {
      name: "Dr. P.K. Sharma",
      position: "Assistant Professor",
      image: pksharma,
      email: "pk.sharma@bitsindri.ac.in",
      phone: "+91-94311-12356",
      specialization: "Highway Engineering",
      linkedin: "https://linkedin.com/in/pk-sharma"
    },
    {
      name: "Dr. Nishikant Kumar",
      position: "Assistant Professor",
      image: nishikant,
      email: "nishikant.kumar@bitsindri.ac.in",
      phone: "+91-94311-12357",
      specialization: "Building Materials",
      linkedin: "https://linkedin.com/in/nishikant-kumar"
    },
    {
      name: "Dr. Prashant Malvia",
      position: "Assistant Professor",
      image: prashantmalvia,
      email: "prashant.malvia@bitsindri.ac.in",
      phone: "+91-94311-12358",
      specialization: "Transportation Planning",
      linkedin: "https://linkedin.com/in/prashant-malvia"
    },
    {
      name: "Dr. Nipen Das",
      position: "Assistant Professor",
      image: nipendas,
      email: "nipen.das@bitsindri.ac.in",
      phone: "+91-94311-12359",
      specialization: "Geotechnical Engineering",
      linkedin: "https://linkedin.com/in/nipen-das"
    },
    {
      name: "Dr. Komal Kumari",
      position: "Assistant Professor",
      image: komal,
      email: "komal.kumari@bitsindri.ac.in",
      phone: "+91-94311-12360",
      specialization: "Environmental Science",
      linkedin: "https://linkedin.com/in/komal-kumari"
    },
    {
      name: "Dr. Iqbal Sheikh",
      position: "Assistant Professor",
      image: iqbal_sheikh,
      email: "iqbal.sheikh@bitsindri.ac.in",
      phone: "+91-94311-12361",
      specialization: "Structural Dynamics",
      linkedin: "https://linkedin.com/in/iqbal-sheikh"
    },
    {
      name: "Dr. Abhijeet Anand",
      position: "Assistant Professor",
      image: abhijeet_anand,
      email: "abhijeet.anand@bitsindri.ac.in",
      phone: "+91-94311-12362",
      specialization: "Construction Technology",
      linkedin: "https://linkedin.com/in/abhijeet-anand"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <GraduationCap className="w-4 h-4 mr-2" />
              Civil Engineering Department
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Distinguished Faculty
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Experienced professors and researchers dedicated to shaping the future of civil engineering
            </p>
          </div>
        </Container>
      </div>

      {/* Faculty Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">19</h3>
              <p className="text-slate-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">200+</h3>
              <p className="text-slate-600">Research Papers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">30+</h3>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">12+</h3>
              <p className="text-slate-600">Specializations</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Faculty Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Expert
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Faculty Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet our distinguished professors who bring years of experience and expertise to civil engineering education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {facultyData.map((faculty, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Faculty Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {faculty.position}
                      </div>
                    </div>
                  </div>

                  {/* Faculty Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {faculty.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">{faculty.position}</p>
                    <p className="text-slate-600 text-sm mb-3">{faculty.specialization}</p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{faculty.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{faculty.phone}</span>
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <a 
                      href={faculty.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Department Excellence */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Department
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our faculty's commitment to academic excellence and research innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research</h3>
              <p className="text-gray-300">
                Cutting-edge research in structural, geotechnical, and environmental engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-gray-300">
                Comprehensive curriculum designed for industry-ready civil engineers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Modern laboratories and state-of-the-art facilities for practical learning
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Faculty;
