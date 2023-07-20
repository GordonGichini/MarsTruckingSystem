import React from 'react';
import InNavBar from '../common/Header/InNavBar';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <InNavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
