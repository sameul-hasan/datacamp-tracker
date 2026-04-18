export default function MetricCard({ label, value, pct, color }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="progress-bar">
        <div className={`progress-fill ${color || ''}`} style={{width:`${pct}%`}} />
      </div>
    </div>
  );
}
