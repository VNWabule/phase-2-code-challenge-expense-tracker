import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses(prev => [...prev, { ...formData, amount: parseFloat(formData.amount) }]);
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  const filteredExpenses = expenses.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <ExpenseForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Expense Tracker</h1>
        <p>Start keeping control of your finances with this app. Record, categorize and analyze your spending.</p>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
};

export default App;
