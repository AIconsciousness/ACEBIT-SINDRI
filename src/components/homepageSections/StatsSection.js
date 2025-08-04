import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Users, Award, Building, TrendingUp, Star } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    members: 0,
    events: 0,
    years: 0,
    awards: 0
  });

  const stats = [
    { 
      icon: Users, 
      value: 400, 
      label: "Active Members", 
      color: "from-blue-500 to-cyan-500",
      key: "members"
    },
    { 
      icon: Award, 
      value: 50, 
      label: "Events Organized", 
      color: "from-green-500 to-emerald-500",
      key: "events"
    },
    { 
      icon: Building, 
      value: 5, 
      label: "Years of Excellence", 
      color: "from-purple-500 to-pink-500",
      key: "years"
    },
    { 
      icon: TrendingUp, 
      value: 25, 
      label: "Awards Won", 
      color: "from-orange-500 to-red-500",
      key: "awards"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting animation
          stats.forEach((stat) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              
              setCounts(prev => ({
                ...prev,
                [stat.key]: Math.floor(current)
              }));
            }, duration / steps);
          });
        }
      });
    });

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <Container className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-lg font-bold mb-6 text-white animate-slide-up shadow-lg">
            <Star className="w-5 h-5 mr-2 animate-pulse" />
            Our Achievements
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            ACE BITS
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
        </div>

        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col key={index} lg={3} md={6}>
              <div 
                className="group relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {counts[stat.key]}+
                  </div>
                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Compact Info Card */}
        <div className="mt-8 animate-slide-up" style={{animationDelay: '0.7s'}}>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Leading Student Organization</h3>
                  <p className="text-emerald-100 text-sm">In Civil Engineering at BIT Sindri</p>
                </div>
              </div>
              
              <p className="text-emerald-100 text-sm max-w-2xl mx-auto">
                Since our establishment, we have been at the forefront of civil engineering education, 
                fostering innovation, collaboration, and excellence among students.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default StatsSection; 