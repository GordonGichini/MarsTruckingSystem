import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, BarChart, Bar, XAxis, YAxis } from '@material-ui/core';
import axios from 'axios';

export default function ProfitAndLossReports() {
  const [companyData, setCompanyData] = useState({});
  const [incomeData, setIncomeData] = useState([]);
  const [expensesData, setExpensesData] = useState([]);

  useEffect(() => {
    fetchCompanyData();
    fetchIncomeData();
    fetchExpensesData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const response = await axios.get('/api/company');
      setCompanyData(response.data);
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };

  const fetchIncomeData = async () => {
    try {
      const response = await axios.get('/api/income');
      setIncomeData(response.data);
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  };

  const fetchExpensesData = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpensesData(response.data);
    } catch (error) {
      console.error('Error fetching expenses data:', error);
    }
  };

  const calculateTotal = (data) => {
    return data.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <div>
      <Typography variant="h6">Profit and Loss Reports</Typography>

      <Typography variant="subtitle1">Company Information</Typography>
      <Typography variant="subtitle2">Name: {companyData.name}</Typography>
      <Typography variant="subtitle2">Address: {companyData.address}</Typography>
      <Typography variant="subtitle2">Phone Number: {companyData.phone}</Typography>

      <Typography variant="subtitle1">Profit and Loss Statement</Typography>
      <Typography variant="subtitle2">Date: {new Date().toLocaleDateString()}</Typography>

      <Typography variant="subtitle1">Income</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomeData.map((income) => (
            <TableRow key={income.id}>
              <TableCell>{income.description}</TableCell>
              <TableCell>{income.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="subtitle1">Expenses</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesData.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="subtitle1">Profit or Loss</Typography>
      <Typography variant="subtitle2">Total Income: {calculateTotal(incomeData)}</Typography>
      <Typography variant="subtitle2">Total Expenses: {calculateTotal(expensesData)}</Typography>
      <Typography variant="subtitle2">Profit or Loss: {calculateTotal(incomeData) - calculateTotal(expensesData)}</Typography>

      <BarChart width={500} height={300} data={incomeData.concat(expensesData)}>
        <XAxis dataKey="description" />
        <YAxis />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
