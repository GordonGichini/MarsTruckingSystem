import React from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import { Link }from 'react-router-dom';


export default function DetailedList() {
  // Sample data for the table
  const data = [
    {
      id: 1,
      customer: 'ABC Company',
      loadNumber: 'L123',
      driver: 'John Doe',
      truck: 'Truck 1',
      deliveryDate: '2023-07-10',
      weight: '5000 lbs',
      createdOn: '2023-07-08',
      updatedOn: '2023-07-09',
      primaryFee: '$500',
      fuelSurchargeFee: '$50',
      fuelSurchargePercentage: '10%',
      accessoryFees: '$100',
      totalCharge: '$650',
      revenuePerMile: '$2.5',
      paidBaseToDriver: '$300',
      accessoryDriverPay: '$50',
      totalPaid: '$350',
      paid: true,
    },
    // Add more data rows as needed
  ];

  return (
    <div>
      <div>
        <Button variant="outlined" 
        color="primary"
        component={Link}
        to="/">
          Add Dispatch
        </Button>
        <Button variant="outlined" 
        color="primary"
        component={Link}
        to="/">
          Add Empty Move
        </Button>
        <Button variant="outlined" 
        color="primary"
        component={Link}
        to="/">
          Driver Locations
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Load#</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Truck</TableCell>
            <TableCell>Delivery on</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Created on</TableCell>
            <TableCell>Updated on</TableCell>
            <TableCell>Primary Fee</TableCell>
            <TableCell>Fuel Surcharge Fee</TableCell>
            <TableCell>Fuel Surcharge %</TableCell>
            <TableCell>Accessory Fees</TableCell>
            <TableCell>Total Charge</TableCell>
            <TableCell>Revenue per Mile</TableCell>
            <TableCell>Paid Base to Driver</TableCell>
            <TableCell>Accessory Driver Pay</TableCell>
            <TableCell>Total Paid</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.loadNumber}</TableCell>
              <TableCell>{row.driver}</TableCell>
              <TableCell>{row.truck}</TableCell>
              <TableCell>{row.deliveryDate}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.createdOn}</TableCell>
              <TableCell>{row.updatedOn}</TableCell>
              <TableCell>{row.primaryFee}</TableCell>
              <TableCell>{row.fuelSurchargeFee}</TableCell>
              <TableCell>{row.fuelSurchargePercentage}</TableCell>
              <TableCell>{row.accessoryFees}</TableCell>
              <TableCell>{row.totalCharge}</TableCell>
              <TableCell>{row.revenuePerMile}</TableCell>
              <TableCell>{row.paidBaseToDriver}</TableCell>
              <TableCell>{row.accessoryDriverPay}</TableCell>
              <TableCell>{row.totalPaid}</TableCell>
              <TableCell>{row.paid ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))};
        </TableBody>
      </Table>
    </div>
  );
};
