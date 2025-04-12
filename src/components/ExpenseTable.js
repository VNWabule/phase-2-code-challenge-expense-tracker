import React from 'react';

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  };

const ExpenseTable = ({ expenses }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#333', color: '#fff' }}>
        <th>Expense</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense, index) => (
        <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
          <td>{expense.name}</td>
          <td>{expense.description}</td>
          <td>{expense.category}</td>
          <td>{expense.amount}</td>
          <td>{formatDate(expense.date)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpenseTable;
