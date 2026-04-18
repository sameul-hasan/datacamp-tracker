export default function Banner({ level, xp }) {
  return (
    <div className="banner">
      <span className="dot" /><span>DataCamp Classroom Tracker</span>
      <span className="dot" /><span>Level {level.level}: {level.title}</span>
      <span className="dot" /><span>{xp} XP</span>
      <span className="dot" />
    </div>
  );
}
