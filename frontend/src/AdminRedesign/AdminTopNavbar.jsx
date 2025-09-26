import React, { useState } from "react";
import { LogOut, User, Calendar } from 'lucide-react';

const AdminTopNavbar = () => {
    const today = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const handleLogout = () => {
        console.log("User logged out");
    };

    return (
        <div className="h-14 flex items-center justify-between px-5 text-white w-full bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-700/30 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-2 left-10 w-16 h-16 bg-white rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-2 right-20 w-12 h-12 bg-gray-400 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>

            {/* Welcome Section */}
            <div className="relative z-10">
                <h2 className="text-lg font-semibold text-white tracking-tight">Welcome, Admin</h2>
            </div>

            <div className="flex items-center space-x-4 relative z-10">
                {/* Date Display */}
                <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                    <Calendar size={14} className="text-gray-300" />
                    <span className="text-sm text-gray-200 font-medium">{today}</span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 py-1.5 px-3 rounded-lg transition-all duration-200 hover:bg-white/10 group">
                    <div className="relative">
                        <img
                            src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                            alt="user"
                            className="w-8 h-8 rounded-md shadow-sm border border-white/20"
                        />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-white to-gray-300 rounded-md blur opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-200">Mukesh Kumar</span>
                        <p className="text-xs text-gray-400 -mt-0.5">Administrator</p>
                    </div>
                </div>


            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>
        </div>
    );
};

export default AdminTopNavbar;
