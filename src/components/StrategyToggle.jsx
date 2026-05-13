import React from 'react';
import { useDebts } from '../context/DebtContext';

// The StrategyToggle component allows users to switch 
// between the Snowball and Avalanche methods for debt repayment
const StrategyToggle = () => {
  const { strategy, setStrategy } = useDebts();

  return (
    <div className="flex justify-center my-6">
      <div className="bg-slate-200 p-1 rounded-xl flex shadow-inner">
        <button
          onClick={() => setStrategy('snowball')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            strategy === 'snowball' 
            ? 'bg-primary text-white shadow-md' 
            : 'text-slate-600 hover:text-primary'
          }`}
        >
          Snowball
        </button>
        <button
          onClick={() => setStrategy('avalanche')}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            strategy === 'avalanche' 
            ? 'bg-primary text-white shadow-md' 
            : 'text-slate-600 hover:text-primary'
          }`}
        >
          Avalanche
        </button>
      </div>
    </div>
  );
};

export default StrategyToggle;