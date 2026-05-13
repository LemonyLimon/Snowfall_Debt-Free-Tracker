import React, { createContext, useState, useEffect, useContext } from 'react';
// Confetti library for celebration effects when a debt is paid off
import confetti from 'canvas-confetti'; 

const DebtContext = createContext();


export const DebtProvider = ({ children }) => {
    // Load initial data from localStorage or start with an empty array
    const [debts, setDebts] = useState(() => {
        const savedDebts = localStorage.getItem('snowfall_debts');
        return savedDebts ? JSON.parse(savedDebts) : [];
    });

    const [strategy, setStrategy] = useState('snowball'); //snow ball or avalanche method

    // Save to localStorage whenever the debts array changes
    useEffect(() => {
        localStorage.setItem('snowfall_debts', JSON.stringify(debts));
    }, [debts]);

    // Add a new debt to the list
    const addDebt = (newDebt) => {
        setDebts([...debts, { ...newDebt, id: Date.now() }]);
    };

    // Delete a debt by filtering it out of the list
    const deleteDebt = (id) => {
        setDebts(debts.filter(debt => debt.id !== id));
    };

    // Update balance and trigger confetti if paid off
    const updateBalance = (id, newBalance) => {
        if (newBalance === 0) {
            confetti({
                particleCount: 350, // Increased particle count for a more festive effect
                spread: 175, // Wider spread to create a more immersive confetti effect
                ticks: 400, // Longer duration for particles to fall
                origin: { y: 0.6 }, // Make confetti fall from a higher point for better visibility
                colors: ['#0D9488', '#F472B6', '#FBBF24', '#06B6D4']
            });
        }
        // Store the last payment amount and date for potential undo functionality
        setDebts(debts.map(debt => {
            if (debt.id === id) {
                return { 
                    ...debt, 
                    lastPaymentAmount: (debt.currentBalance - newBalance).toFixed(2),
                    lastPaymentDate: new Date().toLocaleDateString(),
                    previousBalance: debt.currentBalance, // Store previous balance for undo
                    currentBalance: newBalance 
                };
            }
            return debt;
        }));
    };
    // Undo the last payment by restoring the previous balance
    const undoLastPayment = (id) => {
        setDebts(debts.map(debt => {
            if (debt.id === id && debt.previousBalance !== undefined) {
                return { 
                    ...debt, 
                    currentBalance: debt.previousBalance,
                    lastPaymentAmount: null,
                    lastPaymentDate: null,
                    previousBalance: undefined 
                };
            }
            return debt;
        }));
    };

    return (
        <DebtContext.Provider value={{ 
            debts, strategy, setStrategy, addDebt, deleteDebt, updateBalance, 
            undoLastPayment
        }}>
            {children}
        </DebtContext.Provider>
    );
};

export const useDebts = () => useContext(DebtContext);