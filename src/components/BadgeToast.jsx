export default function BadgeToast({ badge }) {
  if (!badge) return null;
  return (
    <div className="badge-toast">
      <span className="badge-toast-icon confetti">{badge.icon}</span>
      <div className="badge-toast-text">
        <h4>Badge Unlocked!</h4>
        <p>{badge.name} — {badge.desc}</p>
        <span className="badge-toast-xp">+{badge.xp} XP</span>
      </div>
    </div>
  );
}
