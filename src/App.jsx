import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard.jsx';
import Resources from './pages/Resources';
import AddDebt from "./pages/AddDebt.jsx";
import Footer from './components/Footer';
// The main App component that sets up routing and the overall layout of the application
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F3FAFA] text-slate-900 transition-colors duration-500 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/add-debt" element={<AddDebt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;