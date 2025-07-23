// render1.jsx
import React from 'react';
import Dashboard from './Dashboard.jsx';

// import SecondTrancheModule from '../Admin_Profile_Abhishek/Second_Tranche_module/NewSecondTrancheModule';


const Render1 = ({ activePanel }) => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <h1 className='text-red-500'>{activePanel}</h1>  */}
      <div className="w-full h-full">
        {activePanel === "Dashboard" && <Dashboard />}
        {/* {activePanel === "Second Tranche Module" && <Table  />} */}

        </div>

    </div>
  );
};

export default Render1;
