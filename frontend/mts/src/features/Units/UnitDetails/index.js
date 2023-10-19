import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UnitDetails() {
  const { unitId } = useParams(); // Get the unit ID from the URL
  const units = useSelector((state) => state.units.units);

  // Find the matching unit based on the unitId
  const matchingUnit = units.find((unit) => unit.id === unitId);

  return (
    <div>
      <h2>Unit Details</h2>
      <p>Unit Name: {matchingUnit.unitName}</p>
      {/* Display other unit details */}
    </div>
  );
}

export default UnitDetails;
