import React from 'react';
import OutNavBar from '../common/Header/OutNavBar';

const HomepageLayout = ({ children }) => {
  return (
    <div>
      <OutNavBar />
      {children}
    </div>
  );
};

export default HomepageLayout;
