import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Users, Globe, Mail, Phone, MapPin, ChevronDown, ChevronUp, Heart, Flower } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Eye className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We collect information you provide directly to us, such as when you visit our museum, 
            sign up for newsletters, make donations, or contact us for educational programs.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
            <h4 className="font-semibold text-black mb-2">Personal Information</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Name and contact information</li>
              <li>• Email address for newsletters</li>
              <li>• Phone number for program registration</li>
              <li>• Educational background for specialized tours</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your information helps us provide better educational experiences and maintain 
            communication about our Buddhist heritage programs and exhibitions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Educational Purposes</h4>
              <p className="text-gray-700 text-sm">Customizing tours and programs to enhance your learning experience about Buddhist culture and philosophy.</p>
            </div>
            <div className="bg-black text-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Communication</h4>
              <p className="text-gray-200 text-sm">Sending updates about new exhibitions, meditation sessions, and cultural events.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Security',
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-white mr-2" />
              <h4 className="font-semibold">Security Measures</h4>
            </div>
            <p className="text-gray-200 text-sm">
              SSL encryption, secure servers, limited access protocols, and regular security audits 
              ensure your data remains protected in accordance with the principles of right conduct.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sharing-disclosure',
      title: 'Information Sharing',
      icon: <Globe className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share information only in specific circumstances outlined below.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-600">
              <p className="text-gray-800 text-sm"><strong>Educational Partners:</strong> With museums and cultural institutions for collaborative programs</p>
            </div>
            <div className="bg-black text-white p-3 rounded border-l-4 border-gray-400">
              <p className="text-gray-200 text-sm"><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: <Eye className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience 
            and understand how visitors interact with our educational content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-black mb-2">Cookie Types</h4>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Essential Cookies</span>
                <span className="bg-black text-white px-2 py-1 rounded text-xs">Required</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Analytics Cookies</span>
                <span className="bg-gray-300 text-black px-2 py-1 rounded text-xs">Optional</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'Your Rights & Choices',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information at any time. 
            We respect your autonomy and provide easy ways to manage your data preferences.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <Eye className="w-8 h-8 text-black mx-auto mb-2" />
              <h5 className="font-semibold text-black">Access</h5>
              <p className="text-gray-700 text-sm">View your data</p>
            </div>
            <div className="text-center p-4 bg-black text-white rounded-lg">
              <Users className="w-8 h-8 text-white mx-auto mb-2" />
              <h5 className="font-semibold">Update</h5>
              <p className="text-gray-200 text-sm">Modify information</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <Lock className="w-8 h-8 text-black mx-auto mb-2" />
              <h5 className="font-semibold text-black">Delete</h5>
              <p className="text-gray-700 text-sm">Remove your data</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="relative w-full px-4 py-20">
          <div className="text-center text-white max-w-7xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm">
                <img 
                className="w-20 h-20 text-white" src="/buddha3.png" alt="Museum Logo" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protecting your privacy with the same reverence we show to Buddhist teachings
            </p>
            <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Last updated: September 2, 2025</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-3 rounded-full blur-lg"></div>
      </div>

      {/* Introduction */}
      <div className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-16 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-black p-4 rounded-full mr-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Our Commitment to You</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Buddha Samyak Darshan Museum, we honor the Buddhist principles of right intention and right conduct 
              in all aspects of our work, including how we handle your personal information. This privacy policy 
              explains how we collect, use, and protect your data when you visit our museum or use our services.
            </p>
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-black">
              <p className="text-black text-center font-medium text-lg">
                "Just as a mother would protect her only child with her life, 
                even so let one cultivate a boundless love towards all beings."
              </p>
              <p className="text-gray-600 text-center mt-3">- Buddha's teaching on compassion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 pb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-black p-4 rounded-xl text-white">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black">{section.title}</h3>
                </div>
                <div className="text-gray-500">
                  {expandedSections[section.id] ? 
                    <ChevronUp className="w-8 h-8" /> : 
                    <ChevronDown className="w-8 h-8" />
                  }
                </div>
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-8 pb-8 pt-0">
                  <div className="border-t border-gray-200 pt-8">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        {/* <div className="max-w-7xl mx-auto mt-16 bg-black rounded-2xl shadow-2xl text-white p-8 md:p-16">
          <div className="text-center mb-12">
            <div className="bg-white p-6 rounded-full inline-block mb-6">
              <Mail className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Privacy Team</h3>
            <p className="text-gray-300 text-xl">
              Have questions about your privacy? We're here to help with mindful attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-3 text-lg">Email</h4>
              <p className="text-gray-300">privacy@buddhasamyak.com</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <Phone className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-3 text-lg">Phone</h4>
              <p className="text-gray-300">+91 (XXX) XXX-XXXX</p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-3 text-lg">Address</h4>
              <p className="text-gray-300">Museum Location, Address</p>
            </div>
          </div>
        </div> */}

        {/* Data Retention */}
        <div className="max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="flex items-center mb-8">
            <div className="bg-black p-4 rounded-full mr-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-black">Data Retention & International Transfers</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-semibold text-black mb-4 text-xl">Retention Period</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                We retain your personal information only as long as necessary to fulfill the purposes 
                outlined in this privacy policy, comply with legal obligations, and maintain our 
                educational records.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4 text-xl">International Visitors</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                For international visitors, we ensure all data transfers comply with applicable 
                privacy laws and are conducted with appropriate safeguards to protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="max-w-7xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-black p-4 rounded-full mr-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-black">Children's Privacy</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            We take special care to protect the privacy of children under 13. We do not knowingly 
            collect personal information from children without parental consent. If you believe 
            we have collected information from a child, please contact us immediately.
          </p>
        </div>

        {/* Policy Updates */}
        <div className="max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-6">Policy Updates</h3>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            We may update this privacy policy periodically to reflect changes in our practices 
            or applicable laws. We will notify you of any material changes through our website 
            or direct communication.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
            <p className="text-black font-medium text-lg">
              Current Version: 2.0 | Effective Date: September 2, 2025
            </p>
          </div>
        </div>

        {/* Footer */}
        
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-2 border-gray-800"
        >
          <ChevronUp className="w-8 h-8" />
        </button>
      </div>


    </div>
  );
};

export default PrivacyPolicy;