import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUnitDetailsAsync, selectUnit } from '../../../redux/slices/unitSlice';

function UnitDetails() {
  const { unitDetails, loading, error } = useSelector(selectUnit);
  const dispatch = useDispatch();
  const { unitId } = useParams(); // Get the unit ID from the URL

  useEffect(() => {
    dispatch(fetchUnitDetailsAsync(unitId));
  }, [dispatch, unitId]);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      {unitDetails ? (
        <div>
      <h2>Unit Details</h2>
      <p>Unit Name: {unitDetails.unitName}</p>
      <p>Type: {unitDetails.type}</p>
      <p>Make/Model: {unitDetails.make}</p>
      <p>Status: {unitDetails.status}</p>
      <p>License Plate Number: {unitDetails.licensePlateNumber}</p>
      <p>Inspection Expiration: {unitDetails.inspectionStickerExpiration}</p>
      <p>Insurance Expiration: {unitDetails.insuranceExpiration}</p>
      {/* Display other unit details */}
      <button>Edit</button>
      <button>View</button>
      <button>List Units</button>
      </div>
      ) : null}
    </div>
  );
}

export default UnitDetails;
