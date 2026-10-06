import React, { useState } from 'react';
import { Cpu, RefreshCw, Sliders } from 'lucide-react';

export default function ModelDiagnostics() {
  const [threshold, setThreshold] = useState(0.8);

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h2 className="text-xl font-bold mb-1 flex items-center gap-2 text-slate-100">
          <Cpu className="w-5 h-5 text-indigo-400" /> Autoencoder AI Model Diagnostics
        </h2>
        <p className="text-xs text-slate-400">Unsupervised neural network trained on benign traffic baselines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sensitivity Controls */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-4">
          <h3 className="font-semibold text-slate-200 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" /> Sensitivity Threshold Control
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Loss Threshold (Loss &gt; {threshold})</span>
              <span className="font-bold text-indigo-400">{threshold} MSE</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-400">Lower values capture minor deviations (more alerts). Higher values reduce false positives.</p>
          </div>
        </div>

        {/* Model Metrics */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-slate-200">Benchmark Performance (CIC-IDS2017)</h3>
          <div className="space-y-2 text-xs">
            <MetricBar label="Accuracy" value="98.4%" pct={98.4} color="bg-emerald-500" />
            <MetricBar label="Precision" value="96.1%" pct={96.1} color="bg-indigo-500" />
            <MetricBar label="Recall" value="94.8%" pct={94.8} color="bg-amber-500" />
          </div>
          <button className="mt-3 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition">
            <RefreshCw className="w-3.5 h-3.5" /> Retrain Model Baseline
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricBar({ label, value, pct, color }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-slate-400">{label}</span>
        <span className="font-semibold text-slate-200">{value}</span>
      </div>
      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
        <div className={`${color} h-full`} style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}