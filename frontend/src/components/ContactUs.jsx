import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Check,
  AlertCircle
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 98765 43210",
      subtitle: "Mon-Sat 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Address", 
      value: "info@buddhamuseum.in",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Buddha Samyak Darshan Museum",
      subtitle: "Vaishali, Basarh, Bihar 844128"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      value: "9:00 AM - 5:00 PM",
      subtitle: "Closed on Sundays"
    }
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 border border-gray-800 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 border border-gray-800 rounded-full opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-8 tracking-wider">
            GET IN
            <span className="block font-bold">TOUCH</span>
          </h1>
          <div className="h-1 bg-white mx-auto mb-8 w-32"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about your visit or need assistance? We're here to help you plan your spiritual journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white text-lg mb-1">{item.value}</p>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-white rounded-3xl p-8 mt-12">
              <h3 className="text-black font-bold text-xl mb-4">Quick Response Promise</h3>
              <p className="text-gray-700 leading-relaxed">
                We value your time and strive to respond to all inquiries within 24 hours. 
                For urgent matters, please call us directly during business hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name <span className="text-gray-300">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address <span className="text-gray-300">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject <span className="text-gray-300">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Message <span className="text-gray-300">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full px-8 py-4 border border-gray-700">
            <AlertCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Need immediate assistance? Call us at +91 98765 43210
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
