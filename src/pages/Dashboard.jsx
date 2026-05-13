import React from 'react';
import { Link } from 'react-router-dom';
import { useDebts } from '../context/DebtContext';
import DebtCard from '../components/DebtCard';
import StrategyToggle from '../components/StrategyToggle'; 

const Dashboard = () => {
  const { debts, strategy, deleteDebt } = useDebts();

  // The Sorting Logic (Snowball vs Avalanche)
  const sortedDebts = [...debts].sort((a, b) => {
    if (strategy === 'snowball') {
      // Smallest Balance First ()
      return a.currentBalance - b.currentBalance;
    } else {
      // Highest Interest Rate First (Avalanche)
      return b.interestRate - a.interestRate;
    }
  });
  // The Dashboard Layout
 return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-primary">Your Dashboard</h2>
          <p className="text-slate-500 font-medium italic">
            Focusing on: {strategy === 'snowball' ? 'Smallest Wins First' : 'Highest Interest Savings'}
          </p>
        </div>
        <Link 
          to="/add-debt" 
          className="bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 shadow-lg transition-all"
        >
          + New Debt
        </Link>
     </div>
     
      {/* The Debt Strategy Switcher */}
      <StrategyToggle />

      {/* The Debt List (Dynamic Rendering) */}
      {debts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-lg">No debts added yet. Melt your first debt today!</p>
          <Link to="/add-debt" className="text-primary font-bold hover:underline mt-2 inline-block">
            Get Started →
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {sortedDebts.map((debt) => (
            <DebtCard 
              key={debt.id} 
              debt={debt} 
              onDelete={deleteDebt} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;