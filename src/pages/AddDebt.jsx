import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebts } from '../context/DebtContext';

// The AddDebt component provides a form for users to input new debts, including the name, balance, interest rate, and minimum payment. 
// It validates the input and adds the new debt to the context before redirecting back to the dashboard.
const AddDebt = () => {
  const { addDebt } = useDebts();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    balance: '',
    interestRate: '',
    minPayment: ''
  });

  // Auto-dismiss notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.balance <= 0 || formData.interestRate < 0 || formData.minPayment <= 0) {
      alert("Please enter valid positive amounts.");
      return;
    }

    // Add the new debt to the context
    addDebt({
      name: formData.name,
      balance: parseFloat(formData.balance),
      interestRate: parseFloat(formData.interestRate),
      minPayment: parseFloat(formData.minPayment),
      currentBalance: parseFloat(formData.balance),
    });
    setShowNotification(true);
    setFormData({ name: '', balance: '', interestRate: '', minPayment: '' });

    setTimeout(() => navigate('/dashboard'), 3000); // Redirect after 3 seconds
  };

  return (
    <div className="max-w-md mx-auto">
      {showNotification && ( // Show success notification when a debt is added
        <div className="mb-6 p-4 bg-primary text-white rounded-xl shadow-lg font-semibold text-center transition-opacity duration-300">
          ✓ Debt successfully added!
        </div>
      )}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Add New Debt</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">Debt Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Chase Sapphire" // Example placeholder credit card name for better UX
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Balance ($)</label>
            <input 
              required
              type="number" 
              placeholder="0.00"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
              value={formData.balance}
              onChange={(e) => setFormData({...formData, balance: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">APR (%)</label>
            <input 
              required
              type="number" 
              step="0.01"
              placeholder="19.99" // Example placeholder APR for better UX
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
              value={formData.interestRate}
              onChange={(e) => setFormData({...formData, interestRate: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">Min. Payment ($)</label>
          <input 
            required
            type="number" 
            placeholder="25.00" // Example placeholder minimum payment for better UX
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
            value={formData.minPayment}
            onChange={(e) => setFormData({...formData, minPayment: e.target.value})}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-secondary shadow-lg shadow-teal-100 transition-all mt-4"
        >
          Add to My Snowfall
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddDebt;