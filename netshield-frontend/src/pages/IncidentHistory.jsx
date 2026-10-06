import React from 'react';
import { History, Download } from 'lucide-react';
import { mockAlerts } from '../mockData';

export default function IncidentHistory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <History className="w-5 h-5 text-indigo-400" /> Security Incident Audit Logs
          </h2>
          <p className="text-xs text-slate-400">Historical archive of flagged network threat events.</p>
        </div>
        <button className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-xs px-3 py-2 rounded-lg font-semibold cursor-pointer">
          <Download className="w-4 h-4" /> Export Audit Log
        </button>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-4">
        {mockAlerts.map((incident) => (
          <div key={incident.id} className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/60 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-slate-400">{incident.id} • {incident.timestamp}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">{incident.severity} Severity</span>
            </div>
            <h3 className="font-semibold text-slate-200">{incident.type}</h3>
            <p className="text-xs text-slate-400">{incident.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}