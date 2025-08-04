import React from "react";
import { Container } from "react-bootstrap";
import { 
  Users, 
  Award, 
  Star, 
  Linkedin,
  Mail,
  Phone,
  Heart,
  Target,
  TrendingUp,
  GraduationCap
} from "lucide-react";

const Team2k23 = () => {
  const teamData = [
    {
      name: "Rahul Kumar",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rahul-kumar",
      email: "rahul.kumar@bitsindri.ac.in",
      phone: "+91-94311-12371"
    },
    {
      name: "Priya Sharma",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/priya-sharma",
      email: "priya.sharma@bitsindri.ac.in",
      phone: "+91-94311-12372"
    },
    {
      name: "Amit Singh",
      position: "General Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/amit-singh",
      email: "amit.singh@bitsindri.ac.in",
      phone: "+91-94311-12373"
    },
    {
      name: "Neha Patel",
      position: "Joint Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/neha-patel",
      email: "neha.patel@bitsindri.ac.in",
      phone: "+91-94311-12374"
    },
    {
      name: "Vikram Verma",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vikram-verma",
      email: "vikram.verma@bitsindri.ac.in",
      phone: "+91-94311-12375"
    },
    {
      name: "Anjali Gupta",
      position: "Technical Head",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/anjali-gupta",
      email: "anjali.gupta@bitsindri.ac.in",
      phone: "+91-94311-12376"
    },
    {
      name: "Rohit Das",
      position: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rohit-das",
      email: "rohit.das@bitsindri.ac.in",
      phone: "+91-94311-12377"
    },
    {
      name: "Sneha Reddy",
      position: "Public Relations",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sneha-reddy",
      email: "sneha.reddy@bitsindri.ac.in",
      phone: "+91-94311-12378"
    },
    {
      name: "Arjun Mehta",
      position: "Cultural Secretary",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/arjun-mehta",
      email: "arjun.mehta@bitsindri.ac.in",
      phone: "+91-94311-12379"
    },
    {
      name: "Zara Khan",
      position: "Academic Coordinator",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/zara-khan",
      email: "zara.khan@bitsindri.ac.in",
      phone: "+91-94311-12380"
    },
    {
      name: "Karan Malhotra",
      position: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/karan-malhotra",
      email: "karan.malhotra@bitsindri.ac.in",
      phone: "+91-94311-12381"
    },
    {
      name: "Ishita Joshi",
      position: "Content Writer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/ishita-joshi",
      email: "ishita.joshi@bitsindri.ac.in",
      phone: "+91-94311-12382"
    },
    {
      name: "Aditya Kumar",
      position: "Research Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/aditya-kumar",
      email: "aditya.kumar@bitsindri.ac.in",
      phone: "+91-94311-12383"
    },
    {
      name: "Pooja Singh",
      position: "Innovation Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/pooja-singh",
      email: "pooja.singh@bitsindri.ac.in",
      phone: "+91-94311-12384"
    },
    {
      name: "Rajesh Kumar",
      position: "Project Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rajesh-kumar",
      email: "rajesh.kumar@bitsindri.ac.in",
      phone: "+91-94311-12385"
    },
    {
      name: "Meera Patel",
      position: "Women Cell Head",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/meera-patel",
      email: "meera.patel@bitsindri.ac.in",
      phone: "+91-94311-12386"
    },
    {
      name: "Saurabh Verma",
      position: "Industry Connect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/saurabh-verma",
      email: "saurabh.verma@bitsindri.ac.in",
      phone: "+91-94311-12387"
    },
    {
      name: "Kavya Sharma",
      position: "Alumni Coordinator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/kavya-sharma",
      email: "kavya.sharma@bitsindri.ac.in",
      phone: "+91-94311-12388"
    },
    {
      name: "Vivek Singh",
      position: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vivek-singh",
      email: "vivek.singh@bitsindri.ac.in",
      phone: "+91-94311-12389"
    },
    {
      name: "Tanvi Gupta",
      position: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/tanvi-gupta",
      email: "tanvi.gupta@bitsindri.ac.in",
      phone: "+91-94311-12390"
    },
    {
      name: "Rahul Das",
      position: "Student Welfare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rahul-das",
      email: "rahul.das@bitsindri.ac.in",
      phone: "+91-94311-12391"
    },
    {
      name: "Ananya Reddy",
      position: "Infrastructure Head",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/ananya-reddy",
      email: "ananya.reddy@bitsindri.ac.in",
      phone: "+91-94311-12392"
    },
    {
      name: "Pranav Kumar",
      position: "Sports Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/pranav-kumar",
      email: "pranav.kumar@bitsindri.ac.in",
      phone: "+91-94311-12393"
    },
    {
      name: "Shreya Joshi",
      position: "Discipline Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/shreya-joshi",
      email: "shreya.joshi@bitsindri.ac.in",
      phone: "+91-94311-12394"
    },
    {
      name: "Aryan Singh",
      position: "Technical Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/aryan-singh",
      email: "aryan.singh@bitsindri.ac.in",
      phone: "+91-94311-12395"
    },
    {
      name: "Diya Patel",
      position: "Workshop Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/diya-patel",
      email: "diya.patel@bitsindri.ac.in",
      phone: "+91-94311-12396"
    },
    {
      name: "Kartik Verma",
      position: "Seminar Coordinator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/kartik-verma",
      email: "kartik.verma@bitsindri.ac.in",
      phone: "+91-94311-12397"
    },
    {
      name: "Riya Sharma",
      position: "Competition Head",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/riya-sharma",
      email: "riya.sharma@bitsindri.ac.in",
      phone: "+91-94311-12398"
    },
    {
      name: "Vedant Kumar",
      position: "Exhibition Coordinator",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vedant-kumar",
      email: "vedant.kumar@bitsindri.ac.in",
      phone: "+91-94311-12399"
    },
    {
      name: "Aisha Khan",
      position: "Community Service",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/aisha-khan",
      email: "aisha.khan@bitsindri.ac.in",
      phone: "+91-94311-12400"
    },
    {
      name: "Dhruv Singh",
      position: "Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/dhruv-singh",
      email: "dhruv.singh@bitsindri.ac.in",
      phone: "+91-94311-12401"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Core Team 2023-2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                New Leadership
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Fresh perspectives and innovative ideas driving ACE BITS towards new heights of excellence
            </p>
          </div>
        </Container>
      </div>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">30</h3>
              <p className="text-slate-600">Core Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">15+</h3>
              <p className="text-slate-600">Departments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">25+</h3>
              <p className="text-slate-600">Events Planned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">1+</h3>
              <p className="text-slate-600">Year of Innovation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Fresh
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the new generation of leaders who will take ACE BITS to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Member Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-green-100 group-hover:ring-green-300 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        New Team
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-3">{member.position}</p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center text-slate-500 text-sm">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 group-hover:scale-105"
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

      {/* Team Vision */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision for
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                2024
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building on the legacy while creating new opportunities for growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Introducing new technologies and modern approaches to civil engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300">
                Expanding our reach and creating more opportunities for students
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                Maintaining the highest standards of academic and professional excellence
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team2k23; 