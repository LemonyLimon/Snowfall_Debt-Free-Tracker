import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DebtProvider } from './context/DebtContext'
// The entry point of the application, where we wrap the App component with the DebtProvider to 
// provide global state management for debts throughout the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DebtProvider>
      <App />
    </DebtProvider>
  </React.StrictMode>,
)