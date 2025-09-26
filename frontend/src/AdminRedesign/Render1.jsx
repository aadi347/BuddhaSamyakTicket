import React from 'react';
import Dashboard from './Dashboard';
import TicketController from './TicketController';
import Staff from './Staff';
import Employees from './Employees';

const Render1 = ({ activePanel }) => {
  const renderContent = () => {
    switch (activePanel) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Home':
        return <TicketController />;
      default:
        return <div className="p-6 text-black">No content available</div>;
    }
  };

  return (
    <div className="min-h-full w-full bg-white text-black">
      {renderContent()}
    </div>
  );
};

export default Render1;
