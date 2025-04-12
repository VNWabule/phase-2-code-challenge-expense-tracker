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
  const [sortBy, setSortBy] = useState(null);

const handleDelete = (indexToRemove) => {
  setExpenses(prev => prev.filter((_, index) => index !== indexToRemove));
};

 const filteredExpenses = expenses.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

const sortedExpenses = [...filteredExpenses].sort((a, b) => {
  if (!sortBy) return 0;
  return a[sortBy].localeCompare(b[sortBy]);
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

 

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <ExpenseForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Expense Tracker</h1>
        <p>Start keeping control of your finances with this app. Record, categorize and analyze your spending.</p>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <div style={{ marginBottom: '20px' }}>
        <label htmlFor="sort" style={{ marginRight: '10px' }}>Sort By:</label>
        <select
          id="sort"
          value={sortBy || ''}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '8px' }}
        >
        <option value="">None</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
        </select>
        </div>

        <ExpenseTable expenses={sortedExpenses}  onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
