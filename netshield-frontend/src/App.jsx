import React, { useState } from 'react';
import { Shield, AlertTriangle, Activity, Wifi, Terminal, Check, Copy } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockStats, mockTrafficData, mockAlerts } from './mockData';

export default function App() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <header className="flex justify-between items-center pb-6 mb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-emerald-400" />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">NetShield AI</h1>
            <p className="text-xs text-slate-400">Zero-Day Anomaly Detection Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
          <Activity className="w-4 h-4 animate-pulse" />
          Status: {mockStats.systemStatus}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Packets Monitored" value={mockStats.totalPackets} icon={<Wifi className="text-blue-400" />} />
        <StatCard title="Current Bandwidth" value={mockStats.bandwidth} icon={<Activity className="text-emerald-400" />} />
        <StatCard title="Active Threats" value={mockStats.activeThreats} icon={<AlertTriangle className="text-amber-400" />} />
        <StatCard title="Detection Engine" value="Autoencoder AI" icon={<Shield className="text-indigo-400" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-4 text-slate-200">Network Traffic & Anomaly Score Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockTrafficData}>
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} />
                <Area type="monotone" dataKey="packets" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-3 text-slate-200">AI Threat Explainer Engine</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              NetShield AI monitors live socket traffic and applies unsupervised machine learning to detect behavioral deviations without signature databases.
            </p>
          </div>
          <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-700/60 text-xs text-slate-300">
            <span className="font-semibold text-emerald-400">Active Rule:</span> Auto-generating firewall block recommendations for high-confidence anomalies.
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4 text-slate-200 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          Detected Anomalies & Automated Mitigation
        </h2>

        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="p-4 bg-slate-900/60 border border-slate-700/60 rounded-lg flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{alert.id}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400">{alert.severity} Risk</span>
                  <span className="text-xs text-slate-400">{alert.timestamp}</span>
                </div>
                <h3 className="font-semibold text-slate-200">{alert.type}</h3>
                <p className="text-sm text-slate-400"><strong className="text-slate-300">Route:</strong> {alert.sourceIP} → {alert.destIP}</p>
                <p className="text-sm text-slate-300 bg-slate-800/40 p-2.5 rounded border border-slate-700/30 mt-2">
                  <strong className="text-indigo-400">AI Report:</strong> {alert.explanation}
                </p>
              </div>

              <div className="md:w-80 flex flex-col justify-center bg-slate-950 p-3 rounded border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Suggested Firewall Rule</span>
                </div>
                <div className="bg-slate-900 p-2 rounded text-xs font-mono text-emerald-300 overflow-x-auto mb-2 border border-slate-800">
                  {alert.firewallRule}
                </div>
                <button
                  onClick={() => handleCopy(alert.firewallRule, alert.id)}
                  className="flex items-center justify-center gap-2 text-xs py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition"
                >
                  {copiedId === alert.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Rule Command</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-400 mb-1">{title}</p>
        <p className="text-xl font-bold text-slate-100">{value}</p>
      </div>
      <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-700/50">{icon}</div>
    </div>
  );
}