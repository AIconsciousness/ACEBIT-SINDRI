import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { 
  Users, 
  Award, 
  Star, 
  Heart,
  Target,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";
import Team2k20 from "./Team2k20";
import Team2k21 from "./Team2k21";
import Team2k22 from "./Core2k22";
import Team2k23 from "./Team2k23";
import Coordinators from "./Coordinators";

const Team = () => {
  const [activeTab, setActiveTab] = useState("team2023");

  const teamStats = [
    {
      icon: Users,
      value: "100+",
      label: "Core Members",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      value: "20+",
      label: "Departments",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      value: "100+",
      label: "Events Organized",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      value: "5+",
      label: "Years of Excellence",
      color: "from-orange-500 to-red-500"
    }
  ];

  const teamYears = [
    { id: "team2023", name: "Team 2023-24", icon: Users, color: "from-green-500 to-emerald-500" },
    { id: "team2022", name: "Team 2022-23", icon: Award, color: "from-blue-500 to-cyan-500" },
    { id: "team2021", name: "Team 2021-22", icon: Star, color: "from-purple-500 to-pink-500" },
    { id: "team2020", name: "Team 2020-21", icon: Heart, color: "from-orange-500 to-red-500" },
    { id: "coordinators", name: "Coordinators", icon: Target, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with proper spacing */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated students and professionals working together to build the future of civil engineering
            </p>
          </div>
        </Container>
      </div>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Tabs */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Dynamic
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Structure
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the talented individuals who make ACE BITS a success through their dedication and innovation
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
              <div className="flex flex-wrap justify-center gap-2">
                {teamYears.map((year) => {
                  const Icon = year.icon;
                  return (
                    <button
                      key={year.id}
                      onClick={() => setActiveTab(year.id)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === year.id
                          ? `bg-gradient-to-r ${year.color} text-white shadow-lg transform scale-105`
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{year.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === "team2023" && <Team2k23 />}
            {activeTab === "team2022" && <Team2k22 />}
            {activeTab === "team2021" && <Team2k21 />}
            {activeTab === "team2020" && <Team2k20 />}
            {activeTab === "coordinators" && <Coordinators />}
          </div>
        </Container>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Team?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of something extraordinary. Join ACE BITS and contribute to the future of civil engineering
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center mx-auto">
              <Heart className="w-6 h-6 mr-2" />
              Join Our Team
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Team;
