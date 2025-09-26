import React, { useState } from 'react';
import {
    LayoutDashboard,
    UserCircle,
    ChevronRight,
    Settings,
    LogOut,
} from 'lucide-react';
import classNames from 'classnames';

const AdminLeftBar = ({ changePanel }) => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Staff", icon: UserCircle },
    ];

    const handleMenuClick = (label) => {
        setActiveItem(label);
        changePanel(label);
    };

    return (
        <aside className="w-full h-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-16 left-3 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-32 right-3 w-16 h-16 bg-gray-400 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            {/* Compact Header */}
            <div className="relative z-10 flex items-center gap-3 p-4 border-b border-gray-700/30">
                <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex justify-center items-center shadow-sm">
                        <img src="/buddha.png" alt="Logo" className="w-4 h-4" />
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-base text-white">Buddha Samyak</h1>
                    <p className="text-xs text-gray-400">Admin Panel</p>
                </div>
            </div>

            {/* Compact Navigation Menu */}
            <nav className="flex-1 p-3 space-y-1 relative z-10">
                {menuItems.map(({ label, icon: Icon }) => {
                    const isActive = activeItem === label;
                    const isHovered = hoveredItem === label;

                    return (
                        <button
                            key={label}
                            onClick={() => handleMenuClick(label)}
                            onMouseEnter={() => setHoveredItem(label)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={classNames(
                                'group relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-200 ease-out text-left overflow-hidden',
                                isActive
                                    ? 'bg-white/8 backdrop-blur-sm border border-white/15 shadow-sm'
                                    : 'hover:bg-white/4 hover:backdrop-blur-sm hover:translate-x-0.5'
                            )}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-white to-gray-300 rounded-r-sm"></div>
                            )}

                            {/* Hover background */}
                            {(isActive || isHovered) && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/3 to-gray-300/3 rounded-lg transition-opacity duration-200"></div>
                            )}

                            {/* Compact Icon container */}
                            <div className={classNames(
                                'relative flex items-center justify-center w-7 h-7 rounded-md transition-all duration-200',
                                isActive
                                    ? 'bg-gradient-to-br from-white to-gray-200 shadow-sm text-black'
                                    : 'bg-white/8 text-gray-300 group-hover:bg-white/15 group-hover:text-white group-hover:scale-105'
                            )}>
                                <Icon size={16} className="relative z-10" />
                            </div>

                            {/* Compact Label */}
                            <span className={classNames(
                                'font-medium text-sm transition-all duration-200 relative z-10',
                                isActive
                                    ? 'text-white'
                                    : 'text-gray-300 group-hover:text-white'
                            )}>
                {label}
              </span>

                            {/* Small Arrow indicator */}
                            <ChevronRight
                                size={12}
                                className={classNames(
                                    'ml-auto transition-all duration-200 relative z-10',
                                    isActive
                                        ? 'text-white transform translate-x-0.5 opacity-100'
                                        : 'text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-white'
                                )}
                            />

                            {/* Subtle ripple effect */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 transform scale-0 bg-white/10 rounded-full group-active:scale-100 transition-transform duration-150 origin-center"></div>
                            </div>
                        </button>
                    );
                })}
            </nav>

            {/* Compact Footer Actions */}
            <div className="relative z-10 p-3 border-t border-gray-700/30 space-y-1">
                <button className="group flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/4">
                    <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/8 text-gray-300 group-hover:bg-white/15 group-hover:text-white transition-all duration-200">
                        <Settings size={14} />
                    </div>
                    <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
            Settings
          </span>
                </button>

                <button className="group flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800/30">
                    <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/8 text-gray-300 group-hover:bg-gray-700/40 group-hover:text-gray-200 transition-all duration-200">
                        <LogOut size={14} />
                    </div>
                    <span className="font-medium text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
            Sign Out
          </span>
                </button>
            </div>

            {/* Minimal overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none"></div>
        </aside>
    );
};

export default AdminLeftBar;
