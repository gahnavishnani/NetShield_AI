import React from 'react';
import { ShieldCheck, Plus, Trash2 } from 'lucide-react';

const activeRules = [
  { id: "FW-101", ip: "185.220.101.5", action: "BLOCK OUTBOUND", reason: "Data Exfiltration Anomaly", date: "2026-10-03" },
  { id: "FW-102", ip: "45.33.32.156", action: "BLOCK ALL", reason: "Port Scanning Activity", date: "2026-10-03" },
];

export default function FirewallManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> Firewall Rule Manager
          </h2>
          <p className="text-xs text-slate-400">Manage rules auto-suggested or deployed by NetShield AI.</p>
        </div>
        <button className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs px-3 py-2 rounded-lg font-semibold cursor-pointer">
          <Plus className="w-4 h-4" /> Add Manual Rule
        </button>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900 text-xs uppercase text-slate-400 font-mono">
            <tr>
              <th className="p-3">Rule ID</th>
              <th className="p-3">Target IP</th>
              <th className="p-3">Action</th>
              <th className="p-3">Triggered Reason</th>
              <th className="p-3">Date Added</th>
              <th className="p-3 text-right">Revoke</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 font-mono text-xs">
            {activeRules.map((rule) => (
              <tr key={rule.id} className="hover:bg-slate-700/30">
                <td className="p-3 text-slate-400">{rule.id}</td>
                <td className="p-3 font-bold text-red-400">{rule.ip}</td>
                <td className="p-3"><span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded">{rule.action}</span></td>
                <td className="p-3 text-slate-300">{rule.reason}</td>
                <td className="p-3 text-slate-400">{rule.date}</td>
                <td className="p-3 text-right">
                  <button className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-red-400 cursor-pointer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}