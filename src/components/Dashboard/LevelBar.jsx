export default function LevelBar({ xp, currentLevel, nextLevel, levelProgress }) {
  return (
    <div className="level-bar">
      <span className="level-icon">{currentLevel.level >= 8 ? '🏆' : currentLevel.level >= 5 ? '⚡' : '🌱'}</span>
      <div className="level-info">
        <div className="level-title" style={{color:currentLevel.color}}>Lvl {currentLevel.level}: {currentLevel.title}</div>
        <div className="level-xp">{xp} XP{nextLevel ? ` · ${nextLevel.minXP - xp} XP to next level` : ' · MAX LEVEL!'}</div>
      </div>
      <div className="level-track">
        <div className="progress-bar"><div className="progress-fill" style={{width:`${levelProgress}%`,background:currentLevel.color}} /></div>
      </div>
    </div>
  );
}
