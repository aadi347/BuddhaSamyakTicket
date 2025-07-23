import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building,
  FileText,
  DollarSign,
  LogOut,
} from 'lucide-react';
import classNames from 'classnames';

const AdminLeftbar = ({ changePanel }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Startup Profile', icon: Building },
    { label: 'Startup List', icon: FileText },
    { label: 'Seed Fund Module', icon: DollarSign },
  ];

  const handleMenuClick = (label) => {
    setActiveItem(label);
    changePanel(label);
  };

  return (
    <aside className="w-full md:w-72 h-screen bg-white flex flex-col border-r border-gray-300 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-300 p-4">
        <div className="bg-white border drop-shadow-md p-1 rounded-xl w-12 h-12 flex items-center justify-center">
          <img src="/buddha.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-gray-800">Buddha Samyak</h1>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-6">
        <div>
          <h2 className="text-xs uppercase text-gray-400 font-semibold mb-3 pl-2 tracking-wide">
            Dashboard
          </h2>
          <div className="space-y-2">
            {menuItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => handleMenuClick(label)}
                className={classNames(
                  'flex items-center w-full text-left gap-4 px-5 py-3 rounded-xl transition-all duration-200 text-sm font-medium',
                  activeItem === label
                    ? 'bg-black text-white shadow-md'
                    : 'text-black hover:bg-gray-100'
                )}
              >
                <Icon
                  size={20}
                  className={classNames(
                    'transition-transform duration-300',
                    activeItem === label ? ' transform transition ease-in-out scale-110 ' : 'scale-100'
                  )}
                />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Logout Button */}
  
    </aside>
  );
};

export default AdminLeftbar;
