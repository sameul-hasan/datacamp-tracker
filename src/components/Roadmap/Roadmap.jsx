import { useState } from 'react';
import { MONTHS, WEEKS, COURSES, TAG_COLORS, DAILY_THEORY } from '../../data/curriculum';

export default function Roadmap({ tracker }) {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="fade-in">
      <h2 className="section-head">// Day-by-Day Roadmap</h2>
      <div className="tracker-actions">
        <button className="btn" onClick={() => setExpandAll(prev => !prev)}>
          {expandAll ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {MONTHS.map(month => (
        <div key={month.id}>
          <div className="phase-header" style={{'--phase-color': month.color}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:month.color}} />
            <div className="phase-num">Month {month.id} / 06</div>
            <div className="phase-title">{month.title}</div>
          </div>
          {WEEKS.filter(w => month.weeks.includes(w.id)).map(week => (
            <WeekCard key={week.id} week={week} tracker={tracker} forceOpen={expandAll} />
          ))}
        </div>
      ))}
    </section>
  );
}

function WeekCard({ week, tracker, forceOpen }) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;
  const progress = tracker.weekProgress(week.id);
  const isComplete = progress === 100;
  const weekNum = parseInt(week.id.replace('w',''));

  return (
    <div className={`week-card ${isOpen ? 'open' : ''} ${isComplete ? 'complete' : ''}`}>
      <div className="week-header" onClick={() => setOpen(p => !p)}>
        <div className="week-left">
          <span className="week-num">W{String(weekNum).padStart(2,'0')}</span>
          <span className="week-title">{week.title}</span>
        </div>
        <div className="week-right">
          <span className="week-progress">{progress}%</span>
          <button className="btn" style={{padding:'4px 10px',fontSize:9}} onClick={e => { e.stopPropagation(); tracker.toggleWeek(week.id); }}>
            {isComplete ? '✓ Done' : 'Mark All'}
          </button>
          <span className="week-chevron">▼</span>
        </div>
      </div>
      <div className="week-body">
        {week.days.map(day => {
          const isDone = tracker.state.completedDays[day.day];
          const isTarget = tracker.nextDay === day.day;
          const isWeekend = day.dow === 'SAT' || day.dow === 'SUN';
          const course = day.courseId ? COURSES.find(c => c.id === day.courseId) : null;
          const tagColor = TAG_COLORS[day.tag] || 'var(--muted)';
          return (
            <div key={day.day}
              className={`day-row ${isDone ? 'completed' : ''} ${isTarget ? 'target' : ''} ${isWeekend ? 'weekend' : ''}`}>
              <div className="day-num-col">
                <div className="day-dow">{day.dow}</div>
                <div className="day-label">D{day.day}</div>
                <button className={`day-toggle ${isDone ? 'done' : ''}`}
                  onClick={() => tracker.toggleDay(day.day)}>{isDone ? '✓' : ''}</button>
              </div>
              <div className="day-content">
                <div className="day-top">
                  <span className="day-topic">{day.topic}</span>
                  <span className="tag" style={{background:`${tagColor}20`,color:tagColor}}>{day.tag}</span>
                </div>
                <div className="day-task">{day.task}</div>
                {DAILY_THEORY[day.day] && (
                  <div style={{fontSize:11,color:'var(--purple)',marginTop:4,lineHeight:1.5,background:'rgba(155,109,255,0.06)',padding:'6px 10px',borderRadius:6,border:'1px solid rgba(155,109,255,0.15)'}}>
                    🧮 {DAILY_THEORY[day.day].math}
                    {DAILY_THEORY[day.day].resource && <> · <a href={DAILY_THEORY[day.day].resource} target="_blank" rel="noopener noreferrer" style={{fontSize:10}}>📎 Resource</a></>}
                  </div>
                )}
                {course && (
                  <a href={course.url} target="_blank" rel="noopener noreferrer" className="day-course-link">
                    📘 {course.name}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
