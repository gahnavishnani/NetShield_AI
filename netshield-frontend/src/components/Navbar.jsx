import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Eye, Cpu, ShieldCheck, History, Activity } from 'lucide-react';
import { mockStats } from '../mockData';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { path: '/packets', label: 'Packet Inspector', icon: <Eye className="w-4 h-4" /> },
    { path: '/model-settings', label: 'AI Diagnostics', icon: <Cpu className="w-4 h-4" /> },
    { path: '/firewall-rules', label: 'Firewall Rules', icon: <ShieldCheck className="w-4 h-4" /> },
    { path: '/incidents', label: 'Audit Logs', icon: <History className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-emerald-400" />
          <div>
            <h1 className="text-xl font-bold tracking-wide">NetShield AI</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Zero-Day Anomaly Detection</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          Status: {mockStats.systemStatus}
        </div>
      </div>
    </header>
  );
}