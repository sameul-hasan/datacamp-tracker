const TABS = [
  { id:'dashboard', label:'🏠 Home' },
  { id:'roadmap', label:'🗺️ Roadmap' },
  { id:'courses', label:'📚 Courses' },
  { id:'certs', label:'🏆 Certs' },
  { id:'rewards', label:'⭐ Rewards' },
  { id:'projects', label:'📁 Projects' },
];

const MORE_TABS = [
  { id:'interview', label:'🎯 Interview' },
  { id:'setup', label:'⚙️ Setup' },
  { id:'practice', label:'🧪 Practice' },
  { id:'showcase', label:'📣 Showcase' },
  { id:'guide', label:'📖 Guide' },
];

const EXTRA = [
  { id:'market', label:'📊 Market' },
  { id:'builder', label:'👤 Builder' },
];

import { useState } from 'react';

export default function Navbar({ tab, setTab }) {
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (id) => {
    setTab(id);
    setMobileMenuOpen(false);
    setShowMore(false);
  };

  return (
    <nav className="nav">
      {/* Mobile Hamburger Header */}
      <div className="nav-mobile-header">
        <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--accent)',fontWeight:700,letterSpacing:1,textTransform:'uppercase'}}>Menu</span>
        <button className="hamburger-btn" onClick={() => setMobileMenuOpen(p => !p)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-inner ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {TABS.map(t => (
          <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`}
            onClick={() => handleTabClick(t.id)}>{t.label}</button>
        ))}
        <span className="nav-sep">|</span>
        <div className="more-dropdown-container">
          <button className={`nav-btn ${MORE_TABS.some(t=>t.id===tab) ? 'active' : ''}`}
            onClick={() => setShowMore(p => !p)}>
            📋 More {showMore ? '▲' : '▼'}
          </button>
          {showMore && (
            <div className="more-dropdown">
              {MORE_TABS.map(t => (
                <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`}
                  style={{display:'block',width:'100%',textAlign:'left',marginBottom:2}}
                  onClick={() => handleTabClick(t.id)}>{t.label}</button>
              ))}
            </div>
          )}
        </div>
        <span className="nav-sep">|</span>
        {EXTRA.map(t => (
          <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`}
            onClick={() => handleTabClick(t.id)}>{t.label}</button>
        ))}
      </div>
    </nav>
  );
}
