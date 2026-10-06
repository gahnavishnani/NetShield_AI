import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PacketInspector from './pages/PacketInspector';
import ModelDiagnostics from './pages/ModelDiagnostics';
import FirewallManager from './pages/FirewallManager';
import IncidentHistory from './pages/IncidentHistory';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/packets" element={<PacketInspector />} />
            <Route path="/model-settings" element={<ModelDiagnostics />} />
            <Route path="/firewall-rules" element={<FirewallManager />} />
            <Route path="/incidents" element={<IncidentHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}