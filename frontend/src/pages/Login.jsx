import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, ArrowRight, MapPin, Clock, Star } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large decorative blob */}
                <div className="absolute -top-40 -right-40 w-96 h-96 opacity-10">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400 animate-pulse">
                        <defs>
                            <radialGradient id="grad1">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
                            </radialGradient>
                        </defs>
                        <path fill="url(#grad1)" d="M44.2,-76.4C58.8,-69.2,73.1,-59.2,81.9,-45.8C90.7,-32.4,93.9,-16.2,92.8,-0.5C91.6,15.2,86,30.4,77.1,43.8C68.2,57.1,55.9,68.6,41.4,75.5C26.9,82.4,10.1,84.7,-6.8,84.1C-23.7,83.5,-40.8,80,-54.2,71.8C-67.6,63.6,-77.3,50.7,-82.7,36.1C-88.1,21.5,-89.2,5.2,-86.8,-9.8C-84.4,-24.8,-78.5,-38.5,-69.3,-49.8C-60.1,-61.1,-47.6,-70,-33.8,-75.4C-20,-80.8,-5,-82.7,8.4,-79.9C21.8,-77.1,29.6,-83.6,44.2,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* Medium blob */}
                <div className="absolute -bottom-32 -left-32 w-80 h-80 opacity-8">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-gray-300 animate-bounce" style={{ animationDuration: '6s' }}>
                        <path fill="currentColor" d="M37.8,-63.1C50.3,-56.8,62.3,-46.7,69.8,-33.8C77.3,-20.9,80.3,-5.2,78.8,9.7C77.3,24.6,71.3,38.7,61.8,50.2C52.3,61.7,39.3,70.6,25.1,75.2C10.9,79.8,-4.5,80.1,-18.7,76.1C-32.9,72.1,-45.9,63.8,-55.4,52.2C-64.9,40.6,-70.9,25.7,-72.4,10.1C-73.9,-5.5,-70.9,-21.8,-63.4,-35.4C-55.9,-49,-43.9,-60,-30.8,-65.8C-17.7,-71.6,-3.5,-71.2,9.8,-69.8C23.1,-68.4,25.3,-69.4,37.8,-63.1Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* Small decorative elements */}
                <div className="absolute top-20 left-20 w-16 h-16 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-gray-500 animate-spin" style={{ animationDuration: '20s' }}>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5"/>
                    </svg>
                </div>
            </div>

            {/* Lotus Pattern SVG */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                    <g fill="currentColor">
                        <path d="M50,20 Q40,30 30,50 Q40,40 50,30 Q60,40 70,50 Q60,30 50,20"/>
                        <path d="M50,30 Q35,40 20,60 Q35,45 50,40 Q65,45 80,60 Q65,40 50,30"/>
                        <path d="M50,40 Q30,50 10,70 Q30,55 50,50 Q70,55 90,70 Q70,50 50,40"/>
                    </g>
                </svg>
            </div>

            <div className="relative z-10


             flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">

                    {/* Left Side - Museum Image & Information */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-l-3xl lg:rounded-r-none rounded-r-3xl overflow-hidden">
                        {/* Museum Image Background */}
                        <div className="absolute inset-0">
                            <img
                                src="https://buddhasamyak.bihar.gov.in/gallery3.jpeg"
                                alt="Buddha Samyak Darshan Museum"
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay for text readability */}
                            <div className="absolute inset-0 bg-black/60"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 text-white">
                            {/* Museum Title */}
                            <div className="mb-8">
                                <h1
                                    className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    बुद्ध सम्यक दर्शन
                                </h1>
                                <h2
                                    className="text-2xl lg:text-3xl font-semibold mb-3 opacity-90"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    संग्रहालय-सह-स्मृति स्तूप
                                </h2>
                                <p
                                    className="text-xl font-medium opacity-85 mb-2"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    Buddha Samyak Darshan Museum
                                </p>
                                <div className="flex items-center gap-2 text-gray-200">
                                    <MapPin size={18} />
                                    <span className="text-lg">Memorial Stupa, Vaishali, Bihar</span>
                                </div>
                            </div>

                            {/* Decorative Line */}
                            <div className="w-20 h-px bg-gray-300 mb-8"></div>

                            {/* Museum Features */}
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <Star size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Sacred Relics</h3>
                                        <p className="text-gray-200 text-sm opacity-90">Ancient Buddha relics and historical artifacts</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Visiting Hours</h3>
                                        <p className="text-gray-200 text-sm opacity-90">9:00 AM - 5:00 PM | Monday Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Museum Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                                    <p className="text-2xl font-bold mb-1">₹550</p>
                                    <p className="text-sm opacity-80">Crore Investment</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                                    <p className="text-2xl font-bold mb-1">72</p>
                                    <p className="text-sm opacity-80">Acres Campus</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Clean Login Form */}
                    <div className="bg-white/95 backdrop-blur-lg rounded-r-3xl lg:rounded-l-none rounded-l-3xl relative flex items-center justify-center p-8 lg:p-12 border border-gray-200 overflow-hidden">

                        {/* Form Background Blobs */}
                        <div className="absolute inset-0 overflow-hidden">
                            {/* Large blob behind form */}
                            <div className="absolute top-20 right-10 w-64 h-64 opacity-5">
                                <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400 animate-pulse" style={{ animationDuration: '8s' }}>
                                    <path fill="currentColor" d="M44.2,-76.4C58.8,-69.2,73.1,-59.2,81.9,-45.8C90.7,-32.4,93.9,-16.2,92.8,-0.5C91.6,15.2,86,30.4,77.1,43.8C68.2,57.1,55.9,68.6,41.4,75.5C26.9,82.4,10.1,84.7,-6.8,84.1C-23.7,83.5,-40.8,80,-54.2,71.8C-67.6,63.6,-77.3,50.7,-82.7,36.1C-88.1,21.5,-89.2,5.2,-86.8,-9.8C-84.4,-24.8,-78.5,-38.5,-69.3,-49.8C-60.1,-61.1,-47.6,-70,-33.8,-75.4C-20,-80.8,-5,-82.7,8.4,-79.9C21.8,-77.1,29.6,-83.6,44.2,-76.4Z" transform="translate(100 100)" />
                                </svg>
                            </div>

                            {/* Medium blob */}
                            <div className="absolute -bottom-20 left-10 w-48 h-48 opacity-4">
                                <svg viewBox="0 0 200 200" className="w-full h-full text-gray-300 animate-bounce" style={{ animationDuration: '10s' }}>
                                    <path fill="currentColor" d="M37.8,-63.1C50.3,-56.8,62.3,-46.7,69.8,-33.8C77.3,-20.9,80.3,-5.2,78.8,9.7C77.3,24.6,71.3,38.7,61.8,50.2C52.3,61.7,39.3,70.6,25.1,75.2C10.9,79.8,-4.5,80.1,-18.7,76.1C-32.9,72.1,-45.9,63.8,-55.4,52.2C-64.9,40.6,-70.9,25.7,-72.4,10.1C-73.9,-5.5,-70.9,-21.8,-63.4,-35.4C-55.9,-49,-43.9,-60,-30.8,-65.8C-17.7,-71.6,-3.5,-71.2,9.8,-69.8C23.1,-68.4,25.3,-69.4,37.8,-63.1Z" transform="translate(100 100)" />
                                </svg>
                            </div>

                            {/* Small circular blob */}
                            <div className="absolute top-1/3 left-20 w-32 h-32 opacity-3">
                                <svg viewBox="0 0 200 200" className="w-full h-full text-gray-500 animate-spin" style={{ animationDuration: '15s' }}>
                                    <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.3"/>
                                </svg>
                            </div>

                            {/* Additional decorative elements */}
                            <div className="absolute bottom-1/3 right-20 w-20 h-20 opacity-3">
                                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                                    <g fill="currentColor">
                                        <path d="M50,20 Q40,30 30,50 Q40,40 50,30 Q60,40 70,50 Q60,30 50,20"/>
                                        <path d="M50,30 Q35,40 20,60 Q35,45 50,40 Q65,45 80,60 Q65,40 50,30"/>
                                        <path d="M50,40 Q30,50 10,70 Q30,55 50,50 Q70,55 90,70 Q70,50 50,40"/>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="w-full max-w-md relative z-10">
                            {/* Form Header */}
                            <div className="text-center mb-10">
                                {/* Buddha Logo */}
                                <div className="flex justify-center mb-6">
                                    <img
                                        src="https://buddhasamyak.bihar.gov.in/buddha3.png"
                                        alt="Buddha Logo"
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>

                                <h3
                                    className="text-2xl font-bold text-gray-800 mb-2"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    Admin Portal
                                </h3>
                                <p className="text-gray-600 text-sm">Secure access to museum management system</p>
                            </div>

                            {/* Login Form */}
                            <form className="space-y-5">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                            placeholder="admin@buddhasamyak.com"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                            placeholder="Enter secure password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>



                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-gray-800 to-black text-white font-semibold py-3 px-6 rounded-lg hover:from-gray-900 hover:to-gray-800 transform hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 group"
                                >
                                    <span>Login</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Security Notice */}
                                <div className="mt-6 p-3 bg-gray-50 border border-gray-300 rounded-lg">
                                    <p className="text-xs text-gray-800 text-center font-medium">
                                        🔒 Authorized Personnel Only
                                    </p>
                                    <p className="text-xs text-gray-700 text-center mt-1">
                                        All access attempts are monitored and logged
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-6 right-6 w-16 h-16 bg-gray-100 rounded-full opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gray-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
