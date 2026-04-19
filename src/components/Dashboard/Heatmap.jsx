export default function Heatmap({ tracker }) {
  const { state } = tracker;
  
  // 112 days = 16 weeks * 7 days
  const WEEKS = 16;
  const DAYS_PER_WEEK = 7;

  // Generate a matrix of days [column][row] -> day number 1-112
  const matrix = Array.from({ length: WEEKS }, (_, w) => 
    Array.from({ length: DAYS_PER_WEEK }, (_, d) => w * DAYS_PER_WEEK + d + 1)
  );

  return (
    <div className="heatmap-container fade-in" style={{ marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: 1 }}>
          📅 Contribution Activity
        </h3>
        <span style={{ fontSize: 11, color: 'var(--muted)' }}>
          {tracker.daysComplete} / 112 Days Completed
        </span>
      </div>
      
      <div style={{ 
        background: 'var(--bg2)', 
        border: '1px solid var(--border)', 
        borderRadius: '12px', 
        padding: '20px',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${WEEKS}, 1fr)`, 
          gap: '4px',
          minWidth: 'max-content'
        }}>
          {matrix.map((week, wIdx) => (
            <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {week.map(dayNum => {
                const isCompleted = state.completedDays[dayNum];
                return (
                  <div 
                    key={dayNum}
                    title={`Day ${dayNum}${isCompleted ? ' (Completed)' : ''}`}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '2px',
                      background: isCompleted ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: isCompleted ? '0 0 6px rgba(5,195,222,0.4)' : 'none',
                      transition: 'all 0.2s ease',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px', marginTop: '12px', fontSize: '10px', color: 'var(--muted)' }}>
          Less 
          <div style={{ width: 10, height: 10, borderRadius: 2, background: 'rgba(255, 255, 255, 0.05)' }} />
          <div style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--accent)', opacity: 0.5 }} />
          <div style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--accent)', boxShadow: '0 0 6px rgba(5,195,222,0.4)' }} />
          More
        </div>
      </div>
    </div>
  );
}
