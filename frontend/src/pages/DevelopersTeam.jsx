import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import bottomImage from "/bottomImage.png"
import PersonProfileCard from "../components/PersonProfileCard";
import Navbar from "../components/Navbar";


const teamLead = [
    {
        name: "Nishant Sekhar",
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
        technologies: "React.js, Tailwind CSS, Node.js",
    },
    
    {
        name:"Manish Kumar",
        role: "Frontend Developer",
        image: "https://media.licdn.com/dms/image/v2/D5603AQExFwrFWBhafA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702654018781?e=1756944000&v=beta&t=C_ZBWisy8caZQWdpNPGSStPCOA8G9d2_YFV34UDfTvA",
        linkedin: "https://www.linkedin.com/in/manish-kumar-b158b4252/",
        technologies: "React.js, Tailwind CSS",
    },
    {
        name:"Pranav Kumar",
        role: "Frontend Developer",
        image: "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
        linkedin: "",
        technologies: "React.js, Tailwind CSS",
    },
    {
        name:"Abhinav Kumar",
        role: "Frontend Developer",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGAsH23Z7DMdw/profile-displayphoto-shrink_800_800/B4DZRoT6LpHkAg-/0/1736916838539?e=1756944000&v=beta&t=b67RXeIbI1mCwMWmwnJQJsFnjVFpzkT7yzJamN_umTk",
        linkedin: "https://www.linkedin.com/in/abhinab-kumar-546753279/",
        technologies: "React.js, Tailwind CSS",
    }
];



const DevelopersTeam = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">

 

  {/* Main Content */}
  <div className="relative z-10 grid grid-cols-1">
    <Navbar />

    {/* Header Section */}
    <div className="text-center mb-8 px-4">
      <p
        className="text-xl md:text-md font-bold text-black pt-32"
        data-aos="zoom-in"
      >
        NS APPS INNOVATIONS
      </p>
      <h2 className="pt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        Developer's Team
      </h2>
      <p className="text-sm text-gray-600 max-w-4xl mx-auto py-4">
        NS Apps Innovations, a recognized startup by the Government of Bihar,
        excels in app development using React.js, Node.js, and Flutter. With
        over 28 impactful projects like ASPIRE and Samadhan Apps, it transforms
        governance through innovative tech solutions.
      </p>
    </div>

    {/* Founder / Team Lead */}
    <div className="flex justify-center items-center px-4 py-10">
      <div className="flex flex-wrap gap-6">
        {teamLead.map((member, index) => (
          <PersonProfileCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            technologies={member.technologies}
            delay={3}
          />
        ))}
      </div>
    </div>

    {/* Team Heads */}
    <div className="flex justify-center items-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-10">
        {teamhead.map((member, index) => (
          <PersonProfileCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            technologies={member.technologies}
            delay={4}
          />
        ))}
      </div>
    </div>

    {/* Team Members */}
  
  </div>
</div>

    );
};

export default DevelopersTeam;
