import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

const mockPackets = [
  { id: 1, time: "10:25:14.002", src: "192.168.1.45:49152", dst: "185.220.101.5:8443", proto: "TCP", len: 1420, score: 0.92, status: "Critical" },
  { id: 2, time: "10:25:13.980", src: "192.168.1.10:53", dst: "8.8.8.8:53", proto: "UDP", len: 64, score: 0.02, status: "Normal" },
  { id: 3, time: "10:25:13.850", src: "192.168.1.12:443", dst: "104.21.55.2:443", proto: "TCP", len: 512, score: 0.15, status: "Normal" },
  { id: 4, time: "10:25:13.710", src: "192.168.1.45:49151", dst: "185.220.101.5:8443", proto: "TCP", len: 1420, score: 0.88, status: "High" },
  { id: 5, time: "10:25:13.500", src: "192.168.1.100:80", dst: "192.168.1.1:80", proto: "HTTP", len: 230, score: 0.05, status: "Normal" },
];

export default function PacketInspector() {
  const [selectedPacket, setSelectedPacket] = useState(mockPackets[0]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
        <h2 className="text-xl font-bold">Real-Time Packet Stream</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Filter by IP / Port..." className="bg-slate-900 border border-slate-700 text-sm rounded-lg pl-9 pr-3 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500" />
          </div>
          <button className="flex items-center gap-1.5 text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Packet Table */}
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs uppercase text-slate-400 font-mono">
              <tr>
                <th className="p-3">Time</th>
                <th className="p-3">Source</th>
                <th className="p-3">Destination</th>
                <th className="p-3">Proto</th>
                <th className="p-3">Size</th>
                <th className="p-3">Anomaly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono text-xs">
              {mockPackets.map((pkt) => (
                <tr key={pkt.id} onClick={() => setSelectedPacket(pkt)} className={`hover:bg-slate-700/40 cursor-pointer ${selectedPacket.id === pkt.id ? 'bg-indigo-950/40 border-l-2 border-indigo-500' : ''}`}>
                  <td className="p-3 text-slate-400">{pkt.time}</td>
                  <td className="p-3">{pkt.src}</td>
                  <td className="p-3">{pkt.dst}</td>
                  <td className="p-3"><span className="px-1.5 py-0.5 rounded bg-slate-800">{pkt.proto}</span></td>
                  <td className="p-3">{pkt.len} B</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${pkt.score > 0.7 ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {(pkt.score * 100).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Packet Detail Viewer */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-4">
          <h3 className="text-base font-semibold border-b border-slate-700 pb-2 flex items-center gap-2">
            <Eye className="w-4 h-4 text-indigo-400" /> Packet Deep Inspection
          </h3>
          {selectedPacket ? (
            <div className="space-y-3 font-mono text-xs">
              <div><span className="text-slate-400">Time:</span> {selectedPacket.time}</div>
              <div><span className="text-slate-400">Source:</span> {selectedPacket.src}</div>
              <div><span className="text-slate-400">Destination:</span> {selectedPacket.dst}</div>
              <div><span className="text-slate-400">Protocol:</span> {selectedPacket.proto}</div>
              <div><span className="text-slate-400">Length:</span> {selectedPacket.len} Bytes</div>
              <div className="pt-2">
                <span className="text-slate-400 block mb-1">Payload Hex Preview:</span>
                <div className="bg-slate-950 p-3 rounded text-emerald-400 border border-slate-800 overflow-x-auto leading-relaxed">
                  4500 05dc 1a2b 4000 4006 e1a2 c0a8 012d b9dc 6505 0050 20f5 0000
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500">Select a packet row to inspect headers.</p>
          )}
        </div>
      </div>
    </div>
  );
}