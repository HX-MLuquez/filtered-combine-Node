import React from 'react';
import Filters from './Filters';
import './SideBar.css'

function SideBar({handleApplyFilters, handleResetFilters}) {
  

  return (
    <div className="SideBar">
      <Filters onApplyFilters={handleApplyFilters} handleResetFilters={handleResetFilters} />
    </div>
  );
}

export default SideBar;