import React, { useEffect, useState } from "react";
import { Linkedin, ExternalLink, Code, Users, Award, Star, ChevronDown, Flower, Heart, Eye } from "lucide-react";

const PersonProfileCard = ({ name, role, image, linkedin, technologies, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 overflow-hidden ${delay ? `animate-fade-in-up` : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      {/* Card Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-6">
        {/* Profile Image */}
        <div className="relative mb-4 mx-auto w-24 h-24 md:w-28 md:h-28">
          <div className="absolute inset-0 bg-black rounded-full opacity-10 blur-lg transform scale-110"></div>
          <img
            src={image}
            alt={name}
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-black ring-opacity-0 group-hover:ring-opacity-20 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-bold text-black mb-1 group-hover:text-gray-800 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-3 font-medium">
            {role}
          </p>
          
          {/* Technologies */}
          <div className="mb-4">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-600 font-semibold mb-1">TECHNOLOGIES</p>
              <p className="text-sm text-black font-medium">{technologies}</p>
            </div>
          </div>

          {/* LinkedIn Button */}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium group-hover:shadow-lg"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};



const DevelopersTeam = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations
    setTimeout(() => setIsVisible(true), 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamLead = [
    {
      name: "Nishant Shekhar",
      role: "Founder, NS Apps Innovations",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFUD3EMJW-SMQ/profile-displayphoto-shrink_800_800/B4DZR_Z.U3HkAg-/0/1737304303571?e=1756944000&v=beta&t=bFiTipJE7Rq-2OMORmJH9IAqylsUMKxXHT0PZiPWZb0",
      show: true,
      linkedin: "https://www.linkedin.com/in/nishantshekhar28/",
      technologies: "React, Node.js, Prisma, AWS",
    },
  ];

  const teamhead = [
    {
      name: "Aditya Kumar",
      role: "React Developer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEk-OM0mDJnkQ/profile-displayphoto-shrink_800_800/B56ZZojkV5GQAg-/0/1745510877242?e=1756944000&v=beta&t=4ZABLuHS9BhvbqxDV24SkvoF582YsTDpaHZBbjipRVk",
      linkedin: "https://www.linkedin.com/in/aditya-kumar-780709320/",
      technologies: "React.js, Tailwind CSS",
    },
    {
      name: "Abhishek Anand",
      role: "React Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHgdEA3WVAhNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692214950711?e=1756944000&v=beta&t=cA1mD5SfL621lRJfiQfERfctlZ5Oe-vlEd4kboUpsfc",
      linkedin: "https://www.linkedin.com/in/abhishek-anand-094799251/",
      technologies: "React.js, Tailwind CSS",
    },
    {
      name: "Manish Kumar",
      role: "Frontend Developer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQExFwrFWBhafA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702654018781?e=1756944000&v=beta&t=C_ZBWisy8caZQWdpNPGSStPCOA8G9d2_YFV34UDfTvA",
      linkedin: "https://www.linkedin.com/in/manish-kumar-b158b4252/",
      technologies: "React.js, Tailwind CSS",
    },
    {
      name: "Pranav Kumar",
      role: "Frontend Developer",
      image: "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
      linkedin: "https://www.linkedin.com/in/pranav-kumar-27723a295/",
      technologies: "React.js, Tailwind CSS",
    },
    {
      name: "Abhinav Kumar",
      role: "Artificial Intelligence",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGAsH23Z7DMdw/profile-displayphoto-shrink_800_800/B4DZRoT6LpHkAg-/0/1736916838539?e=1756944000&v=beta&t=b67RXeIbI1mCwMWmwnJQJsFnjVFpzkT7yzJamN_umTk",
      linkedin: "https://www.linkedin.com/in/abhinab-kumar-546753279/",
      technologies: "Python, LLMs",
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
   

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Buddhist Symbol */}
          {/* Title Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl font-bold text-black mb-2 tracking-wider">
              NS APPS INNOVATIONS
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
              Developer's <span className="relative">
                Team
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h1>
            
            {/* Company Description */}
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                NS Apps Innovations, a recognized startup by the Government of Bihar, 
                excels in app development using React.js, Node.js, and Flutter. With 
                over 28 impactful projects like ASPIRE and Samadhan Apps, it transforms 
                governance through innovative tech solutions.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-black text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold mb-2">28+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-3xl font-bold text-black mb-2">6</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="bg-black text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-gray-300">Dedication</div>
                </div>
              </div>
            </div>

            {/* Buddhist Quote */}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="bg-black p-3 rounded-full mr-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Leadership</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guided by wisdom and innovation, our founder leads with the Buddhist principle of right livelihood
            </p>
          </div>

          {/* Founder Card - Enhanced */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md border border-gray-200 transform hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-black rounded-full opacity-10 blur-xl transform scale-125"></div>
                  <img
                    src={teamLead[0].image}
                    alt={teamLead[0].name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-200 shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-black text-white p-2 rounded-full">
                    <Star className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-2">{teamLead[0].name}</h3>
                <p className="text-gray-600 mb-4 text-lg">{teamLead[0].role}</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">CORE TECHNOLOGIES</p>
                  <p className="text-black font-medium">{teamLead[0].technologies}</p>
                </div>

                <a
                  href={teamLead[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div id="team" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="bg-black p-3 rounded-full mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Development Team</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our skilled developers work in harmony, embodying the Buddhist values of collaboration, 
              mindfulness, and dedication to creating meaningful digital experiences
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamhead.map((member, index) => (
              <PersonProfileCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                technologies={member.technologies}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      {/* <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-200">
            <div className="text-center mb-12">
              <div className="bg-black p-4 rounded-full inline-block mb-6">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Development Philosophy</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200">
                <Eye className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Mindful Coding</h3>
                <p className="text-gray-700">Writing clean, purposeful code with attention to detail and user experience</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-black text-white">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Collaborative Spirit</h3>
                <p className="text-gray-200">Working together harmoniously to achieve common goals and shared success</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200">
                <Flower className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Continuous Growth</h3>
                <p className="text-gray-700">Embracing learning and improvement in every project and interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Recognition Section */}
      {/* <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <div className="bg-white p-4 rounded-full inline-block mb-6">
              <Award className="w-12 h-12 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recognition & Achievements</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our dedication to excellence has been recognized by the Government of Bihar 
              and reflected in our impactful projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">Government Recognition</h3>
              <p className="text-gray-300 leading-relaxed">
                Officially recognized startup by the Government of Bihar, 
                validating our commitment to technological innovation and social impact.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">Impactful Projects</h3>
              <p className="text-gray-300 leading-relaxed">
                Successfully delivered ASPIRE and Samadhan Apps, 
                transforming governance through user-centric design and robust technology.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      {/* <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-200 shadow-xl">
            <Flower className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Interested in working with us? We're always looking for passionate developers 
              who share our values of mindful development and meaningful impact.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div> */}

      {/* Floating Scroll Indicator */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-2 border-gray-800"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default DevelopersTeam;