import React from 'react';

const ExpenseForm = ({ formData, onChange, onSubmit }) => (
  <div className="expense-form-wrapper">
    <h3>Add Expense</h3>
    <form onSubmit={onSubmit} className="expense-form">
      <input type="text" name="name" placeholder="Enter expense name" value={formData.name} onChange={onChange} required />
      <input type="text" name="description" placeholder="Enter expense description" value={formData.description} onChange={onChange} required />
      <input type="text" name="category" placeholder="Enter category" value={formData.category} onChange={onChange} required />
      <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={onChange} required />
      <input type="date" name="date" value={formData.date} onChange={onChange} required />
      <button type="submit">Add To List</button>
    </form>
  </div>
);

export default ExpenseForm;
