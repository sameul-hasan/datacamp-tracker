import { MONTHS, COURSES } from '../../data/curriculum';

export default function Courses({ tracker }) {
  return (
    <section className="fade-in">
      <h2 className="section-head">// 31 DataCamp Courses (All Free with Classroom)</h2>
      {MONTHS.map(month => {
        const monthCourses = COURSES.filter(c => c.month === month.id);
        if (!monthCourses.length) return null;
        return (
          <div key={month.id}>
            <h3 style={{fontSize:13,fontWeight:700,color:month.color,margin:'20px 0 10px',fontFamily:'JetBrains Mono',letterSpacing:1,textTransform:'uppercase'}}>
              Month {month.id}: {month.title}
            </h3>
            <div className="course-grid">
              {monthCourses.map(c => {
                const isDone = tracker.state.completedCourses[c.id];
                return (
                  <div key={c.id} className={`course-pill ${isDone ? 'done' : ''}`}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="course-name">{c.name}</a>
                    <button className={`course-check ${isDone ? 'done' : ''}`}
                      onClick={() => tracker.toggleCourse(c.id)}>{isDone ? '✓' : ''}</button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
