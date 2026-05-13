import React, { useState } from 'react';
import { useDebts } from '../context/DebtContext';

const DebtCard = ({ debt, onDelete }) => {
  // Added undoLastPayment here
  const { updateBalance, undoLastPayment } = useDebts(); 
  const [payment, setPayment] = useState('');

    // Calculate the percentage paid off for the progress bar
  const paidAmount = debt.balance - debt.currentBalance;
  const percentage = Math.min(Math.round((paidAmount / debt.balance) * 100), 100);
    
    // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    const amount = parseFloat(payment);
    if (isNaN(amount) || amount <= 0) return;

      // Calculate the new balance and update it in the context
    const newBalance = Math.max(0, debt.currentBalance - amount);
    updateBalance(debt.id, newBalance);
    setPayment('');
  };

 return (
    <div className="bg-[#FFFFFF] p-6 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden transition-all">
      {debt.currentBalance === 0 && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-xl font-bold text-xs uppercase animate-bounce">
          ❄️ Paid Off! ❄️
        </div>
      )}
      {/* Debt Name and Interest Rate */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">{debt.name}</h3>
          <p className="text-sm text-slate-500 font-medium">Interest: {debt.interestRate}%</p>
        </div>
        <button onClick={() => onDelete(debt.id)} className="text-slate-300 hover:text-red-500 font-bold text-xs">REMOVE</button>
      </div>
      {/* Progress Bar and Payment Form */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm font-bold mb-1">
            <span className="text-slate-600">Progress</span>
            <div className="flex items-center gap-2">
              {debt.previousBalance !== undefined && (
                <button 
                  onClick={() => undoLastPayment(debt.id)}
                  className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded hover:bg-slate-200 transition-all font-bold"
                >
                  UNDO
                </button>
              )} {/*Undo button only shows if there's a previous balance to revert to*/}
              <span className="text-primary">{percentage}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div className="bg-primary h-full transition-all duration-700" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>

        {/* Display Last Payment Info */}
        {debt.lastPaymentAmount && (
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex justify-between items-center text-[11px]">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Last Mapped Payment</span>
            <span className="text-slate-600 font-bold">
               ${debt.lastPaymentAmount} • {debt.lastPaymentDate}
            </span>
          </div>
        )}
        {/* Remaining Balance and Payment Form */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase">Remaining</p>
            <p className={`text-2xl font-black ${debt.currentBalance === 0 ? 'text-primary' : 'text-slate-900'}`}>
              ${debt.currentBalance.toLocaleString()}
            </p>
          </div>
          {/* Payment Form (only show if there's a balance left) */}
          {debt.currentBalance > 0 && (
            <form onSubmit={handlePayment} className="flex gap-2">
              <input 
                type="number" 
                placeholder="$" 
                className="w-20 p-1 text-sm border rounded-lg outline-none focus:ring-1 focus:ring-secondary"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
              <button className="bg-secondary text-white px-3 py-1 rounded-lg text-xs font-bold hover:brightness-110">
                PAY
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DebtCard;