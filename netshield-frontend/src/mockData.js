export const mockStats = {
  totalPackets: "1,284,920",
  bandwidth: "42.8 Mbps",
  activeThreats: 2,
  systemStatus: "Warning",
};

export const mockTrafficData = [
  { time: "10:00", packets: 1200, anomalyScore: 0.1 },
  { time: "10:05", packets: 1400, anomalyScore: 0.2 },
  { time: "10:10", packets: 3800, anomalyScore: 0.85 },
  { time: "10:15", packets: 1100, anomalyScore: 0.15 },
  { time: "10:20", packets: 1300, anomalyScore: 0.1 },
  { time: "10:25", packets: 4500, anomalyScore: 0.92 },
];

export const mockAlerts = [
  {
    id: "ALT-8902",
    timestamp: "10:25:14 AM",
    sourceIP: "192.168.1.45",
    destIP: "185.220.101.5",
    severity: "High",
    type: "Unusual Outbound Data Exfiltration",
    explanation: "High-volume encrypted packet stream detected towards an unlisted high-risk IP over non-standard port 8443.",
    firewallRule: "sudo ufw deny out to 185.220.101.5",
  },
  {
    id: "ALT-8899",
    timestamp: "10:10:02 AM",
    sourceIP: "192.168.1.12",
    destIP: "45.33.32.156",
    severity: "Medium",
    type: "Port Scanning Activity",
    explanation: "Rapid consecutive TCP handshake requests detected across multiple port ranges within 2 seconds.",
    firewallRule: "sudo ufw deny out to 45.33.32.156",
  },
];